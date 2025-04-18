import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const RollDice = ({ dice, setDice, selected, setSelected, score, setScore }) => {
  const [isRolling, setIsRolling] = useState(false); 

  const rollDice = () => {
    if (isRolling) return; 
    setIsRolling(true);

    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      setDice(randomNumber);

      if (selected === randomNumber) {
        setScore(prev => prev + 1);
      } else {
        setScore(prev => prev - 1);
      }

      setIsRolling(false);
    }, 1000); 
  };

  return (
    <DiceContainer>
      <div className="dice">
        <img
          onClick={rollDice}
          className={isRolling ? 'rolling' : ''}
          src={`/src/assets/dice_${dice}.png`}
          alt="dice"
        />
      </div>
      <p>Click on dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;


const spin = keyframes`
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(720deg) rotateY(720deg); }
`;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;

  .dice {
    cursor: pointer;
    img {
      
      transition: transform 1s ease-in-out;
    }

    .rolling {
      animation: ${spin} 1s ease-in-out;
    }
  }
`;
