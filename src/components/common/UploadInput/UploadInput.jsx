import PropTypes from "prop-types";
import { AddArchive, Upload } from "./styles";
import FormInput from "../FormInput/FormInput";
import { useState } from "react";
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
  console.log(values);
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

  //Additional input logic
  const [inputs, setInputs] = useState([
    { inputKey, placeholder, error, icon: Icon, color, index: 0 },
  ]);
  const [archiveCount, setArchiveCount] = useState(1);

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
      <AddArchive>
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
