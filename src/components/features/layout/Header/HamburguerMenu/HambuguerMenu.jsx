import { useNavigate } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Hamburguer } from "./Styles";

export default function HamburguerMenu() {
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
    <Hamburguer
      onClick={(e) => onClick(e.key)}
      mode="horizontal"
      items={menuItems}
      triggerSubMenuAction="click"
    />
  );
}
