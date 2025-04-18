import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';

const NumberSelector = ({
  selected, setSelected
}) => {
    const array = [1,2,3,4,5,6];
   
   
   
  return (
    <Container>
    <div className='direction'>
      
      {array.map((item, i) => (
        <Box
          isselected={selected === item}
          key={i}
          onClick={() => setSelected(item)}
        >
          {item}
        </Box>
      ))}
    </div>
    <p>Select Number</p>
  </Container>
  
  );
};

export default NumberSelector;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:end;
 .direction{
  display:flex;
  gap: 20px;
 }
 p {
    font-size: 24px;
    font-weight: 700px;
  }
`;

const Box = styled.div`
   border: 1px solid #000;
   display:grid;
   place-items: center;
   height: 72px;
   width: 72px;
   font-size: 24px;
    font-weight: 600;
    background-color: ${(props) => (props.isselected ? "black" : "white")};
    color: ${(props) => (!props.isselected ? "black" : "white")};
    cursor: pointer;
`