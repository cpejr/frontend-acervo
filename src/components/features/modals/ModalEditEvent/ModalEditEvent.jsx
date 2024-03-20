import PropTypes from "prop-types";
import Button from "../../../common/Button/Button";
import { colors } from "../../../../styles/stylesVariables";
import { Container, Message, ModalStyle, Form } from "./Styles";
import { toast } from "react-toastify";
import { useForm } from "antd/es/form/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newEventValidationSchema } from "../../../../pages/ManageEvents/utils";
import FormInput from "../../../common/FormInput/FormInput";

export default function ModalEditEvent({ event, close, id, editFunction }) {
  const onSubmit = async (data) => {
    try {
      await editFunction(id, { data });
      toast.success("Evento atualizado com sucesso!");
      toast.clearWaitingQueue();
      close();
    } catch (error) {
      toast.error("Erro em atualizar o evento. Tente novamente!");
      toast.clearWaitingQueue();
      console.error("Erro ao editar evento", error);
    }
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newEventValidationSchema),
  });

  return (
    <Container>
      <ModalStyle>
        <Message>Editar Informações</Message>
        <Form>
          <FormInput
            name="name"
            label="Nome do evento:"
            defaultValue={event.name}
            register={register}
            placeholder="Nome do evento:"
            errors={errors}
          />
          <FormInput
            name="eventUpload"
            label="Imagem do evento:"
            defaultValue={event.eventUpload}
            register={register}
            placeholder="URL da imagem:"
            errors={errors}
            //icon={}
          />
          <FormInput
            name="shortDescription"
            label="Descrição curta:"
            defaultValue={event.shortDescription}
            register={register}
            placeholder="Descrição curta:"
            errors={errors}
          />
          <FormInput
            name="longDescription"
            label="Descrição longa:"
            defaultValue={event.eventUpload}
            register={register}
            placeholder="Descrição longa:"
            errors={errors}
          />
          <FormInput
            name="link"
            label="Link:"
            defaultValue={event.link}
            register={register}
            placeholder="Link do evento:"
            errors={errors}
          />
          <Button
            onClick={() => {
                handleSubmit(onSubmit);
                close();
            }}
            type="button"
            backgroundcolor="transparent"
            color={colors.modals.modalButton}
            border="1px solid"
            borderRadius="0.5rem"
            marginTop="1.5rem"
            fontSize="1.8rem"
            fontWeight="500"
            lineHeight="2.2rem"
            hoverBackgroundColor={colors.modals.modalButton}
            hoverColor={colors.font.primary}
            borderColor={colors.modals.modalButton}
            >
                Excluir
            </Button>
        </Form>
      </ModalStyle>
    </Container>
  );
}

ModalEditEvent.propTypes = {
    id: PropTypes.string.isRequired,
    event: PropTypes.object.isRequired,
    close: PropTypes.func.isRequired,
    editFunction: PropTypes.func.isRequired,
};
