import React from 'react'
import styled from "styled-components"
import {GrValidate} from "react-icons/gr"


const StatsData = [
    {
        icon: (<GrValidate css={`color: #047bf1;`}/>),
        title: "Garde la souplesse du textile",
    },
    {
        icon: (<GrValidate/>),
        title: "Rendu fidèle au visuel",
    },
    {
        icon: (<GrValidate />),
        title: "Tarif peu onéreux",
    },
    {
        icon: (<GrValidate/>),
        title: "Grande capacité de production",
    },
]
const Stats = () => {
  return (
    <StatsContainer>
        <div className='heading'>
            <h1>Les avantages</h1>
        </div>
        {/* <Heading>Pourquoi nous choisir ?</Heading> */}
        <Wrapper>
            {StatsData.map ((item, index) => {
                return (
                    <StatsBox key={index}>
                        <Icon style={{ color: '#48ADA9'}}>{item.icon}</Icon>
                        <Title>{item.title}</Title>
                    </StatsBox>
                )
            })}
        </Wrapper>
    </StatsContainer>
  )
}

export default Stats

const StatsContainer = styled.div`
width: 100%;
color: #000;
display: flex;
flex-direction: column;
justify-content: center;
padding-top: 5rem;

h1{
    font-size: clamp(1.5rem, 6vw, 2rem);
    color: black;
}
@media screen and (max-width: 1024px) {
    width: 90%;
    padding-left: 3rem;
}

@media screen and (max-width: 1024px) {
    width: 90%;
}
`

const Wrapper = styled.div`
display: grid;
text-align: center;
grid-template-columns: repeat(4, 1fr);
grid-gap: 10px;

@media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
}

@media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
}
`
const StatsBox = styled.div`
height : 100%;
width: 100%;
padding: 2rem;
`

const Icon = styled.div`
font-size: 3rem;
margin-bottom: 1rem;
color: #48ADA9;

`

const Title = styled.p`
font-size: clamp(1rem, 2.5vw, 1.5rem);
margin-bottom: 0.5rem;
font-weight: bold;
color: #48ADA9;

`
