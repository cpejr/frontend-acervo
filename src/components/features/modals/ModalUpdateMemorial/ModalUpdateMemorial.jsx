import PropTypes from "prop-types";
import { ModalStyle } from "./Styles";
import FormSubmit from "../../FormSubmit/FormSubmit";
import { useState, useEffect } from "react";
import { updateCollectionValidationSchema } from "./utils";
import { FaLink } from "react-icons/fa6";
import { AiOutlineUpload } from "react-icons/ai";

export default function ModalUpdateMemorial({
  close,
  handleMemorialUpdate,
  id,
  values,
  modal,
  closeModal,
  modalCloseIcon,
  options,
}) {
  const [initialValues, setInitialValues] = useState({});

  const inputs = [
    {
      type: "input",
      key: "title",
      placeholder: "Mudar Titulo",
      value: values.title,
    },
    {
      type: "input",
      key: "link",
      placeholder: "Mudar Link",
      value: values.link,
      icon: FaLink,
    },
    {
      type: "input",
      key: "shortDescription",
      placeholder: "Mudar Descrição curta",
      value: values.shortDescription,
    },
    {
      type: "input",
      key: "longDescription",
      placeholder: "Mudar Descrição longa",
      value: values.longDescription,
    },
    {
      type: "selects",
      key: "id_categoryMemorial",
      placeholder: "Escolha a categoria",
      options: options,
    },
    {
      type: "archive",
      key: "archive",
      placeholder: "Adicionar Arquivo",
      values: values.archives?.map((archive) => ({
        name: archive?.name,
        base64: undefined,
      })),
      icon: AiOutlineUpload,
    },
  ];
  useEffect(() => {
    if (values?.id_categoryMemorial) {
      const categoryNames = values.id_categoryMemorial.map((cat) => cat.name);
      setInitialValues({ id_categoryMemorial: categoryNames });
    }
  }, [values.id_categoryMemorial]);
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
        memorialDate={values.date}
        onSubmit={handleSubmit}
        schema={updateCollectionValidationSchema}
        color={"black"}
        selectedOptionsInitial={initialValues}
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
  values: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
};
