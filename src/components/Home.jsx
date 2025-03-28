import styled from "styled-components"

const Home = ({toggle}) => {
  return (
    <Container className="home_container"> 
        <div className="home_image">
            <img src="/src/assets/dices 1.png" alt="" />
        </div>
        <div className="home_content">
            <h1> Dice Game </h1>
           
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default Home
const Container = styled.div`
        display:flex;
        max-width: 1180px;
        align-items : center;
        margin: 0 auto;
        height: 100vh;
    .home_content h1{
        font-size: 96px;
        font-weight: 800;
        color: #000;
        font-family: 'Lobster', cursive;
        white-space: nowrap;
       
    }
`;
const Button = styled.button`
        background-color: #000;
        color: #fff;
        height: 44px;
        width: 220px;
        padding: 10px 18px;
        border-radius: 5px;
        font-size: 16px;    
        font-weight: 500;
        cursor: pointer;
        transition: all 0.4s ease;
        &:hover{
            background-color: #353535;
            color: #fff;
            transition: all 0.3s ease;
        }
`;