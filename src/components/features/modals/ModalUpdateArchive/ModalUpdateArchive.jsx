import PropTypes from "prop-types";
import { ModalStyle } from "./Styles";
import FormSubmit from "../../FormSubmit/FormSubmit";

export default function ModalUpdateArchive({
  close,
  handleArchiveUpdate,
  id,
  modal,
  closeModal,
  modalCloseIcon,
}) {
  let inputs = [
    {
      type: "input",
      key: "title",
      placeholder: "Mudar Texto",
    },
    {
      type: "input",
      key: "archive",
      placeholder: "Adicionar Arquivo",
    },
    {
      type: "input",
      key: "link",
      placeholder: "Mudar Link",
    },
  ];
  function handleSubmit(data) {
    handleArchiveUpdate(id, data);
    close();
  }

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
      <FormSubmit inputs={inputs} onSubmit={handleSubmit}></FormSubmit>
    </ModalStyle>
  );
}

ModalUpdateArchive.propTypes = {
  close: PropTypes.func.isRequired,
  handleArchiveUpdate: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  modal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalCloseIcon: PropTypes.object.isRequired,
};
