import PropTypes from "prop-types";
import { Container, DeleteButton, Message } from "./Styles";
import { useNavigate } from "react-router-dom";

export default function ModalLogoff({ close, handleLogOff }) {
  // States and Variables
  const navigate = useNavigate();
  return (
    <Container>
      <Message>Você deseja sair?</Message>
      <DeleteButton
        onClick={() => {
          handleLogOff();
          close();
        }}
      >
        Sair
      </DeleteButton>
      <DeleteButton
        onClick={() => {
          navigate("/favoritos");
          close();
        }}
      >
        Ver Favoritos
      </DeleteButton>
    </Container>
  );
}

ModalLogoff.propTypes = {
  close: PropTypes.func.isRequired,
  handleLogOff: PropTypes.func.isRequired,
};
