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
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineCloseCircle, AiFillTool } from "react-icons/ai";
import { LoadingOutlined } from "@ant-design/icons";
export default function ManageCollection() {
  const [modalDelete, setModalDelete] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);

  const openModalDelete = () => setModalDelete(true);
  const closeModalDelete = () => setModalDelete(false);

  const openModalUpdate = () => setModalUpdate(true);
  const closeModalUpdate = () => setModalUpdate(false);

  const [archiveID, setArchiveID] = useState("");

  const modalCloseButton = <AiOutlineCloseCircle />;
  const columns = [
    { field: "name", header: "Name" },
    { field: "Description", header: "Description" },
    { field: "manage", header: "Manage" },
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
      key: "archives",
      placeholder: "Adicionar Arquivo",
      required: true,
    },
  ];
  let data = [
    {
      name: "jose",
      Description: "ola",
      manage: (
        <div>
          <AiFillTool
            style={{ cursor: "pointer" }}
            onClick={() => {
              openModalUpdate();
              setArchiveID("123");
            }}
          />
          <RiDeleteBin5Line
            style={{ cursor: "pointer" }}
            onClick={() => {
              openModalDelete();
              setArchiveID("123");
            }}
          />
        </div>
      ),
    },
  ];
  const isLoading = false;
  function handleArchiveDelete(_id) {
    //funçaodeletar(_id);
    closeModalDelete();
  }
  function handleArchiveUpdate(_id) {
    //funçaodeletar(_id);
    closeModalUpdate();
  }
  function handlesubmit(data) {
    console.log("ola", data);
  }
  return (
    <Container>
      <Title>Gerenciar Arquivos </Title>
      <FormSubmit inputs={inputs} onSubmit={handlesubmit} />
      {isLoading ? (
        <LoadingStyles>
          <LoadingOutlined />
        </LoadingStyles>
      ) : (
        <Table columns={columns} data={data} />
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
