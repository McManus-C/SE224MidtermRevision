import React, { useState } from 'react';
import { Question, QuestionType, ConfidenceLevel } from '../types';

interface QuizCardProps {
  question: Question;
  onComplete: (isCorrect: boolean, confidence: ConfidenceLevel) => void;
  showNext: boolean;
  onNext: () => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({ question, onComplete, showNext, onNext }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [textAnswer, setTextAnswer] = useState('');
  const [confidence, setConfidence] = useState<ConfidenceLevel | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const handleSubmit = () => {
    if (confidence === null) return;
    
    setSubmitted(true);
    setRevealed(true);

    let correct = false;
    if (question.type === QuestionType.MCQ) {
      correct = selectedOption === question.correctAnswer;
    } else {
      // Self-marking for short answer/scenario
      // In a real app, we'd ask "Did you get it right?" after revealing
      correct = true; 
    }
    
    onComplete(correct, confidence);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setTextAnswer('');
    setConfidence(null);
    setSubmitted(false);
    setRevealed(false);
    onNext();
  };

  const renderInput = () => {
    if (question.type === QuestionType.MCQ && question.options) {
      return (
        <div className="space-y-3 mt-4">
          {question.options.map((opt, idx) => {
            let itemClass = "w-full text-left p-4 border rounded-lg transition-all ";
            if (revealed) {
              if (idx === question.correctAnswer) itemClass += "bg-green-100 border-green-500 ring-2 ring-green-500 text-green-900";
              else if (idx === selectedOption) itemClass += "bg-red-50 border-red-500 text-red-900";
              else itemClass += "opacity-50 border-gray-200";
            } else {
              if (selectedOption === idx) itemClass += "bg-sky-50 border-accent ring-2 ring-accent";
              else itemClass += "hover:bg-gray-50 border-gray-200";
            }
            
            return (
              <button
                key={idx}
                disabled={revealed}
                onClick={() => setSelectedOption(idx)}
                className={itemClass}
              >
                <div className="flex items-center">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white border border-gray-300 mr-3 text-sm font-bold text-gray-500">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {opt}
                </div>
              </button>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="mt-4">
          <textarea
            disabled={revealed}
            value={textAnswer}
            onChange={(e) => setTextAnswer(e.target.value)}
            placeholder="Type your answer here..."
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
            rows={4}
          />
          {revealed && (
            <div className="mt-4 p-4 bg-yellow-50 border border-secondary rounded-md">
              <p className="text-sm font-bold text-secondary uppercase mb-1">Model Answer</p>
              <p className="text-gray-800">{question.correctAnswer}</p>
              <div className="mt-2 text-xs text-gray-600">
                (Self-assessment: For short answers, mark yourself correct if you captured the key concepts.)
              </div>
            </div>
          )}
        </div>
      );
    }
  };

  const canSubmit = (question.type === QuestionType.MCQ ? selectedOption !== null : textAnswer.length > 0) && confidence !== null;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-start mb-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {question.topicId.replace('-', ' ')}
          </span>
          <span className={`text-xs font-medium px-2 py-0.5 rounded ${
            question.difficulty === 'Level 6' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
          }`}>
            {question.difficulty}
          </span>
        </div>

        <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-relaxed">
          {question.text}
        </h3>

        {renderInput()}

        {!revealed && (
          <div className="mt-8 border-t border-gray-100 pt-6">
            <p className="text-sm text-gray-500 mb-3 font-medium">How confident are you?</p>
            <div className="flex gap-2">
              {[ConfidenceLevel.LOW, ConfidenceLevel.MEDIUM, ConfidenceLevel.HIGH].map((level) => (
                <button
                  key={level}
                  onClick={() => setConfidence(level)}
                  className={`flex-1 py-2 text-sm rounded-md border transition-all ${
                    confidence === level 
                      ? 'bg-slate-800 text-white border-slate-800' 
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {level === 1 ? 'Not Sure' : level === 2 ? 'Think so' : 'Certain'}
                </button>
              ))}
            </div>
            <button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className={`mt-4 w-full py-3 rounded-md font-semibold transition-all ${
                canSubmit 
                  ? 'bg-primary text-white shadow-md hover:bg-teal-800' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Check Answer
            </button>
          </div>
        )}

        {revealed && (
          <div className="mt-8 bg-blue-50 rounded-lg p-5 border border-blue-100 animate-fade-in">
            <h4 className="font-bold text-blue-900 mb-2">Explanation</h4>
            <p className="text-blue-800 text-sm leading-relaxed mb-4">{question.explanation}</p>
            {question.sourceRef && (
              <p className="text-xs text-blue-600 font-medium">Source: {question.sourceRef}</p>
            )}
            
            {showNext && (
              <button
                onClick={handleReset}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Next Question
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};