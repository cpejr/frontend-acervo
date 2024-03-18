import PropTypes from "prop-types";
import { ModalStyle, AddArchive } from "./Styles";
import { useState, useEffect } from "react";
import FormSubmit from "../../FormSubmit/FormSubmit";
import { updateCollectionValidationSchema } from "./utils";
import { CiCirclePlus } from "react-icons/ci";

export default function ModalUpdateMemorial({
  close,
  handleMemorialUpdate,
  id,
  values,
  modal,
  closeModal,
  modalCloseIcon,
}) {
  const [archiveCount, setArchiveCount] = useState(1);
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    const temporaryInputs = [
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
      },
    ];
    if (values.archives !== undefined) {
      const updatedArchives = values.archives.map((archive, index) => ({
        type: "input",
        key: `archiveantigo${index + 1}`,
        placeholder: `Mudar Arquivo ${index + 1}`,
        value: archive,
      }));
      temporaryInputs.push(...updatedArchives);
      setInputs(temporaryInputs);
    }
  }, [values]);

  function handleSubmit(data) {
    handleMemorialUpdate(id, data);
    close();
  }
  function addInput() {
    const newInput = {
      type: "input",
      key: `archive${archiveCount}`,
      placeholder: "Adicionar arquivo :",
    };

    setInputs([...inputs, newInput]);
    setArchiveCount(archiveCount + 1);
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
      <AddArchive>
        <CiCirclePlus
          style={{ width: "2.5rem", height: "3.5rem", cursor: "pointer" }}
          onClick={addInput}
        />
        Adicionar arquivo:
      </AddArchive>
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
};
