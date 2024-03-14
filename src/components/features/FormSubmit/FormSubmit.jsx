import { useForm } from "react-hook-form";
import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../common/Button/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, StyledInput, Select } from "./Styles";

export default function FormSubmit({ inputs, onSubmit, schema }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleSelectChange = (key, value) => {
    setSelectedOptions({ ...selectedOptions, [key]: value });
  };
  function submitHandler(data) {
    console.log(data);
    onSubmit(data);
    reset();
  }
  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      {inputs.map((input) =>
        input?.options ? (
          <Select
            key={input?.key}
            {...register(input?.key, { required: input?.required })}
            error={errors[input?.key] ? true : false}
            options={input?.options}
            placeholder={input.placeholder}
            value={selectedOptions[input?.key] || ""}
            onChange={(e) => handleSelectChange(input?.key, e.target.value)}
          ></Select>
        ) : (
          <StyledInput
            key={input?.key}
            type={input?.type}
            placeholder={input?.placeholder}
            error={errors[input?.key] ? true : false}
            {...register(input?.key, { required: input?.required })}
          />
        )
      )}

      <Button type="submit" width="200px" height="50px">
        Enviar
      </Button>
    </Form>
  );
}

FormSubmit.propTypes = {
  inputs: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  schema: PropTypes.object.isRequired,
};
