import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Container, Title, LoadingStyles } from "./Styles";
import {
  Table,
  ModalDeleteItem,
  FormSubmit,
  ModalUpdateArchive,
} from "../../components";
import {
  useGetMemorial,
  usePostMemorial,
  useDeleteMemorial,
  useUpdateMemorial,
} from "../../hooks/querys/memorial";
import { newCollectionValidationSchema } from "./utils";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineCloseCircle, AiFillTool } from "react-icons/ai";
import { LoadingOutlined } from "@ant-design/icons";
export default function ManageCollection() {
  const [modalDelete, setModalDelete] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [collections, setCollections] = useState([]);

  const openModalDelete = () => setModalDelete(true);
  const closeModalDelete = () => setModalDelete(false);

  const openModalUpdate = () => setModalUpdate(true);
  const closeModalUpdate = () => setModalUpdate(false);

  const [archiveID, setArchiveID] = useState("");

  const modalCloseButton = <AiOutlineCloseCircle />;
  const queryClient = useQueryClient();
  const columns = [
    { field: "Title", header: "Title" },
    { field: "Description", header: "Description" },
    { field: "Manage", header: "Manage" },
  ];

  let inputs = [
    {
      type: "input",
      key: "title",
      placeholder: "titulo",
      required: true,
    },
    {
      type: "input",
      key: "shortDescription",
      placeholder: "Descrição curta",
      required: true,
    },
    {
      type: "input",
      key: "longDescription",
      placeholder: "Descrição longa",
      required: true,
    },
    {
      type: "input",
      key: "link",
      placeholder: "link",
      required: true,
    },
    {
      type: "input",
      key: "archive",
      placeholder: "Adicionar Arquivo",
      required: true,
    },
  ];
  async function formatAllCollection() {
    const formattedCollection = await collection.map((collection) => ({
      Title: collection?.title,
      Description: collection?.shortDescription,
      Manage: (
        <div>
          <AiFillTool
            style={{ cursor: "pointer" }}
            onClick={() => {
              openModalUpdate();
              setArchiveID(collection?._id);
            }}
          />
          <RiDeleteBin5Line
            style={{ cursor: "pointer" }}
            onClick={() => {
              openModalDelete();
              setArchiveID(collection?._id);
            }}
          />
        </div>
      ),
    }));

    setCollections(formattedCollection);
  }

  function handleArchiveDelete(_id) {
    deleteMemorial(_id);
    closeModalDelete();
  }

  function handleArchiveUpdate(_id, data) {
    const newArchiveData = { data };
    console.log(_id);
    console.log(newArchiveData);
    updateMemorial(_id, newArchiveData);
    closeModalUpdate();
  }

  function handlesubmit(data) {
    console.log(data);
    postMemorial(data);
  }

  //backend calls
  const { data: collection, isLoading } = useGetMemorial({
    onError: (err) => {
      toast.error("Erro ao pegar itens", err);
    },
  });

  const { mutate: postMemorial } = usePostMemorial({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["memorial"],
      });
      toast.success("Post cadastrado!");
    },
    onError: (err) => {
      toast.error("Erro ao cadastras post.", err);
    },
  });

  const { mutate: deleteMemorial } = useDeleteMemorial({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["memorial"],
      });
      toast.success("Post deletado com sucesso!");
    },
    onError: (err) => {
      toast.error("Erro ao excluir post.", err);
    },
  });
  const { mutate: updateMemorial } = useUpdateMemorial({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["memorial"],
      });
      toast.success("post atualizado com sucesso!");
    },
    onError: (err) => {
      toast.error("Erro ao atualizar o post .", err);
    },
  });

  useEffect(() => {
    if (!isLoading && collection) {
      formatAllCollection();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collection, isLoading]);

  return (
    <Container>
      <Title>Gerenciar Arquivos </Title>
      <FormSubmit
        inputs={inputs}
        onSubmit={handlesubmit}
        schema={newCollectionValidationSchema}
      />
      {isLoading ? (
        <LoadingStyles>
          <LoadingOutlined />
        </LoadingStyles>
      ) : (
        <Table columns={columns} data={collections} />
      )}
      <ModalDeleteItem
        close={closeModalDelete}
        handleItemDelete={handleArchiveDelete}
        id={archiveID}
        modal={modalDelete}
        modalCloseIcon={modalCloseButton}
        closeModal={closeModalDelete}
      />

      <ModalUpdateArchive
        close={closeModalUpdate}
        handleArchiveUpdate={handleArchiveUpdate}
        id={archiveID}
        modal={modalUpdate}
        modalCloseIcon={modalCloseButton}
        closeModal={closeModalUpdate}
      />
    </Container>
  );
}
