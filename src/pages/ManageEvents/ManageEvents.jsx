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
  useUpdateEvents,
} from "../../hooks/querys/events";
import { useQueryClient } from "@tanstack/react-query";

import { newEventValidationSchema } from "./utils";
import {
  FormSiriusInput,
  FormTextArea,
  SubmitButton,
  ModalDeleteEvent,
  ModalEditEvent,
  Table,
} from "../../components";
import {
  Container,
  Title,
  Form,
  Section,
  Selects,
  MultipleSelect,
  EventButtons,
  LoadingStyles,
} from "./Styles";
import UploadInput from "../../components/common/UploadInput/UploadInput";
import { LoadingOutlined } from "@ant-design/icons";
export default function ManageEvents() {
  const queryClient = useQueryClient();
  const [idCategoriesTypes, setIdCategoriesTypes] = useState([]);
  const [idCategoriesPrices, setIdCategoriesPrices] = useState([]);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [archivesArray, setArchivesArray] = useState([]);
  const [archiveError, setArchiveError] = useState(false);
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

  const { mutate: createEvent, isPending: isCreateEventPending } = useCreateEvents({
    onSuccess: () => {
      toast.success("Evento criado com sucesso");
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
    },
    onError: (err) => {
      return err;
    },
  });

  const { mutate: deleteEvent, isPending: isPendingDelete } = useDeleteEvents({
    onSuccess: () => {
      toast.success("Evento deletado com sucesso");
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
    },
    onError: (err) => {
      return err;
    },
  });

  const { mutate: updateEvent, isPending: isPendingUpdate } = useUpdateEvents({
    onSuccess: () => {
      toast.success("Evento editado com sucesso");
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
    let uploadEvent = {};
    if (archivesArray[0]) {
      uploadEvent = {
        base64: archivesArray[0].base64,
        name: archivesArray[0].name,
      };
      const combinedData = {
        ...data,
        id_categoryPrice: idCategoriesPrices,
        id_categoryType: idCategoriesTypes,
        uploadEvent,
      };
      createEvent(combinedData);
      e.target.reset();
      setArchivesArray([]);
      setArchiveError(false);
    } else {
      setArchiveError(true);
    }
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
          <FormSiriusInput
            name="name"
            placeholder="Nome do evento"
            errors={errors}
            register={register}
            inputKey="1"
          />
          <FormSiriusInput
            name="shortDescription"
            placeholder="Descrição curta"
            errors={errors}
            register={register}
            inputKey="3"
          />
          <FormTextArea
            name="longDescription"
            placeholder="Descrição longa"
            errors={errors}
            register={register}
          />
          <FormSiriusInput
            name="link"
            placeholder="Link do evento"
            errors={errors}
            register={register}
            inputKey="4"
          />

          <UploadInput
            key="images"
            inputKey="images"
            placeholder="Imagem do evento"
            error={archiveError}
            register={register}
            setArchivesArray={setArchivesArray}
            archivesArray={archivesArray}
            color="white"
            hasButtons={false}
            width="100%"
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
        <SubmitButton>{isCreateEventPending ? <LoadingOutlined /> : "ENVIAR"}</SubmitButton>
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
          updateEvent={updateEvent}
          close={handleCloseEditModal}
          transformArrayItems={transformArrayItems}
          destroyOnClose
        />
      )}

      {isPendingDelete || isPendingUpdate ? (
        <LoadingStyles>
          <LoadingOutlined />
        </LoadingStyles>
      ) : (
        <Table columns={columns} data={formattedEvents} />
      )}
    </Container>
  );
}
