import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  from {
    opacity: 0;
    transform: rotate(90deg); 
  }

  to {
    opacity: 1
  }
`;

export const Container = styled.div`
  width: 30rem;
  height: 45rem;
  background-color: #29292E;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5rem;
  margin-bottom: 5rem;


  animation: ${animate} ease-in-out 1s;
  transition: 0.2s ease-in;

  > img {
    width: 9rem;
    width: 9rem;
    border-radius: 0.8rem;
    font-size: 2.4rem;
    margin-top: 10rem;
    margin-bottom: 4rem;
  }

  > h3 {
    font-size: 2rem;
    margin-bottom: 4rem;
    text-overflow: ellipsis;
  }

  &:hover, &:active {
    background-color: #29294E;
  }

  @media (max-width: 361px) {
    margin-left: 0;
  }

  

`;

export const Description = styled.span`
  font-size: 1.7rem;
  width: 26rem;
  text-align: justify;
  line-height: 2rem;
`;