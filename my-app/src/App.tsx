import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { QuestionsType, QuestionsDataType } from './types';

import Results from './components/Results';
import QuestionsPage from './container/QuestionsPage';

const App: FC = () => {
  const [questions, setQuestions] = useState<QuestionsType[]>([]);
  const [isShowResults, setIsShowResults] = useState<boolean>(false);

  const handelShowResults = () => {
    setIsShowResults(true)
  }

  const handleChange = (updatedQuestion: QuestionsType ) => {
    const updatedQuestions = questions.map(question => {

      if(question.id === updatedQuestion.id){
        return updatedQuestion
      }

      return question;
    });

    setQuestions(updatedQuestions);
  };

  useEffect (() => {
    axios.get(`https://opentdb.com/api.php?amount=10&category=9&type=boolean`)
      .then(res => {
        const questions = res.data?.results;
        setQuestions(questions.map((el: QuestionsDataType, index: number) => {
          return {...el, answerOptions: ['False', 'True'], selectedAnswer: null, id: index + 1}
        }))
      })

  }, []);

  return (
    <div className="App">
      {isShowResults 
        ? <Results questions={questions} />
        : <QuestionsPage onShowResults={handelShowResults} onChange={handleChange} questions={questions} />}
    </div>
  );
}

export default App;
