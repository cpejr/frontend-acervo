import PropTypes from "prop-types";
import { Upload } from "./styles";
import FormInput from "../FormInput/FormInput";

export default function UploadInput(
  inputKey,
  placeholder,
  error,
  register,
  defaultValue,
  type,
  color,
  icon,
  ...props
) {
  return (
    <Upload>
      <FormInput
        inputKey={inputKey}
        type={type}
        placeholder={placeholder}
        icon={icon}
        error={inputKey ? true : false}
        defaultValue={defaultValue}
        register={register}
        color={color}
      ></FormInput>
    </Upload>
  );
}
