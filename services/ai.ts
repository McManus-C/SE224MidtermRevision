import { GoogleGenAI } from "@google/genai";
import { TOPICS, GLOSSARY } from "../data";
import { ChatMessage } from "../types";

let aiClient: GoogleGenAI | null = null;
let currentKey: string | null = null;

// Initialize or update the AI client with a user-provided key
export const initAI = (apiKey: string) => {
  if (apiKey !== currentKey) {
    aiClient = new GoogleGenAI({ apiKey });
    currentKey = apiKey;
  }
};

export const askAI = async (
  history: ChatMessage[],
  context?: { topicId?: string; termId?: string },
  apiKey?: string
): Promise<string> => {
  try {
    // If a key is passed directly (e.g. from context), use it to ensure init
    if (apiKey) {
      initAI(apiKey);
    }

    if (!aiClient) {
      return "Please set your Gemini API Key in the Login screen to use the AI Tutor.";
    }

    let contextText = "";

    // Build context based on what the user is looking at
    if (context?.topicId) {
      const topic = TOPICS.find((t) => t.id === context.topicId);
      if (topic) {
        const cleanNotes = topic.fullNotes.replace(/<[^>]*>?/gm, '');
        contextText += `\nCurrent Topic: ${topic.title}\nKey Points: ${topic.keyPoints.join("; ")}\nRelevant Content: ${cleanNotes.substring(0, 1000)}...\n`;
      }
    }

    if (context?.termId) {
      const term = GLOSSARY.find((t) => t.id === context.termId);
      if (term) {
        contextText += `\nCurrent Term: ${term.term}\nDefinition: ${term.definition}\nExample: ${term.example}\nAnalogy: ${term.analogy || 'N/A'}\n`;
      }
    }

    // General instructions
    const systemInstruction = `
      You are a friendly and encouraging tutor for a Level 5 Undergraduate Applied Sports Nutrition module (SE224).
      Your goal is to explain concepts simply and clearly to students who are revising for exams.
      
      Guidelines:
      1. Base your answers on the provided context where possible.
      2. Keep answers concise (under 150 words usually).
      3. Use simple language but correct terminology suitable for a 2nd year university student.
      4. If a student asks about a specific term (like AMPK or Glycogen), explain it using a sports analogy if possible.
      5. ENGAGE THE STUDENT: Always end your response with a short "Quick Check" question to test the student's understanding.
      6. If the user answers your "Quick Check" question, tell them if they are right or wrong, give a brief explanation, and then ask another related question or ask if they want to move on.
      7. Be conversational and supportive.
      
      ${contextText ? `CONTEXT TO USE:\n${contextText}` : ''}
    `;

    // Construct the full prompt from history for the single-turn call.
    let fullPrompt = "";
    
    // Append history
    history.forEach(msg => {
      fullPrompt += `${msg.role === 'user' ? 'Student' : 'Tutor'}: ${msg.text}\n`;
    });
    
    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    return response.text || "I'm sorry, I couldn't generate an answer at the moment.";
  } catch (error) {
    console.error("Error calling AI:", error);
    return "Sorry, I'm having trouble connecting to the AI tutor. Please check your API Key and connection.";
  }
};