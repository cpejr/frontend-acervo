import useAuthStore from "../../../../Stores/auth";
import { Link } from "../../../../components";
import { login } from "../../../../services/endpoints";

import { Container } from "./Styles";

export default function Header() {

  const { auth, setAuth } = useAuthStore.getState();
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const logGoogleUser = async () => {
    if(auth.accessToken() === null) {
      const googleResponse = await signInWithGooglePopup();
      const response = login({
        name: googleResponse?.user?.displayName,
        email:  googleResponse?.user?.email,
        imageURL: googleResponse?.user?.photoURL,
      });
        setAuth(response.token);
    } else {
      clearAuth();
    }
  };

  return (
    <Container>
      <Link to={"/story"}>E-commerce</Link>
      <Link>Acervo</Link>
      <Link>Eventos Culturais</Link>
      <Link>Área escolar</Link>
      <Link>Sobre o projeto</Link>
      <Link onClick={() => logGoogleUser()}>PERFIL</Link>
    </Container>
  );
}
