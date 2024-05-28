import { Container, City, Header } from "./Styles";
import { LogoCidade } from "../../../../assets/index";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import useAuthStore from "../../../../Stores/auth";
import { LoginSocialArea } from "../../../../components";
import { HamburgerMenu } from "../../../index";
import "react-toastify/dist/ReactToastify.css";

export default function NavBar() {
  const isAdmin = useAuthStore((state) => state?.auth?.user?.type);
  const navigate = useNavigate();

  const items = [
    {
      label: "História",
      url: "/historia",
    },
    {
      label: "Memorial",
      url: "/memorial",
    },
    {
      label: "Sobre",
      url: "/sobre",
    },
    {
      label: "Eventos",
      url: "/eventos",
    },
    {
      label: "Apoiar",
      url: "/suporte",
    },
    ...(isAdmin
      ? [
          {
            label: "Administrador",
            items: [
              {
                label: "Gerenciar usuários",
                url: "/gerenciar-usuarios",
              },
              {
                label: "Gerenciar arquivos",
                url: "/gerenciar-memorial",
              },
              {
                label: "Gerenciar eventos",
                url: "/gerenciar-eventos",
              },
            ],
          },
        ]
      : []),
  ];

  return (
    <Container>
      <City src={LogoCidade} onClick={() => navigate("/")}></City>
      <Header model={items} />
      <HamburgerMenu />
      <LoginSocialArea />
    </Container>
  );
}
