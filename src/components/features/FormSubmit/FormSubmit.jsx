import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { Container, Form } from "./Styles";

export default function FormSubmit({ inputs, onSubmit }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    onSubmit(data); // Chama a função de callback com os dados do formulário
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(submitHandler)}>
        {inputs.map((input) => (
          <input
            key={input?.key}
            type={input?.type}
            placeholder={input?.placeholder}
            {...register(input?.key)}
          />
        ))}
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}

FormSubmit.propTypes = {
  inputs: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
