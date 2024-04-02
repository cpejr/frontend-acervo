import PropTypes from "prop-types";
import { Upload } from "./styles";
import FormInput from "../FormInput/FormInput";
import { useState } from "react";

export default function UploadInput({
  inputKey,
  placeholder,
  error,
  register,
  defaultValue,
  icon: Icon,
  color,
}) {
  const [archive, setArchive] = useState();
  const [name, setName] = useState("testes  ");
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
    console.log(reader);
  }

  function handleChange(info) {
    const { originFileObj } = info?.fileList[0] || {};
    setName(info?.fileList[0].name);
    if (originFileObj) {
      getBase64(originFileObj, (url) => {
        setArchive(url);
      });
    } else {
      setArchive(undefined);
    }
  }
  console.log(name);
  return (
    <Upload
      name={inputKey}
      onChange={handleChange}
      beforeUpload={() => false}
      maxCount={1}
    >
      <FormInput
        hidden
        inputKey={inputKey}
        placeholder={placeholder}
        error={error}
        register={register}
        color={color}
        defaultValue={defaultValue}
        onChange={handleChange}
        value={archive}
        readOnly="readonly"
      />
      <FormInput
        inputKey={inputKey}
        placeholder={placeholder}
        error={error}
        icon={Icon}
        color={color}
        onChange={handleChange}
        value={name}
        readOnly="readonly"
      />
    </Upload>
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
};
