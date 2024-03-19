import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Container, Title, LoadingStyles, AddArchive } from "./Styles";
import {
  Table,
  ModalDeleteItem,
  FormSubmit,
  ModalUpdateMemorial,
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
import { CiCirclePlus } from "react-icons/ci";
import { FaLink } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

export default function ManageCollection() {
  const [modalDelete, setModalDelete] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [collections, setCollections] = useState([]);
  const [archiveCount, setArchiveCount] = useState(1);

  const openModalDelete = () => setModalDelete(true);
  const closeModalDelete = () => setModalDelete(false);

  const openModalUpdate = () => setModalUpdate(true);
  const closeModalUpdate = () => setModalUpdate(false);

  const [MemorialID, setMemorialID] = useState("");
  const [memorialValue, setMemorialValue] = useState({});
  const [inputs, setInputs] = useState([
    {
      type: "input",
      key: "title",
      placeholder: "Titulo:",
      icon: { FaLink },
    },
    {
      type: "input",
      key: "shortDescription",
      placeholder: "Descrição curta:",
      icon: { FaLink },
    },
    {
      type: "input",
      key: "longDescription",
      placeholder: "Descrição longa:",
      icon: { FaLink },
    },
    {
      type: "input",
      key: "link",
      placeholder: "link:",
      icon: { FaLink },
    },
    {
      type: "input",
      key: "archive",
      placeholder: "Adicionar Arquivo:",
      icon: { FaLink },
    },
  ]);
  const modalCloseButton = <AiOutlineCloseCircle />;
  const queryClient = useQueryClient();
  const columns = [
    { field: "Title", header: "Title" },
    { field: "Description", header: "Description" },
    { field: "Manage", header: "Manage" },
  ];

  function addInput() {
    const newInput = {
      type: "input",
      key: `archive${archiveCount}`,
      placeholder: "Adicionar arquivo :",
      icon: { FaLink },
    };

    setInputs([...inputs, newInput]);
    setArchiveCount(archiveCount + 1);
  }
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
              setMemorialID(collection?._id);
              setMemorialValue({
                title: collection.title,
                archives: collection.archive,
                link: collection.link,
              });
            }}
          />
          <RiDeleteBin5Line
            style={{ cursor: "pointer" }}
            onClick={() => {
              openModalDelete();
              setMemorialID(collection?._id);
            }}
          />
        </div>
      ),
    }));

    setCollections(formattedCollection);
  }

  function handleMemorialDelete(_id) {
    deleteMemorial(_id);
    closeModalDelete();
  }

  function handleMemorialUpdate(id, data) {
    updateMemorial({ _id: id, newData: data });
    closeModalUpdate();
  }

  function handlesubmit(data) {
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
      <Title>Adicionar Novo Arquivo </Title>

      <FormSubmit
        inputs={inputs}
        onSubmit={handlesubmit}
        schema={newCollectionValidationSchema}
      />
      <AddArchive>
        <CiCirclePlus
          style={{
            width: "2.5rem",
            height: "3.5rem",
            cursor: "pointer",
          }}
          onClick={addInput}
        />
        Adicionar arquivo:
      </AddArchive>

      <></>
      <Title>Gerenciar Arquivos </Title>
      {isLoading ? (
        <LoadingStyles>
          <LoadingOutlined />
        </LoadingStyles>
      ) : (
        <Table columns={columns} data={collections} />
      )}
      <ModalDeleteItem
        close={closeModalDelete}
        handleItemDelete={handleMemorialDelete}
        id={MemorialID}
        modal={modalDelete}
        modalCloseIcon={modalCloseButton}
        closeModal={closeModalDelete}
      />

      <ModalUpdateMemorial
        close={closeModalUpdate}
        handleMemorialUpdate={handleMemorialUpdate}
        id={MemorialID}
        values={memorialValue}
        modal={modalUpdate}
        modalCloseIcon={modalCloseButton}
        closeModal={closeModalUpdate}
      />
    </Container>
  );
}
