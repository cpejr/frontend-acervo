import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Container, Title } from "./Styles";
import { Table, ModalDeleteItem } from "../../components";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineCloseCircle, AiFillTool } from "react-icons/ai";
export default function ManageCollection() {
  const [modalDelete, setModalDelete] = useState(false);

  const openModalDelete = () => setModalDelete(true);
  const closeModalDelete = () => setModalDelete(false);

  const [archiveID, setArchiveID] = useState("");

  const modalCloseButton = <AiOutlineCloseCircle />;
  const columns = [
    { field: "name", header: "Name" },
    { field: "Description", header: "Description" },
    { field: "manage", header: "Manage" },
  ];
  let data = [
    {
      name: "jose",
      Description: "ola",
      manage: (
        <div>
          <AiFillTool />
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

  function handleArchiveDelete(_id) {
    //funçaodeletar(_id);
    closeModalDelete();
  }

  return (
    <Container>
      <Title>Gerenciar Arquivos </Title>
      <Table columns={columns} data={data}></Table>
      <ModalDeleteItem
        close={closeModalDelete}
        handleItemDelete={handleArchiveDelete}
        id={"archiveID"}
        modal={modalDelete}
        modalCloseIcon={modalCloseButton}
        closeModal={closeModalDelete}
      />
    </Container>
  );
}
