import PropTypes from "prop-types";
import { Container, IconContainer, StyledInput } from "./styles";

export default function FormInput({
  inputKey,
  placeholder,
  error,
  register,
  defaultValue,
  type,
  icon: Icon,
  ...props
}) {
  const errorMessage = error[inputKey]?.message;
  return (
    <Container>
      <IconContainer>
        <StyledInput
          id={inputKey}
          inputKey={inputKey}
          type={type}
          {...register(inputKey)}
          placeholder={placeholder}
          defaultValue={defaultValue}
          error={errorMessage}
          {...props}
        />
      </IconContainer>
    </Container>
  );
}

FormInput.propTypes = {
  inputKey: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired,
  defaultValue: PropTypes.string,
};
