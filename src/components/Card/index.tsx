import React from 'react';

import { Container, Description } from './styles';

interface ICard {
  imagePath: string;
  title: string;
  description: string;
}

const Card: React.FC<ICard> = ({ imagePath, title, description }) => {
  return <Container>
    <img src={imagePath} alt="Js" />
    <h3>{title}</h3>
    <Description>{description}</Description>
  </Container>;
}

export default Card;