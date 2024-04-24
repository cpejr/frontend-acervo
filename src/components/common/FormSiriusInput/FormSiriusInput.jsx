import PropTypes from "prop-types";
<<<<<<<< HEAD:src/components/common/FormSiriusInput/FormSiriusInput.jsx
import { Container, Label, StyledInput, ErrorMessage } from "./Styles";

export default function FormSiriusInput({
  name,
  label,
========
import { Container, IconContainer, StyledInput } from "./Styles";

export default function FormInput({
  inputKey,
>>>>>>>> DEV:src/components/common/FormInput/FormInput.jsx
  placeholder,
  error,
  register,
  defaultValue,
<<<<<<<< HEAD:src/components/common/FormSiriusInput/FormSiriusInput.jsx
  readOnly,
========
  type,
  icon: Icon,
  color,
>>>>>>>> DEV:src/components/common/FormInput/FormInput.jsx
  ...props
}) {
  const errorMessage = error[inputKey]?.message;
  return (
    <Container>
<<<<<<<< HEAD:src/components/common/FormSiriusInput/FormSiriusInput.jsx
      <Label htmlFor={name}>{label}</Label>
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
========
      <IconContainer>
        {Icon && (
          <Icon style={{ width: "2rem", height: "3.5rem", color: color }} />
        )}
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
      </IconContainer>
>>>>>>>> DEV:src/components/common/FormInput/FormInput.jsx
    </Container>
  );
}

<<<<<<<< HEAD:src/components/common/FormSiriusInput/FormSiriusInput.jsx
FormSiriusInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
========
FormInput.propTypes = {
  inputKey: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func,
  error: PropTypes.bool.isRequired,
>>>>>>>> DEV:src/components/common/FormInput/FormInput.jsx
  defaultValue: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.elementType,
};
