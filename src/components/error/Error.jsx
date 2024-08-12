import React from 'react';
import Image404 from '../../assets/404.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ErrorContainer = styled.div`
 margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  align-items: center;
`

const ErrorImage = styled.img`
  max-width: 100%; 
  height: auto;

`;

const ErrorTitle = styled.h1`
  font-weight: 300;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`

const Error = (props) => {
    return (
          <ErrorContainer>
          <ErrorTitle>oups...</ErrorTitle>
          <ErrorImage src={Image404} alt="image error" />
          <ErrorSubtitle>Il semblerait qu'il y ait un problème</ErrorSubtitle>
        </ErrorContainer>
    );
};

export default Error;