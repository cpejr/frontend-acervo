import { Container, City } from "./Styles";
import {
  Login,
  LogoCidade,
  Whatsapp,
  Facebook,
  Instagram,
} from "../../../../assets/index";
import { HamburgerMenu } from "../../../index";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link, LoginSocialArea } from "../../../../components";
import "react-toastify/dist/ReactToastify.css";

export default function Header() {
  const usuario = true;
  const navigate = useNavigate();

  return (
    <Container>
      <City src={LogoCidade} onClick={() => navigate("/")}></City>
      <Link to="/historia">História</Link>
      <Link to="/memorial">Memorial</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/eventos">Eventos</Link>
      <Link to="/suporte"> Apoiar</Link>
      {usuario ? (
        <React.Fragment>
          <Link to={"/gerenciar-usuarios"}>Usuários</Link>
          <Link to={"/gerenciar-memorial"}>Memorial</Link>
          <Link to={"/gerenciar-eventos"}>Eventos</Link>
        </React.Fragment>
      ) : null}
      {/* <Column>
        <Button>
          Entrar<img src={Login} width="20px"></img>
        </Button>
        <SocialMedias>
          <a href="https://www.instagram.com/prefeiturabd/">
            <img src={Instagram} alt="Logo Instagram" width="75%"></img>
          </a>
          <a href="https://www.facebook.com/prefeiturabd/?locale=pt_BR">
            <img src={Facebook} alt="Logo Facebook" width="75%"></img>
          </a>{" "}
          <a href="http://wa.me/+31992740294">
            <img src={Whatsapp} alt="Logo Whatsapp" width="75%"></img>
          </a>
        </SocialMedias>
      </Column> */}
      <HamburgerMenu />
      <LoginSocialArea />
    </Container>
  );
}
