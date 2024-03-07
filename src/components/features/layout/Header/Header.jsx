import { Link } from "../../../../components";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import {
  Container,
  City,
  Column,
  SocialMedias,
  Button,
  HamburgerMenu,
} from "./Styles";
import {
  Login,
  LogoCidade,
  Whatsapp,
  Facebook,
  Instagram,
} from "../../../../assets/index";

export default function Header() {
  const navigate = useNavigate();
  function getItem(label, key, icon, children, type, style) {
    return {
      key,
      icon,
      children,
      label,
      type,
      style,
    };
  }

  const menuItems = [
    getItem(
      "",
      "hamburger",
      <MenuOutlined style={{ color: "orange", fontSize: "25px" }} />,
      [
        getItem(" Nossa História", "/story"),
        getItem("Acervo", ""),
        getItem("Quem somos", ""),
        getItem("Eventos", ""),
        getItem("Apoiar e contribuir", ""),
      ]
    ),
  ];

  function onClick(key) {
    if (key && key !== "login" && key !== "/story") {
      navigate(key);
    }
  }
  return (
    <Container>
      <City src={LogoCidade}></City>
      <Link to={"/story"}>Nossa História</Link>
      <Link>Acervo</Link>
      <Link>Quem Somos</Link>
      <Link>Eventos</Link>
      <Link> Apoiar e Contribuir</Link>
      <Column>
        <Button>
          Entrar<img src={Login} width="20px"></img>
        </Button>
        <SocialMedias>
          <img src={Whatsapp} width="20%"></img>
          <img src={Facebook} width="20%"></img>
          <img src={Instagram} width="20%"></img>
        </SocialMedias>
      </Column>

      <HamburgerMenu
        onClick={(e) => onClick(e.key)}
        mode="horizontal"
        items={menuItems}
        triggerSubMenuAction="click"
      />
    </Container>
  );
}
