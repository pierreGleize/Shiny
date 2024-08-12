import Card from '../../components/Cards'
import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useEffect, useState } from 'react'
import { Loader } from '../../utils/style/Atoms'


const CardsContainer = styled.div`
display : grid;
gap : 50px;
grid-template-rows: 350px 350px;
grid-template-columns : repeat(2, 1fr);`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Assure que le conteneur prend toute la hauteur de la page */
  padding: 20px;
  text-align: center;
`;

const H1Freelance = styled.h1`
font-family: Trebuchet MS;
font-size: 30px;
font-weight: 700;
line-height: 39.75px;
text-align: center;
`

const H3Freelance = styled.h3`
font-family: Trebuchet MS;
font-size: 20px;
font-weight: 700;
line-height: 26.5px;
text-align: center;
margin: 60px 0 100px 0;
 color: ${colors.secondary};
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Freelances() {
  const [freelancersList, setFreelancersList] = useState([])
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() =>{
    async function fetchFreelances (){
      setDataLoading(true)
      try{
        const response = await fetch('http://localhost:8000/freelances')
        const { freelancersList } = await response.json()
        setFreelancersList(freelancersList)
      }catch (err){
        console.log('==== error =====', err)
        setError(true)
      }finally{
        setDataLoading(false)
      }
    }
    fetchFreelances()
  }, [])

  if(error){
    return <span>Oups il y eu un problème</span>
  }
  return (
  <PageContainer>
     <H1Freelance>Trouvez votre prestataire</H1Freelance>
    <H3Freelance>Chez Shiny nous réunissons les meilleurs profils pour vous. </H3Freelance>
    {isDataLoading ? (
      <LoaderWrapper>
        <Loader/>
      </LoaderWrapper>) : ( 
      <CardsContainer>
         {freelancersList.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
    </CardsContainer>)}
   
    
    
    </PageContainer>
  )
}

export default Freelances