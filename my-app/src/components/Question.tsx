import { FC } from 'react';
import { RadioGroup } from '@alfalab/core-components/radio-group';
import { Radio } from '@alfalab/core-components/radio';
import { QuestionsType } from '../types';

type Props = {
  questionsItem: QuestionsType;
  onChange: (question : QuestionsType) => void;
}


const Question: FC<Props> = ({questionsItem, onChange}) => {

  const handleChange = (ev: any, payload: any) => {
    const newObject = {...questionsItem, selectedAnswer: payload.value };

    onChange(newObject);
  };

  return (
    <div>
      <RadioGroup
        className='radio-group'
        label={ `Вопрос: ${questionsItem.question}` }
        direction="vertical"
        name="radioGroup"
        onChange={handleChange}
        value={ questionsItem.selectedAnswer }
      >
          {questionsItem.answerOptions.map((item) => <Radio key={item} label={item} value={item} /> )}
      </RadioGroup>
    </div>
  )
};

export default Question;