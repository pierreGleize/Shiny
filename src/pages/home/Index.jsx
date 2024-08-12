import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import PictureHome from '../../assets/home-illustration.svg'
import { Link } from 'react-router-dom';


const DivContainerHome = styled.div`
display:flex;
justify-content: center;`


const DivEnglobeHome = styled.div`
width: 90%;
min-height: 100vh;
background-color: ${colors.backgroundLight};
display: flex;
align-items: center;
justify-content: center;
`
const H1BouttonHome = styled.div`
max-width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;`


const H1Home = styled.h1`
font-family: Trebuchet MS;
font-size: calc(1.5rem + 1vw);
font-weight: 700;"
line-height: calc(4rem + 1vw);
text-align: left;
margin-bottom: 100px;
`
const BoutonHome = styled(Link)`
color : white;
 border-radius : 30px;
 background-color: ${colors.primary};
 padding: 12px 60px;
 font-size: 1.2rem;
font-weight: 700;
text-align: center;
align-self: flex-start;

`
const HomeImage = styled.img`
width: 45%;
height: auto;`

const Home = (props) => {
    return (
        <DivContainerHome>
        <DivEnglobeHome>
        <H1BouttonHome>
            <H1Home>Repérez vos besoins,<br />
            on s’occupe du reste,<br /> avec les meilleurs talents</H1Home>
            <BoutonHome to="/survey/1" >Faire le test</BoutonHome>
            </H1BouttonHome>
            <HomeImage src={PictureHome} alt="image home" />
        </DivEnglobeHome>
        </DivContainerHome>
    );
};

export default Home;