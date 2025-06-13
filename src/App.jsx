import React from 'react';
import * as S from './styles/app.styles';
import Autocomplete from './components/autocomplete/Autocomplete';

const App = () => {
  const animalsNames = [
    "Cat",
    "Dog",
    "Cow",
    "Bird",
    "Snake",
    "Spider",
    "Pigg",
    "Parrot",
    "Snail",
    "Horse",
    "Fish",
    "Frogg",
    "Lizard",
    "Monkey",
    "Panda",
    "Raccoon",
  ];

  return (
    <S.Container>
      <Autocomplete options={animalsNames} />
    </S.Container>
  );
};

export default App;