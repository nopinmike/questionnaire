import { FC, useState } from 'react';
import { SteppedProgressBar } from '@alfalab/core-components/stepped-progress-bar';
import { Button } from '@alfalab/core-components/button';
import Question from '../components/Question';
import { QuestionsType } from '../types';

type Props = {
  onShowResults: () => void;
  questions: QuestionsType[];
  onChange: (question : QuestionsType) => void;
}

const QuestionsPage: FC<Props> = ({ onShowResults, questions, onChange }) => {
  const [step, setStep] = useState<number>(1);

  const handleNextClick = () => {
    setStep(step + 1)
  };

  const handlePrevClick = () => {
    setStep(step - 1)
  };

  if (questions.length === 0) {
    return null
  }

  return (
    <div className='container'>
      <div className="questions-page">
        <div className="questions-page__title">Ответьте на все вопросы по порядку и посмотрите рузультаты</div>

        <SteppedProgressBar
          className='questions-page__progress-bar' 
          step={ step } 
          maxStep={ questions.length } 
          description={ questions[step - 1].difficulty } 
        />

        { questions.map((question) => question.id === step ? <Question questionsItem={ question } key={ question.id } onChange={ onChange } /> : null ) }

        <Button
          disabled={ step <= 1 ? true : false }
          className="questions-page__button"
          onClick={ handlePrevClick }>
            Предыдущий вопрос
        </Button>

        <Button 
          disabled={ questions[step - 1].selectedAnswer ? false : true }
          className={ `questions-page__button ${ step >= questions.length ? '_deleted' : null }` }
          onClick={ handleNextClick }>
            Следующий вопрос
        </Button>

        <Button
          disabled={ questions[step - 1].selectedAnswer ? false : true }
          className={ `questions-page__button ${ step < questions.length ? '_deleted' : null }` }
          view="primary"
          onClick={ onShowResults }>
            Показать результаты
        </Button>
      </div>
    </div>
  )
};

export default QuestionsPage;