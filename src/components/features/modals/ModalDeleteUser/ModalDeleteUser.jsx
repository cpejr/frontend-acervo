import PropTypes from "prop-types";
import { Container, DeleteButton, Message, ModalStyle } from "./Styles";

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
        <DeleteButton
          onClick={() => {
            handleUserDelete(id);
            close();
          }}
          type="button"
        >
          Excluir
        </DeleteButton>
      </Container>
    </ModalStyle>
  );
}

ModalDeleteUser.propTypes = {
  close: PropTypes.func.isRequired,
  handleUserDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  modal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalCloseIcon: PropTypes.func.isRequired,
};
