import useAuthStore from "../../../../Stores/auth";
import { Link } from "../../../../components";
import { useLogin } from "../../../../hooks/querys/user";
import { signInWithGooglePopup } from "../../../../services/firebase";

import { Container } from "./Styles";

export default function Header() {
  // BackEnd Calls
  const { mutate: login, isLoading } = useLogin({
    onSuccess: () => {
      console.log("Sucesso!");
    },
    onError: (err) => console.log(err),
  });

  const { auth, setAuth } = useAuthStore();
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const logGoogleUser = async () => {
    if (auth === null || auth.accessToken === null) {
      const googleResponse = await signInWithGooglePopup();
      console.log("Resposta do google:", googleResponse);
      login({
        name: googleResponse?.user?.displayName,
        email: googleResponse?.user?.email,
        imageURL: googleResponse?.user?.photoURL,
        type: "user",
      });
      setAuth(googleResponse?.user?.accessToken);
    } else {
      clearAuth();
    }
  };
  async function Teste() {
    const googleResponse = await signInWithGooglePopup();
    console.log(googleResponse);
  }

  return (
    <Container>
      <Link to={"/story"}>E-commerce</Link>
      <Link>Acervo</Link>
      <Link>Eventos Culturais</Link>
      <Link>Área escolar</Link>
      <Link>Sobre o projeto</Link>
      <Link onClick={logGoogleUser}>PERFIL</Link>
    </Container>
  );
}
