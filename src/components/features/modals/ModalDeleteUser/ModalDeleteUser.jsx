import PropTypes from "prop-types";
import { Container, Message, ModalStyle } from "./Styles";
import Button from "../../../common/Button/Button";
import { colors } from "../../../../styles/stylesVariables";

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
          color={colors.modals.modalButton}
          border="1px solid "
          borderRadius="0.5rem"
          marginTop="1.5rem"
          fontSize="1.8rem"
          fontWeight="500"
          lineHeight="2.2rem"
          hoverBackgroundColor={colors.modals.modalButton}
          hoverColor={colors.font.primary}
          borderColor={colors.modals.modalButton}
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
