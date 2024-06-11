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
        (31) 9 8338 4137{" "}
      </Info>
      <SocialMedias>
        <Column>
          <a href="http://wa.me/+31983384137">
            <img src={Whatsapp} alt="Logo Whatsapp" width="80%"></img>
          </a>
          <a href="https://www.instagram.com/nossahistoriabd/">
            <img src={Instagram} alt="Logo Instagram" width="80%"></img>
          </a>
        </Column>
        <Column>
          <a href="https://www.facebook.com/prefeiturabd/?locale=pt_BR">
            <img src={Facebook} alt="Logo Facebook" width="80%"></img>
          </a>
          <a href="/">
            <img src={Twitter} alt="Logo twitter" width="110%"></img>
          </a>
        </Column>
      </SocialMedias>
    </Container>
  );
}
