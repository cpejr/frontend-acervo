import { Container, CityLogo, Info, SocialMedias, Column } from "./Styles";
import {
  Logo,
  Instagram,
  Facebook,
  Whatsapp,
  Twitter,
} from "../../../../assets/index";

export default function Footer() {
  return (
    <Container>
      <CityLogo src={Logo} width="250px" height="140px"></CityLogo>
      <Info>
        casatuetimbua@gmail.com <br />
        (37) 9 9634 9759{" "}
      </Info>
      <SocialMedias>
        <Column>
          <img src={Whatsapp} width="25%"></img>{" "}
          <img src={Instagram} width="25%"></img>
        </Column>
        <Column>
          <img src={Facebook} width="25%"></img>
          <img src={Twitter} width="25%"></img>
        </Column>
      </SocialMedias>
    </Container>
  );
}
