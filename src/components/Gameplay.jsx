import React, { useState } from 'react';
import styled from 'styled-components';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';

const Gameplay = () => {
  const [dice, setDice] = useState(1);
  const [selected, setSelected] = useState();
  const [score, setScore] = useState(0); 
  return (
    <Main>
      <div className="topsection">
        <TotalScore score={score} /> 
        <NumberSelector selected={selected} setSelected={setSelected} />
      </div>
      <RollDice 
        dice={dice} 
        setDice={setDice} 
        selected={selected} 
        setSelected={setSelected}
        score={score}          
        setScore={setScore}
      />
    </Main>
  );
};

export default Gameplay;

const Main = styled.main`
  .topsection {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`;
