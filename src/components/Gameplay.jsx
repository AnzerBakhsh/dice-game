import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'

const Gameplay = () => {
  return (
    <Main>
      <div className='topsection'>
      <TotalScore/>
      <NumberSelector/>
      </div>
    </Main>
  )
}

export default Gameplay;

const Main = styled.main`
.topsection{
  display: flex;
 justify-content  : space-around;
  align-items: end;
 
}
`