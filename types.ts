export enum QuestionType {
  MCQ = 'MCQ',
  SHORT_ANSWER = 'SHORT_ANSWER',
  SCENARIO = 'SCENARIO'
}

export enum ConfidenceLevel {
  NONE = 0,
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3
}

export interface Question {
  id: string;
  topicId: string;
  type: QuestionType;
  text: string;
  options?: string[]; // For MCQ
  correctAnswer: string | number; // Index for MCQ, text string for others
  explanation: string;
  sourceRef?: string;
  difficulty: 'Level 4' | 'Level 5' | 'Level 6';
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  learningObjectives: string[];
  keyPoints: string[];
  quickSummary: string[]; // Bullet points for rapid revision
  fullNotes: string; // HTML string for detailed study
}

export type GlossaryCategory = 'Basics' | 'Metabolism' | 'Nutrition' | 'Physiology' | 'Research' | 'Molecular Biology' | 'Energy Systems' | 'Units';

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  example: string;
  analogy?: string; // Optional simple analogy
  category: GlossaryCategory;
  relatedTopicIds: string[];
}

// Spaced Repetition State
export interface UserProgressItem {
  questionId: string;
  box: number; // Leitner box (0-5)
  nextReviewDate: number; // Timestamp
  lastReviewed: number; // Timestamp
  history: {
    date: number;
    correct: boolean;
    confidence: ConfidenceLevel;
  }[];
}

export interface AppState {
  progress: Record<string, UserProgressItem>;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
}