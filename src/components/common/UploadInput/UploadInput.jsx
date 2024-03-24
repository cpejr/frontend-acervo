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

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
    console.log(reader);
  }

  function handleChange(info) {
    const { originFileObj } = info?.fileList[0] || {};
    if (originFileObj) {
      getBase64(originFileObj, (url) => {
        setArchive(url);
      });
    } else {
      setArchive(undefined);
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
        inputKey={inputKey}
        placeholder={placeholder}
        error={error}
        register={register}
        icon={Icon}
        color={color}
        defaultValue={defaultValue}
        onChange={handleChange}
        value={archive}
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
