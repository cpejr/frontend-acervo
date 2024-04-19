import PropTypes from "prop-types";
import { Container, Label, StyledInput, ErrorMessage } from "./Styles";

export default function FormInput({
  inputKey,
  placeholder,
  error,
  register,
  defaultValue,
  readOnly,
  type,
  color,
  ...props
}) {
  const errorMessage = error[inputKey]?.message;
  return (
    <Container>
      <Label htmlFor={name}></Label>
      <StyledInput
        id={name}
        {...register(name)}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...props}
        readOnly={readOnly}
        error={!!errorMessage}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

      <StyledInput
        id={inputKey}
        inputKey={inputKey}
        type={type}
        autoComplete="off"
        {...(register && { ...register(inputKey) })}
        placeholder={placeholder}
        defaultValue={defaultValue}
        error={errorMessage}
        color={color}
        {...props}
      />
    </Container>
  );
}

FormInput.propTypes = {
  inputKey: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  error: PropTypes.bool.isRequired,
  defaultValue: PropTypes.string,
  type: PropTypes.string,
  readOnly: PropTypes.func,
  color: PropTypes.string,
  icon: PropTypes.elementType,
};
