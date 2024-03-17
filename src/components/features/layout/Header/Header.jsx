import { Link, LoginSocialArea } from "../../../../components";
import { Container } from "./Styles";

import "react-toastify/dist/ReactToastify.css";

export default function Header() {
  return (
    <Container>
      <Link to={"/story"}>E-commerce</Link>
      <Link>Acervo</Link>
      <Link>Eventos Culturais</Link>
      <Link>Área escolar</Link>
      <Link>Sobre o projeto</Link>
      <Link>PERFIL</Link>
      <LoginSocialArea />
    </Container>
  );
}
