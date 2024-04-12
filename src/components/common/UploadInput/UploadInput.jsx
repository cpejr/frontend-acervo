import PropTypes from "prop-types";
import { AddArchive, Upload } from "./styles";
import FormInput from "../FormInput/FormInput";
import { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function UploadInput({
  inputKey,
  placeholder,
  error,
  icon: Icon,
  color,
  setArchivesArray,
  archivesArray,
  values,
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
          { name: info?.fileList[0].name, base64: url },
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
      setArchivesArray(values);
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

  return (
    <>
      {inputs.map((props) => (
        <>
          <Upload
            key={props.inputKey}
            name={props.inputKey}
            onChange={handleChange}
            beforeUpload={() => false}
            maxCount={1}
          >
            <FormInput
              {...props}
              value={archivesArray[props.index]?.name}
              readOnly="readonly"
            />
          </Upload>
        </>
      ))}
      <AddArchive color={color}>
        <AiOutlinePlusCircle
          style={{
            width: "2rem",
            height: "3rem",
            cursor: "pointer",
          }}
          onClick={addInput}
        />
        Adicionar arquivo:
      </AddArchive>
    </>
  );
}

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
};
