import PropTypes from "prop-types";
import { AddArchive, RemoveArchive, Upload } from "./styles";
import FormInput from "../FormInput/FormInput";
import { useEffect, useState } from "react";
import { AiOutlinePlusCircle, AiOutlineDelete } from "react-icons/ai";

export default function UploadInput({
  inputKey,
  placeholder,
  error,
  icon: Icon,
  color,
  setArchivesArray,
  archivesArray,
  values,
  hasButtons,
}) {
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  function handleChange(info) {
    const { originFileObj } = info?.fileList[0] || {};
    if (originFileObj) {
      getBase64(originFileObj, (url) => {
        setArchivesArray((prev) => [
          ...prev,
          {
            name: info?.fileList[0].name,
            base64: url,
            inputKey: info?.inputKey,
          },
        ]);
      });
    }
  }

  //Set initial archive count
  const initialArchiveCount = values ? values.length : 1;
  const [archiveCount, setArchiveCount] = useState(initialArchiveCount);

  // Set initial inputs state
  const [inputs, setInputs] = useState([]);
  useEffect(() => {
    if (values && values.length > 0) {
      const newInputs = values.map((value, index) => ({
        inputKey: `archive${index}`,
        placeholder: value.name,
        icon: Icon,
        color,
        error,
        index,
      }));
      setInputs(newInputs);
      setArchivesArray(
        values.map((value, index) => ({
          inputKey: `archive${index}`,
          name: value.name,
          base64: undefined,
        }))
      );
    } else {
      setInputs([
        { inputKey, placeholder, error, icon: Icon, color, index: 0 },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  function addInput() {
    const newInput = {
      inputKey: `archive${archiveCount}`,
      placeholder,
      icon: Icon,
      color,
      error,
      index: archiveCount,
    };

    setInputs([...inputs, newInput]);
    setArchiveCount(archiveCount + 1);
  }
  //console.log("inputs", inputs);
  function removeInput(inputKey) {
    setInputs(inputs.filter((input) => input.inputKey !== inputKey));
    setArchivesArray(
      archivesArray.filter((archive) => archive.inputKey !== inputKey)
    );
  }
  return (
    <>
      {inputs.map((props) => (
        <div style={{ width: "100%" }} key={props.inputKey}>
          <Upload
            key={props.inputKey}
            name={props.inputKey}
            onChange={(values) =>
              handleChange({ ...values, inputKey: props.inputKey })
            }
            beforeUpload={() => false}
            maxCount={1}
          >
            {
              <FormInput
                {...props}
                value={
                  archivesArray.find(
                    (archive) => archive.inputKey === props.inputKey
                  )?.name
                }
                readOnly="readonly"
              />
            }
          </Upload>
          {hasButtons && (
            <RemoveArchive
              color={color}
              onClick={() => removeInput(props.inputKey)}
            >
              <AiOutlineDelete
                style={{
                  width: "2rem",
                  height: "3rem",
                  cursor: "pointer",
                }}
              />
              Remover
            </RemoveArchive>
          )}
        </div>
      ))}
      {hasButtons && (
        <AddArchive color={color} onClick={addInput}>
          <AiOutlinePlusCircle
            style={{
              width: "2rem",
              height: "3rem",
              cursor: "pointer",
            }}
          />
          Adicionar arquivo
        </AddArchive>
      )}
    </>
  );
}

UploadInput.defaultProps = {
  hasButtons: true,
};
UploadInput.propTypes = {
  inputKey: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired,
  defaultValue: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.elementType,
  index: PropTypes.number,
  setArchivesArray: PropTypes.func,
  archivesArray: PropTypes.array,
  values: PropTypes.array,
  hasButtons: PropTypes.bool,
};
