import React from 'react'
import styled from "styled-components"
import {MdHouse} from "react-icons/md"
import {FaPiggyBank} from "react-icons/fa"
import {ImBubbles} from "react-icons/im"
import {FaTshirt} from "react-icons/fa"


const StatsData = [
    {
        icon: (<MdHouse css={`color: #047bf1;`}/>),
        title: "Proximité",
        desc: "Convivialité, échanges, partenariats et gain de temps",
    },
    {
        icon: (<FaPiggyBank />),
        title: "Qualité",
        desc: "Selon vos besoin nous conseillons le produit et services adapté",
    },
    {
        icon: (<ImBubbles />),
        title: "Conseils",
        desc: "Plus de 29 ans d'expériences dans le marquage textile",
    },
    {
        icon: (<FaTshirt />),
        title: "À partir d'une pièce",
        desc: "Réalisation dés 1 pièce",
    },
]
const Stats = () => {
  return (
    <StatsContainer>
        <Heading>Pourquoi nous choisir ?</Heading>
        <Wrapper>
            {StatsData.map ((item, index) => {
                return (
                    <StatsBox key={index}>
                        <Icon>{item.icon}</Icon>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
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
padding-left: 3rem;

`
const Heading = styled.h1`
text-align: start;
font-size: clamp(1.5rem, 5vw, 2rem);
margin-bottom: 3rem;
padding: 0 2rem;
font-size: 60px;
  color: #3c3e41;
`
const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 10px;

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}

@media screen and (max-width: 500px) {
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

`

const Title = styled.p`
font-size: clamp(1rem, 2.5vw, 1.5rem);
margin-bottom: 0.5rem;
font-weight: bold;

`

const Description = styled.p`

`