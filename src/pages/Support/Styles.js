import styled from "styled-components";
import { breakpoints, colors, fonts } from "../../styles/stylesVariables";
import { titleBackground } from "../../assets/index";

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: ${colors.background.primary};

  @media (max-width: ${breakpoints.biggerScreen}) {
    overflow-x: hidden;
  }
`;
export const HeaderArea = styled.div``;

export const Image = styled.img`
  width: 100%;
  height: auto;
  @media (min-width: ${breakpoints.tablet}) {
    height: 33rem;
  }
`;

export const Title = styled.h1`
  font-family: ${fonts.Cabin};
  color: ${colors.font.title};
  width: 100%;
  text-align: center;
  font-size: 36px;

  text-decoration: underline ${colors.font.line};
  text-decoration-skip-ink: auto;
  text-underline-offset: 0.8rem;
  text-decoration-thickness: 3px;
  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 50px;
    font-size: 32px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 26px;
    line-height: 55px;
  }
`;

export const SubTitle = styled.h2`
  width: 100%;
  font-size: 36px;
  font-family: ${fonts.Cabin};
  color: ${colors.font.title};
  text-align: center;
  text-decoration: underline ${colors.font.line};
  text-decoration-skip-ink: auto;
  text-underline-offset: 0.5rem;
  text-decoration-thickness: 3px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 32px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 26px;
  }
`;

export const TextArea = styled.div`
  align-self: center;
  padding: 40px 0 40px 0;
  margin-inline: 10%;
  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px 0 20px 0;
    margin-inline: 10%;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px 0 10px 0;
    margin-inline: 10%;
  }
`;

export const Text1 = styled.div`
  text-align: justify;
  font-family: ${fonts.Cabin};
  font-size: 22px;
  color: ${colors.font.primary};
  padding-bottom: 25px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const Text2 = styled.div`
  text-align: justify;
  font-family: ${fonts.Cabin};
  font-size: 22px;
  color: ${colors.font.primary};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const DonationArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-inline: 10%;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    padding-bottom: 40px;
    margin-inline: 3%;
    justify-content: space-evenly;
  }
  @media (max-width: ${breakpoints.smallMobile}) {
    flex-direction: column;
  }
`;

export const QRCodeArea = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QRCodeAndText = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 10px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const QRCode = styled.img`
  padding-right: 30px;
  max-width: 250px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${breakpoints.tablet}) {
    padding-right: 0;
    max-width: 180px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding-right: 0;
    max-width: 140px;
  }
  @media (max-width: ${breakpoints.smallMobile}) {
    padding-right: 0;
    max-width: 100px;
  }
`;

export const QRCodeText = styled.div`
  font-size: 22px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
    width: 80%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
  }
`;

export const WhatsAppImage = styled.img`
  width: 30%;
  height: 15%;
`;

export const ButtonText = styled.div`
  font-size: 25px;
  font-family: ${fonts.Cabin};
  color: ${colors.font.primary};
  padding-left: 5px;
  width: 300px;
  text-align: left;

  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 20px;
  }

  @media (max-width: ${breakpoints.miniDevice}) {
    font-size: 18px;
  }
`;

export const WhatsAppButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  @media (max-width: ${breakpoints.mobile}) {
    min-width: 250px;
  }
`;

export const Redirecionar = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  max-width: 320px;
  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 20px;
    max-width: 250px;
  }
`;
export const BackgroundTitle = styled.div`
  background-image: url(${titleBackground});
  height: 150px;
  padding-top: 1.5rem;
`;
