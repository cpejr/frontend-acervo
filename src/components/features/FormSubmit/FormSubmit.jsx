import { useForm } from "react-hook-form";
import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../common/Button/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, Select, ErrorMessage, InputKeep, Selects } from "./Styles";
import FormInput from "../../common/FormInput/FormInput";
import UploadInput from "../../common/UploadInput/UploadInput";
import { LoadingOutlined } from "@ant-design/icons";

export default function FormSubmit({
  inputs,
  onSubmit,
  schema,
  color,
  loading,
}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (key, value) => {
    setSelectedOptions(selectedOptions.concat({ [key]: value }));
  };

  const [archivesArray, setArchivesArray] = useState([]);
  const [archiveError, setArchiveError] = useState(false);

  function submitHandler(data) {
    const hasArchiveInput = inputs.some((input) => input.type === "archive");

    if (hasArchiveInput && !archivesArray[0]) {
      setArchiveError(true);
      return;
    } else if (hasArchiveInput) {
      //onSubmit({ ...data, archives: archivesArra  y, selectedOptions });
      //console.log({ ...data, archives: archivesArray, selectedOptions });
      setArchivesArray([]);
    } else {
      onSubmit(data, selectedOptions);
    }
    reset();
  }

  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      {inputs.map((input) => {
        if (input.type === "selects") {
          return (
            <Selects key="selects">
              {input?.selects.map((select) => {
                console.log(select);
                return (
                  <Select
                    key={select.key}
                    options={select.options}
                    placeholder={select.placeholder}
                    onChange={(e) => {
                      handleSelectChange(select.key, e.target.value);
                    }}
                  ></Select>
                );
              })}
            </Selects>
          );
        } else if (input.type === "input") {
          return (
            <InputKeep key={input.key}>
              <FormInput
                inputKey={input.key}
                type={input.type}
                placeholder={input.placeholder}
                icon={input.icon}
                error={errors[input.key] ? true : false}
                defaultValue={input.value}
                register={register}
                color={color}
              />
              {errors[input.key]?.message && (
                <ErrorMessage>{errors[input.key]?.message}</ErrorMessage>
              )}
            </InputKeep>
          );
        } else if (input.type === "archive") {
          return (
            <UploadInput
              key={input.key}
              inputKey={input.key}
              placeholder={input.placeholder}
              error={archiveError}
              register={register}
              values={input?.values}
              setArchivesArray={setArchivesArray}
              archivesArray={archivesArray}
              icon={input.icon}
              color={color}
            />
          );
        }
        return null;
      })}
      <Button type="submit" width="200px" height="50px">
        {loading ? <LoadingOutlined /> : "Enviar"}
      </Button>
    </Form>
  );
}

FormSubmit.propTypes = {
  inputs: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  schema: PropTypes.object.isRequired,
  color: PropTypes.string,
  loading: PropTypes.bool,
};
