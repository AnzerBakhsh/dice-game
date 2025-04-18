import React from 'react'
import styled from 'styled-components'


function TotalScore({score}) {
  return (
    <Scorecontainer>
    <h1>{score}</h1>
    <p>Total Score</p>
  </Scorecontainer>
  )
}

export default TotalScore;
 const Scorecontainer = styled.div`
 text-align: center;
 max-width: 200px;
 h1{
    font-size: 100px; 
    line-height: 100px;
 }
 p{
    font-size: 24px;
    font-weight: 500;
 }

 `;