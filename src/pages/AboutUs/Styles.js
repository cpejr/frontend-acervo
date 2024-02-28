import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  background-color: #7f260f;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 50px;
  margin-left: 150px;
  padding-top: 50px;
  color: white;

  @media (max-width: 700px) {
    font-size: 35px;
  }

  @media (max-width: 450px) {
    font-size: 30px;
    margin-left: 115px;
  }

  @media (max-width: 400px) {
    margin-right: 100px;
  }

  @media (max-width: 375px) {
    margin-right: 0px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 10px;
  color: white;

  @media (max-width: 700px) {
    font-size: 25px;
  }
`;

export const LineTitle = styled.div`
  width: 600px;
  height: 3px;
  margin-left: 0;
  margin-top: 10px;
  margin-bottom: 50px;
  border-radius: 0px 5px 5px 0px;
  background-color: #ffd599;

  @media (max-width: 700px) {
    width: 500px;
  }

  @media (max-width: 500px) {
    width: 400px;
  }

  @media (max-width: 420px) {
    width: 330px;
  }
`;

export const TextContainer = styled.div`
  margin: 30px 150px 60px 150px;
  color: white;
  font-size: 24px;
  text-align: justify;

  @media (max-width: 500px) {
    margin-left: 120px;
    margin-right: 120px;
  }

  @media (max-width: 1000px) {
    font-size: 20px;
  }

  @media (max-width: 430px) {
    margin-left: 90px;
    margin-right: 90px;
  }

  @media (max-width: 360px) {
    margin-left: 60px;
    margin-right: 60px;
  }
`;

export const ImageArea1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 150px;

  @media (max-width: 900px) {
    align-items: center;
    margin-bottom: 20px;
    margin-right: 150px;
  }

  @media (max-width: 1000px) {
    margin-top: 50px;
  }
`;

export const ImageArea2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 150px;

  @media (max-width: 900px) {
    margin-left: 150px;
    align-items: center;
  }

  @media (max-width: 1150px) {
    margin-top: 50px;
  }
`;

export const Image = styled.img`
  width: 230px;
  height: 270px;
`;

export const ImageBox = styled.div`
  background-color: white;
  width: 250px;
  height: 290px;
  display: flex;
  justify-content: center;
`;

export const Area1 = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  margin-top: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Area2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const Text3 = styled.div`
  margin-bottom: 20px;
`;
export const Text4 = styled.div``;
