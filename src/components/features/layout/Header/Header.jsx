import useAuthStore from "../../../../Stores/auth";
import { Link } from "../../../../components";
import { useLogin } from "../../../../hooks/querys/user";
import { signInWithGooglePopup } from "../../../../services/firebase";
import { LoadingOutlined } from "@ant-design/icons";
import { Container, LoadingStyles } from "./Styles";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

export default function Header() {
  const [isLoading, setIsLoading] = useState(false);

  const { mutate: login } = useLogin({
    onSuccess: () => {
      toast.success("Sucesso!");
      setTimeout(() => {
        3000
      });
      setIsLoading(false);
    },
    onError: (err) => toast.error(err),
  });

  const { auth } = useAuthStore();
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const logGoogleUser = async () => {
    setIsLoading(true);
    try {
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
    } catch (error) {
      toast.error("Erro ao entrar com o Google");
    } finally {
      setIsLoading(false); 
    }
  };  

  return (
    <Container>
      <Link to={"/story"}>E-commerce</Link>
      <Link>Acervo</Link>
      <Link>Eventos Culturais</Link>
      <Link>Área escolar</Link>
      <Link onClick={() => clearAuth()}>Sobre o projeto</Link>
      {isLoading ? (
        <LoadingStyles>
          <LoadingOutlined />
        </LoadingStyles>
      ) : (
        <Link onClick={logGoogleUser}>PERFIL</Link>
      )}
      <ToastContainer />
    </Container>
  );
}
