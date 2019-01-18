import { cons } from 'hexlet-pairs';
import engineGame from '..';
import generateNum from '../utils';

const description = 'What is the result of the expression?\n';

const game = () => {
  const generateNumberOne = generateNum(2, 10);
  const generateNumberTwo = generateNum(2, 10);
  const generateSign = Math.floor(Math.random() * 3) + 1;

  let question = '';
  let correctAnswer = '';

  switch (generateSign) {
    case 1:
      correctAnswer = generateNumberOne + generateNumberTwo;
      question = `${generateNumberOne} + ${generateNumberTwo}`;
      break;
    case 2:
      correctAnswer = generateNumberOne - generateNumberTwo;
      question = `${generateNumberOne} - ${generateNumberTwo}`;
      break;
    default:
      correctAnswer = generateNumberOne * generateNumberTwo;
      question = `${generateNumberOne} * ${generateNumberTwo}`;
      break;
  }
  return cons(question, correctAnswer);
};

export default () => engineGame(description, game);