import { UserProgressItem, ConfidenceLevel } from '../types';

// Simple Leitner System intervals (in milliseconds)
// Box 0: New/Failed (0)
// Box 1: 1 day
// Box 2: 3 days
// Box 3: 1 week
// Box 4: 2 weeks
// Box 5: 1 month
const INTERVALS = [
  0,
  24 * 60 * 60 * 1000,
  3 * 24 * 60 * 60 * 1000,
  7 * 24 * 60 * 60 * 1000,
  14 * 24 * 60 * 60 * 1000,
  30 * 24 * 60 * 60 * 1000,
];

export const getInitialProgress = (questionId: string): UserProgressItem => ({
  questionId,
  box: 0,
  nextReviewDate: Date.now(),
  lastReviewed: 0,
  history: []
});

export const updateProgress = (
  current: UserProgressItem,
  isCorrect: boolean,
  confidence: ConfidenceLevel
): UserProgressItem => {
  let newBox = current.box;

  if (isCorrect) {
    // If correct but low confidence, don't advance, or advance slowly
    if (confidence === ConfidenceLevel.HIGH) {
      newBox = Math.min(newBox + 1, INTERVALS.length - 1);
    } else if (confidence === ConfidenceLevel.LOW) {
      newBox = Math.max(newBox - 1, 0); // Regression if unsure
    }
    // Medium confidence stays in same box (consolidate)
  } else {
    // Reset to box 0 or 1 on failure
    newBox = 0;
  }

  return {
    ...current,
    box: newBox,
    lastReviewed: Date.now(),
    nextReviewDate: Date.now() + INTERVALS[newBox],
    history: [
      ...current.history,
      { date: Date.now(), correct: isCorrect, confidence }
    ]
  };
};

export const isDue = (item: UserProgressItem): boolean => {
  return Date.now() >= item.nextReviewDate;
};