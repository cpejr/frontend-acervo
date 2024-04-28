import PropTypes from "prop-types";
import Button from "../../../common/Button/Button";
import { colors } from "../../../../styles/stylesVariables";
import { Container, Message, ModalStyle, Form, MultipleSelect } from "./Styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { newEventValidationSchema } from "../../../../pages/ManageEvents/utils";
import { FormInputEvents } from "../../../../components";
import { useState, useEffect } from "react";
import { useUpdateEvents } from "../../../../hooks/querys/events";
import { useGetCategoryPrice } from "../../../../hooks/querys/categoryPrice";
import { useGetCategoryType } from "../../../../hooks/querys/categoryType";
import UploadInput from "../../../common/UploadInput/UploadInput";

export default function ModalEditEvent({
  event,
  close,
  _id,
  modal,
  transformArrayItems,
}) {
  const [idsCategoryType, setIdsCategoryType] = useState([]);
  const [idsCategoryPrice, setIdsCategoryPrice] = useState([]);
  const [archivesArray, setArchivesArray] = useState([]);
  const [value, setValue] = useState({});
  const queryClient = useQueryClient();
  const { data: categoryType } = useGetCategoryType({
    onError: (err) => {
      toast.error(err);
    },
  });
  const { data: categoryPrice } = useGetCategoryPrice({
    onError: (err) => {
      toast.error(err);
    },
  });
  const { mutate: updatEvent } = useUpdateEvents({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
    },
    onError: (err) => {
      return err;
    },
  });
  const setCategories = () => {
    setIdsCategoryType(event?.id_categoryType?.map((ids) => ids._id) || []);
    setIdsCategoryPrice(event?.id_categoryPrice?.map((ids) => ids._id) || []);
  };
  useEffect(() => {
    if (modal) {
      setCategories();
    }
    console.log(event);
    if (event) {
      const nome = [
        {
          name: event?.eventUpload?.name,
          base64: undefined,
        },
      ];
      setValue(nome);
    }
  }, [modal, event]);
  // On Submit
  const onSubmit = (data) => {
    let uploadEvent = {};
    if (archivesArray[1]) {
      uploadEvent = {
        base64: archivesArray[1].base64,
        name: archivesArray[1].name,
      };
    }

    const body = {
      ...data,
      id_categoryType: idsCategoryType,
      id_categoryPrice: idsCategoryPrice,
      uploadEvent: uploadEvent,
    };
    console.log(body);
    updatEvent({ _id: _id, body: body });
    close();
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
      <ModalStyle
        open={modal}
        onCancel={close}
        centered
        destroyOnClose
        footer={null}
      >
        <Message>Editar Informações</Message>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormInputEvents
            name="name"
            label="Nome do evento:"
            defaultValue={event.name}
            register={register}
            placeholder="Nome do evento:"
            errors={errors}
            color="black"
          />
          <UploadInput
            key={"images"}
            inputKey={"archive0"}
            error={errors ? true : false}
            register={register}
            setArchivesArray={setArchivesArray}
            archivesArray={archivesArray}
            values={value}
            color={"black"}
            hasButtons={false}
            width="100%"
          />
          <FormInputEvents
            name="shortDescription"
            label="Descrição curta:"
            defaultValue={event.shortDescription}
            register={register}
            placeholder="Descrição curta:"
            errors={errors}
            color="black"
          />
          <FormInputEvents
            name="longDescription"
            label="Descrição longa:"
            defaultValue={event.longDescription}
            register={register}
            placeholder="Descrição longa:"
            errors={errors}
            color="black"
          />
          <FormInputEvents
            name="link"
            label="Link:"
            defaultValue={event.link}
            register={register}
            placeholder="Link do evento:"
            errors={errors}
            color="black"
          />
          <MultipleSelect
            value={idsCategoryPrice}
            name="id_categoryPrice"
            options={transformArrayItems(categoryPrice)}
            optionLabel="label"
            placeholder="Escolha as características"
            className="w-full md:w-20rem"
            filter
            color="black"
          />
          <MultipleSelect
            value={idsCategoryType}
            name="id_categoryType"
            options={transformArrayItems(categoryType)}
            optionLabel="label"
            placeholder="Escolha as características"
            className="w-full md:w-20rem"
            filter
            color="black"
          />
          <Button
            type="submit"
            backgroundcolor="transparent"
            color={colors.font.primary}
            border="1px solid"
            borderRadius="0.5rem"
            marginTop="1.5rem"
            fontSize="1.8rem"
            fontWeight="500"
            lineHeight="2.2rem"
            hoverBackgroundColor={colors.modals.modalButton}
            hoverColor={colors.font.secondary}
            borderColor={colors.modals.modalButton}
          >
            Editar
          </Button>
        </Form>
      </ModalStyle>
    </Container>
  );
}

ModalEditEvent.propTypes = {
  _id: PropTypes.string.isRequired,
  event: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  transformArrayItems: PropTypes.func.isRequired,
};
