import styled, { keyframes } from 'styled-components';

const show = keyframes`
  from {
    opacity: 0;
  }
`;

export const Container = styled.div`
  flex: 1;
  > header {
    height: 14rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > h1 {
    margin-left: 40rem;
    margin-bottom: 10rem;
    font-size: 3rem;
  }

  @media (max-width: 361px) {
    display: flex;
    /* justify-content: center; */
    width: 100%;
    align-items: center;
    flex-direction: column;
    > h1 {
      margin: 2rem;
    }
  
  > header {
    flex: 1;
    /* background-color: red; */
    /* width: 1px; */
    margin-bottom: 3rem;
    margin-top: 2rem;
    > img {
    }
  }

    flex: 1;
  }

  @media (min-width: 361px) and (max-width: 769px) {

    > header {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > h1 {
      margin-left: 5rem;
      margin-bottom: 5rem;
      margin-top: 5rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1025px) {
    > h1 {
      margin-left: 5rem;
    }    
  }

`;

export const Childrens = styled.div`
  width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-flow: wrap;

  > img {
    animation: 2s ease-in-out ${show};
  }

  @media (max-width: 361px) {
    width: 0;
    width: 100%;
    flex-direction: column;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 361px) and (max-width: 769px) {
    width: 100%;
    justify-content: center;
  }   
  @media (min-width: 769px) and (max-width: 1025px) {
    width: 100%;
  }
`;
