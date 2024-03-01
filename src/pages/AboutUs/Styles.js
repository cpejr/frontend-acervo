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

  @media (max-width: 475px) {
    width: 350px;
    margin-bottom: 10px;
    text-align: center;
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
    margin-left: 80px;
    margin-right: 80px;
  }

  @media (max-width: 1000px) {
    font-size: 20px;
  }

  @media (max-width: 430px) {
    margin-left: 70px;
    margin-right: 70px;
  }

  @media (max-width: 360px) {
    margin-left: 60px;
    margin-right: 60px;
  }

  @media (max-width: 900px) {
    margin-bottom: 0px;
  }
`;

export const TextContainerVilaMilitar = styled.div`
  margin: 30px 150px 60px 150px;
  color: white;
  font-size: 24px;
  text-align: justify;

  @media (max-width: 500px) {
    margin-left: 80px;
    margin-right: 80px;
  }

  @media (max-width: 1000px) {
    font-size: 20px;
  }

  @media (max-width: 430px) {
    margin-left: 70px;
    margin-right: 70px;
  }

  @media (max-width: 380px) {
    margin-left: 60px;
    margin-right: 60px;
  }

  @media (max-width: 900px) {
    margin-bottom: 0px;
    margin-left: 90px;
  }

  @media (max-width: 1150px) {
    margin-right: 70px;
  }
`;

export const TextContainerMatriz = styled.div`
  margin: 30px 150px 60px 150px;
  color: white;
  font-size: 24px;
  text-align: justify;

  @media (max-width: 500px) {
    margin-left: 80px;
    margin-right: 80px;
  }

  @media (max-width: 1000px) {
    font-size: 20px;
  }

  @media (max-width: 430px) {
    margin-left: 70px;
    margin-right: 70px;
  }

  @media (max-width: 360px) {
    margin-left: 60px;
    margin-right: 60px;
  }

  @media (max-width: 900px) {
    margin-bottom: 0px;
    margin-right: 90px;
  }

  @media (max-width: 1150px) {
    margin-left: 70px;
  }
`;

export const ImageAreaHerberton = styled.div`
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

export const ImageAreaBomDespacho = styled.div`
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

export const ImageAreaVilaMilitar = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 150px;

  @media (max-width: 900px) {
    align-items: center;
    margin-bottom: 20px;
    margin-right: 0px;
  }

  @media (max-width: 1000px) {
    margin-top: 50px;
  }

  @media (max-width: 1150px) {
    margin-top: 50px;
  }
`;

export const ImageAreaMatriz = styled.div`
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

  @media (max-width: 1150px) {
    margin-top: 50px;
  }
`;

export const ImageHerberton = styled.img`
  width: 230px;
  height: 270px;
`;

export const ImageBomDespacho = styled.img`
  width: 230px;
  height: 270px;
`;

export const ImageMatriz = styled.img`
  width: 380px;
  height: 270px;

  @media (max-width: 500px) {
    width: 230px;
  }
`;

export const ImageVilaMilitar = styled.img`
  width: 380px;
  height: 270px;

  @media (max-width: 500px) {
    width: 230px;
  }
`;

export const ImageBoxHerberton = styled.div`
  background-color: white;
  width: 250px;
  height: 290px;
  display: flex;
  justify-content: center;
  padding-top: 5px;
`;

export const ImageBoxMatriz = styled.div`
  background-color: white;
  width: 400px;
  height: 290px;
  display: flex;
  justify-content: center;
  padding-top: 5px;

  @media (max-width: 500px) {
    width: 250px;
  }
`;

export const ImageBoxVilaMilitar = styled.div`
  background-color: white;
  width: 400px;
  height: 290px;
  display: flex;
  justify-content: center;
  padding-top: 5px;

  @media (max-width: 500px) {
    width: 250px;
  }
`;

export const HerbertonArea = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  margin-top: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const BomDespachoArea = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const ApresentationArea1 = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  margin-top: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ApresentationArea2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 60px;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const BomDespachoText1 = styled.div`
  margin-bottom: 20px;
`;
export const BomDespachoText2 = styled.div``;

export const ApresentationAreaColorfulUp = styled.div`
  text-align: center;
  width: 100%;
  height: auto;
  padding: 30px 0;
  color: white;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AboutUsAreaColorfulDown = styled.div`
  text-align: center;
  width: 100%;
  height: auto;
  padding: 30px 0;
  color: white;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextAreaColorfulArea = styled.div`
  width: 60%;
  height: auto;
  text-align: center;
  font-size: 30px;
  color: white;
  display: flex;
  justify-content: center;
`;
