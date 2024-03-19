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
  color,
  ...props
}) {
  const errorMessage = error[inputKey]?.message;
  return (
    <Container>
      <IconContainer>
        {Icon && (
          <Icon style={{ width: "2.5rem", height: "3.5rem", color: color }} />
        )}
        <StyledInput
          id={inputKey}
          inputKey={inputKey}
          type={type}
          {...register(inputKey)}
          placeholder={placeholder}
          defaultValue={defaultValue}
          error={errorMessage}
          color={color}
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
  type: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.elementType,
};
