// Results.js
import React, { useContext } from 'react';
import { SurveyContext } from '../../utils/context';
import styled from 'styled-components';

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ResultItem = styled.div`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
`;

function Results() {
  const { answers } = useContext(SurveyContext);

  return (
    <ResultsContainer>
      <h1>Résultats de l'enquête</h1>
      {Object.keys(answers).length === 0 ? (
        <p>Aucune réponse n'a été enregistrée.</p>
      ) : (
        Object.entries(answers).map(([questionNumber, answer]) => (
          <ResultItem key={questionNumber}>
            Question {questionNumber}: {answer ? 'Oui' : 'Non'}
          </ResultItem>
        ))
      )}
    </ResultsContainer>
  );
}

export default Results;
