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

  const { auth } = useAuthStore();
  console.log("✌️auth --->", auth);
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const logGoogleUser = async () => {
    if (auth === null || auth.accessToken === null) {
      const googleResponse = await signInWithGooglePopup();
      login({
        name: googleResponse?.user?.displayName,
        email: googleResponse?.user?.email,
        imageURL: googleResponse?.user?.photoURL,
      });
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
      <Link onClick={() => clearAuth()}>Sobre o projeto</Link>
      <Link onClick={logGoogleUser}>PERFIL</Link>
    </Container>
  );
}
