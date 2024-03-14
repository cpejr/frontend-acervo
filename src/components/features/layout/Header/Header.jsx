import { Link } from "../../../../components";
import { Container, City, Column, SocialMedias, Button } from "./Styles";
import {
  Login,
  LogoCidade,
  Whatsapp,
  Facebook,
  Instagram,
} from "../../../../assets/index";
import { HamburgerMenu } from "../../../index";
import React from "react";

export default function Header() {
  const usuario = false;

  return (
    <Container>
      <City src={LogoCidade}></City>
      <Link to={"/story"}>Nossa História</Link>
      <Link>Acervo</Link>
      <Link to={"/AboutUs"}>Quem Somos</Link>
      <Link to={"/events"}>Eventos</Link>
      <Link to={"/Support"}> Apoiar e Contribuir</Link>
      {usuario ? (
        <React.Fragment>
          <Link to={"/manageusers"}>Gerenciar Usuários</Link>
          <Link to={"/managecollection"}>Gerenciar Memorial</Link>
          <Link to={"/manageevents"}>Gerenciar Eventos</Link>
        </React.Fragment>
      ) : null}
      <Column>
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
      </Column>
      <HamburgerMenu />
    </Container>
  );
}
