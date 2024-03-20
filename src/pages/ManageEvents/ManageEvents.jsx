import React, { useEffect, useState } from "react";
import { useEventsByCategoryId } from "../../hooks/querys/events";
import { useGetCategoryPrice } from "../../hooks/querys/categoryPrice";
import { useGetCategoryType } from "../../hooks/querys/categoryType";
import useDebounce from "../../services/useDebouce";
import { useForm } from "react-hook-form";
import { useCreateEvents } from "../../hooks/querys/events";
import { useQueryClient } from "@tanstack/react-query";

import { newEventValidationSchema } from "./utils";
import {
  FormInput,
  FormImageInput,
  FormTextArea,
  SubmitButton,
} from "../../components";
import {
  Container,
  Title,
  Form,
  Section,
  Table,
  TableColumn,
  Selects,
  MultipleSelect,
} from "./Styles";
import { zodResolver } from "@hookform/resolvers/zod";
export default function ManageEvents() {
  const queryClient = useQueryClient();
  const [names, setNames] = useState("");
  const debouncedName = useDebounce(names);
  const [idCategoriesTypes, setIdCategoriesTypes] = useState([]);
  const [idCategoriesPrices, setIdCategoriesPrices] = useState([]);

  const { data: events } = useEventsByCategoryId({
    name: debouncedName,
    onError: (err) => {
      console.log(err);
    },
  });
  const { data: categoryType } = useGetCategoryType({
    onError: (err) => {
      console.log(err);
    },
  });
  const { data: categoryPrice } = useGetCategoryPrice({
    onError: (err) => {
      console.log(err);
    },
  });

  const { mutate: createEvent } = useCreateEvents({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
      toast.success("Sucesso");
    },
    onError: (err) => {
      toast.error(err);
    },
  });

  const onSubmit = (data) => {
    const combinedData = {
      ...data,
      id_categoryPrice: idCategoriesPrices,
      id_categoryType: idCategoriesTypes,
    };
    createEvent(combinedData);
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(newEventValidationSchema) });

  const columns = [
    { field: "name", header: "Nome" },
    { field: "shortDescription", header: "Descrição" },
    { field: "manage", header: "Manage" },
  ];
  const transformArrayItems = (OriginalArray) => {
    const newArray = OriginalArray?.map((item) => ({
      value: item?._id,
      label: item?.name,
    }));
    return newArray;
  };
  return (
    <Container>
      <Title>SUBMETER NOVO EVENTO</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <FormInput
            name="name"
            placeholder="Nome do evento:"
            errors={errors}
            register={register}
          />
          <FormImageInput
            name="imageURL"
            placeholder="URL da imagem:"
            errors={errors}
            register={register}
          />
          <FormInput
            name="shortDescription"
            placeholder="Descrição curta:"
            errors={errors}
            register={register}
          />
          <FormTextArea
            name="longDescription"
            placeholder="Descrição longa:"
            errors={errors}
            register={register}
          />
          <FormInput
            name="link"
            placeholder="Link do evento:"
            errors={errors}
            register={register}
          />
          <Selects>
            <MultipleSelect
              value={idCategoriesTypes}
              name="id_categoryType"
              onChange={(e) => {
                setIdCategoriesTypes(e.value);
              }}
              options={transformArrayItems(categoryType)}
              optionLabel="label"
              placeholder="Escolha as características"
              className="w-full md:w-20rem"
              filter
            />
            <MultipleSelect
              value={idCategoriesPrices}
              name="id_categoryPrice"
              onChange={(e) => {
                setIdCategoriesPrices(e.value);
              }}
              options={transformArrayItems(categoryPrice)}
              optionLabel="label"
              placeholder="Escolha as características"
              className="w-full md:w-20rem"
              filter
            />
          </Selects>
        </Section>
        <SubmitButton>Enviar</SubmitButton>
      </Form>
      <Title>GERENCIAR EVENTOS</Title>
      {/* {isDeleteModalOpen && (
          <StyledModal
            open={isDeleteModalOpen}
            onCancel={handleCloseDeleteModal}
            width={500}
            height={250}
            padding={0}
            footer={null}
            closeIcon={true}
            centered
            destroyOnClose
          >
            <ModalDelete
              _id={selectedToolId}
              close={handleCloseDeleteModal}
              deleteFunction={managerService.useDeleteAITools}
            />
          </StyledModal>
        )}
        {isEditModalOpen && (
          <StyledModal
            open={isEditModalOpen}
            onCancel={handleCloseEditModal}
            width={500}
            height={250}
            padding={0}
            footer={null}
            closeIcon={true}
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: "100px",
              marginBottom: "80%",
            }}
            centered
            destroyOnClose
          >
            <ModalEdit
              _id={selectedToolId}
              tool={selectedTool}
              close={handleCloseEditModal}
              transformArrayItems={transformArrayItems}
            />
          </StyledModal>
        )} */}
      <Table value={events}>
        {columns.map((data) => (
          <TableColumn
            sortable
            key={data.field}
            field={data.field}
            header={data.header}
          />
        ))}
      </Table>
    </Container>
  );
}
