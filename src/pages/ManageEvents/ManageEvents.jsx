import { useState } from "react";
import { useGetCategoryPrice } from "../../hooks/querys/categoryPrice";
import { useGetCategoryType } from "../../hooks/querys/categoryType";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import {
  useCreateEvents,
  useDeleteEvents,
  useGetEvents,
} from "../../hooks/querys/events";
import { useQueryClient } from "@tanstack/react-query";

import { newEventValidationSchema } from "./utils";
import {
  FormInput,
  FormTextArea,
  SubmitButton,
  ModalDeleteEvent,
  ModalEditEvent,
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
  EventButtons,
} from "./Styles";
export default function ManageEvents() {
  const queryClient = useQueryClient();
  const [idCategoriesTypes, setIdCategoriesTypes] = useState([]);
  const [idCategoriesPrices, setIdCategoriesPrices] = useState([]);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const { data: events } = useGetEvents({
    onError: (err) => {
      toast.error(err);
    },
  });
  const formattedEvents = events?.map((events) => ({
    name: events.name,
    shortDescription: events.shortDescription,
    manage: (
      <EventButtons>
        <FaTrash onClick={() => handleOpenDeleteModal(events?._id)} />
        <FaEdit onClick={() => handleOpenEditModal(events)} />
      </EventButtons>
    ),
  }));

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

  const { mutate: createEvent } = useCreateEvents({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
    },
    onError: (err) => {
      return err;
    },
  });

  const { mutate: deleteEvent } = useDeleteEvents({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
    },
    onError: (err) => {
      return err;
    },
  });
  // Modal Functions

  const handleOpenDeleteModal = (eventId) => {
    setSelectedEventId(eventId);
    setDeleteModalOpen(true);
  };

  const handleOpenEditModal = (event) => {
    setSelectedEventId(event?._id);
    setSelectedEvent(event);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = async () => {
    setSelectedEvent(null);
    setSelectedEventId(null);
    setEditModalOpen(false);
  };

  const handleCloseDeleteModal = () => {
    setSelectedEventId(null);
    setDeleteModalOpen(false);
  };

  const onSubmit = (data, e) => {
    const combinedData = {
      ...data,
      id_categoryPrice: idCategoriesPrices,
      id_categoryType: idCategoriesTypes,
    };
    createEvent(combinedData);
    e.target.reset();
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
          <FormInput
            name="eventUpload"
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
        <SubmitButton>ENVIAR</SubmitButton>
      </Form>
      <Title>GERENCIAR EVENTOS</Title>
      {isDeleteModalOpen && (
        <ModalDeleteEvent
          id={selectedEventId}
          closeModal={handleCloseDeleteModal}
          handleEventDelete={deleteEvent}
          modal={true}
          destroyOnClose
        />
      )}
      {isEditModalOpen && (
        <ModalEditEvent
          _id={selectedEventId}
          modal={true}
          event={selectedEvent}
          close={handleCloseEditModal}
          transformArrayItems={transformArrayItems}
          destroyOnClose
        />
      )}
      <Table value={formattedEvents}>
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
