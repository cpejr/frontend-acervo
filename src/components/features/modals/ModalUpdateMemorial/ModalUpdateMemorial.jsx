import PropTypes from "prop-types";
import { ModalStyle } from "./Styles";
import FormSubmit from "../../FormSubmit/FormSubmit";
import { updateCollectionValidationSchema } from "./utils";

export default function ModalUpdateMemorial({
  close,
  handleMemorialUpdate,
  id,
  modal,
  closeModal,
  modalCloseIcon,
}) {
  let inputs = [
    {
      type: "input",
      key: "title",
      placeholder: "Mudar Titulo",
    },
    {
      type: "input",
      key: "archive",
      placeholder: "Mudar Arquivo",
    },
    {
      type: "input",
      key: "link",
      placeholder: "Mudar Link",
    },
  ];
  function handleSubmit(data) {
    handleMemorialUpdate(id, data);
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
      <FormSubmit
        inputs={inputs}
        onSubmit={handleSubmit}
        schema={updateCollectionValidationSchema}
      ></FormSubmit>
    </ModalStyle>
  );
}

ModalUpdateMemorial.propTypes = {
  close: PropTypes.func.isRequired,
  handleMemorialUpdate: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  modal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalCloseIcon: PropTypes.object.isRequired,
};
