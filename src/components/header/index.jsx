import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import HeaderPicture from '../../assets/dark-logo.png'


const StyledLink = styled(Link)`
padding : 15px;
color : #8186a0;
text-decoration : none;
font-size: 20px;
font-weight: 700;
${(props) =>
    props.$isFullLink && 
    `color : white; border-radius : 30px; background-color: ${colors.primary};`
}`


const DivEnglobeHeader = styled.div`
display: flex;
justify-content: space-between;
padding: 30px;
align-item:center;
`

const HomeLogo = styled.img`

height: 70px;
`
   


const Header = (props) => {
    return (<>
    <DivEnglobeHeader >
      <Link to="/">
            <HomeLogo src={HeaderPicture} alt="logo"/>
    </Link>
     
    <div>
    <StyledLink to="/" >Accueil</StyledLink>
    <StyledLink to="/freelances" >Profils</StyledLink>
    <StyledLink to ="/survey/1" $isFullLink>Faire le test</StyledLink>
    </div>
    </DivEnglobeHeader>
    </>
        
    );
};

export default Header;