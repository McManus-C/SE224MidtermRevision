import { GoogleGenAI } from "@google/genai";
import { TOPICS, GLOSSARY } from "../data";
import { ChatMessage } from "../types";

let ai: GoogleGenAI | null = null;

const getAI = () => {
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export const askAI = async (
  history: ChatMessage[],
  context?: { topicId?: string; termId?: string }
): Promise<string> => {
  try {
    const aiClient = getAI();
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

    // Construct the full prompt from history for a stateless single-turn call, 
    // or use generateContent with the history embedded.
    // Since generateContent is stateless, we will concatenate the history into a prompt string 
    // or use the chat model if we were maintaining a session object. 
    // For simplicity in this architecture where we pass history array:
    
    let fullPrompt = "";
    
    // Append history
    history.forEach(msg => {
      fullPrompt += `${msg.role === 'user' ? 'Student' : 'Tutor'}: ${msg.text}\n`;
    });
    
    // The last message is already in history, but for the API call we need to ensure the model knows it's the latest input.
    // Actually, with the system instruction, we can just send the history as the "contents" if we format it right, 
    // or just send the last message and rely on the model seeing the previous turns if we were using a chat session.
    // BUT here we are using `generateContent` which is single turn. We must feed the whole conversation.
    
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
    return "Sorry, I'm having trouble connecting to the AI tutor right now. Please try again later.";
  }
};