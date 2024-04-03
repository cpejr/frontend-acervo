import PropTypes from "prop-types";
import { Upload } from "./styles";
import FormInput from "../FormInput/FormInput";
import { useState } from "react";

export default function UploadInput({
  inputKey,
  placeholder,
  error,
  register,
  icon: Icon,
  color,
}) {
  const [archive, setArchive] = useState();
  const [name, setName] = useState(undefined);

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  function handleChange(info) {
    const { originFileObj } = info?.fileList[0] || {};
    if (originFileObj) {
      getBase64(originFileObj, (url) => {
        setArchive(url);
        console.log(url);
        setName(info?.fileList[0].name);
      });
    } else {
      setArchive(undefined);
      setName(undefined);
    }
  }

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
        error={error}
        register={register}
        color={color}
        value={JSON.stringify({ archive, name })}
      />
      <FormInput
        placeholder={placeholder}
        error={error}
        icon={Icon}
        color={color}
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
