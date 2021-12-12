import { FC } from 'react';
import { QuestionsType } from '../types';

type Props = {
  questions: QuestionsType[];
}


const Results: FC<Props> = ({ questions }) => {
  return (
    <div className='questions'>
      <div className="questions__title">Правильные ответы подсвечены зеленым цветом, не&nbsp;правильные&nbsp;-&nbsp;красным.</div>
      {questions.map(item => {
        return (
          <div key={ item.id } className='question'>
            <div className='question__text'>
              Вопрос: <b>{ item.question }</b>
            </div>
            <div className={`question__answer ${item.selectedAnswer === item.correct_answer ? '_green' : '_red'}`}>
              Выбранный ответ: { item.selectedAnswer }
            </div>
          </div>
        )
      })}
    </div>
  )
};

export default Results;