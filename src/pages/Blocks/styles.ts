import styled from "styled-components";

export const Container = styled.div`
  width: 30rem;
  height: 45rem;
  background-color: #29292E;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 0.8rem;
  margin-right: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: 361px) {
    width: 20rem;
    height: 30rem;
    margin-right: 0;
  }
`;