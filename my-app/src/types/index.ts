export type QuestionsType = {
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    answerOptions: string[];
    selectedAnswer?: string;
    id: number;
  }
  
  export type QuestionsDataType = {
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }