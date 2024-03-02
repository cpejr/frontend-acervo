import PropTypes from "prop-types";
import { Container, Message, ModalStyle } from "./Styles";
import Button from "../../../common/Button/Button";

export default function ModalDeleteUser({
  close,
  handleUserDelete,
  id,
  modal,
  closeModal,
  modalCloseIcon,
}) {
  return (
    <ModalStyle
      open={modal}
      onCancel={closeModal}
      width={500}
      height={250}
      padding={0}
      footer={null}
      closeIcon={modalCloseIcon}
      centered
      destroyOnClose
    >
      <Container>
        <Message>Tem certeza que deseja excluir o item?</Message>
        <Button
          onClick={() => {
            handleUserDelete(id);
            close();
          }}
          type="button"
          backgroundColor="transparent"
          color="#f19709;"
          border="1px solid #f19709"
          borderRadius="0.5rem"
          marginTop="1.5rem"
          fontSize="1.8rem"
          fontWeight="500"
          lineHeight="2.2rem"
          hoverBackgroundColor="#f19709"
          hoverColor="#ffffff"
          borderColor="#f19709"
        >
          Excluir
        </Button>
      </Container>
    </ModalStyle>
  );
}

ModalDeleteUser.propTypes = {
  close: PropTypes.func.isRequired,
  handleUserDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  modal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalCloseIcon: PropTypes.object.isRequired,
};
