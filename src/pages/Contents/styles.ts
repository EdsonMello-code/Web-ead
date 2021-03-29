import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 361px) {
    align-items: initial;
    justify-content: stretch;
  }

  @media (min-width: 361px) and (max-width: 1025px) {
    align-items: initial;
    justify-content: stretch;  
  }

`;

export const ViewContent = styled.div`
  margin-right: 20rem;
  width: 90rem;
  height: 60rem;
  display: flex;
  align-items: center;
  justify-content: center;

   > video {
    width: 100%;
    height: 100%;
    border-radius: 0.8rem;
    margin-left: 20rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  > img {
    width: 100%;
    height: 100%;
    border-radius: 0.8rem;
  }

  @media (max-width: 361px) {
    width: 100vw;
    height: 100%;
    margin-right: 0;
    video, img,  p {
      margin-left: 0;
      width: 30rem;
      height: 20rem;
    }
  }

  @media (min-width: 361px) and (max-width: 1025px) {
    width: 100vw;
    height: 100%;
    margin-right: 0;
    video, img,  p {
      margin-left: 0;
      width: 60rem;
      height: 40rem;
    }
  }

  @media (min-width: 361px) and (max-width: 768px) {
    video, img,  p {
      margin-left: 0;
      width: 40rem;
      height: 40rem;
    }
  }

  @media (min-width: 1026px) and (max-width:1367px) {
    width: 100%;
    justify-content: stretch;
    align-items: stretch;
    video, img,  p {
      margin-left: 0;
      margin-right: 0;
      width: 50rem;
      height: 50rem;
    }
  }
`;
export const BlockContent = styled.div`
  width: 25rem;
  height: 40rem;
  border-radius: 0.8rem;
  box-shadow: -4px 0px 12px -1px rgba(0,0,0,0.62);
  -webkit-box-shadow: -4px 0px 12px -1px rgba(0,0,0,0.62);
  -moz-box-shadow: -4px 0px 12px -1px rgba(0,0,0,0.62);
  background-color: #29292E;

  > ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    > li {
      width: 80%;
      list-style: none;
      margin-bottom: 5rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 1rem;
      border-radius: 0.8rem;
      transition: 0.2s ease-in-out;
      
      &:hover {
        background-color: blue;
      }
      > span {
        margin-left: 3rem;
        font-weight: bold;
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 361px) {
    margin-bottom: 4rem;
  } 
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  @media (max-width: 361px) {
    /* display: block; */
    flex-direction: column;
  }

  @media (min-width: 361px) and (max-width: 1025px) {
    flex-direction: column;
  }
`;

export const Controls = styled.div`
  display: flex;
  margin-bottom: 10rem;

  max-width: 30rem;
  width: 100%;
  height: 4rem;
  justify-content: space-between;
  margin-right: 28rem;
  padding: 1rem;
  border-radius: 0.8rem;
  box-shadow: -4px 0px 12px -1px rgba(0,0,0,0.62);
  -webkit-box-shadow: -4px 0px 12px -1px rgba(0,0,0,0.62);
  -moz-box-shadow: -4px 0px 12px -1px rgba(0,0,0,0.62);
  
  @media (max-width: 361px) {
    max-width: 100vw;
    width: 100vw;
    margin-bottom: 0;

    position: absolute;
  }


  @media (min-width: 361px) and (max-width: 1025px) {
    max-width: 100vw;
    margin: 0;
    margin-top: 2rem;
    padding: 5rem;
    bottom: 2rem;
    align-items: center;
  } 
`;