/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

import {
  Container,
  Select,
  ProfilePic,
  Table,
  TableColumn,
  ModalStyle,
  //Button,
  Line,
  Title,
} from "./Styles";
import { RiDeleteBin5Line } from "react-icons/ri";
import ModalDeleteUser from "../../components/features/modais/ModalDeleteUser/ModalDeleteUser";
import { CloseOutlined } from "@ant-design/icons";

export default function ManageUsers() {
  // const [users, setUsers] = useState([]);
  const [modalDelete, setModalDelete] = useState(false);
  const [userID, setUserID] = useState("");
  const openModalDelete = () => setModalDelete(true);
  const closeModalDelete = () => setModalDelete(false);
  const modalCloseButton = <CloseOutlined />;

  const columns = [
    { field: "imageURL", header: "Foto" },
    { field: "name", header: "Name" },
    { field: "email", header: "Email" },
    { field: "type", header: "Type" },
    { field: "manage", header: "Manage" },
  ];
  const selectOptions = [
    { label: "Adminstrador", value: "Admin" },
    { label: "Usuário", value: "User" },
  ];

  let users = [
    {
      imageURL: (
        <ProfilePic src={"https://picsum.photos/id/237/536/354"} alt={"jose"} />
      ),
      name: "jose",
      email: "teste@123",
      type_: "admin",
      type: (
        <Select
          //onChange={(e) => handleTypeChange(user?._id, e.value)}
          options={selectOptions}
          placeholder={"admin"}
          optionLabel="label"
          className="w-full md:w-20rem"
        />
      ),
      manage: (
        <RiDeleteBin5Line
          style={{ cursor: "pointer" }}
          onClick={() => {
            openModalDelete();
            setUserID("123");
          }}
        />
      ),
    },
    {
      imageURL: (
        <ProfilePic src={"https://picsum.photos/id/237/536/354"} alt={"jose"} />
      ),
      name: "jose",
      email: "teste@123",
      type: (
        <Select
          value={["admin"]}
          //onChange={(e) => handleTypeChange(user?._id, e.value)}
          options={selectOptions}
          placeholder={"admin"}
          optionLabel="label"
          className="w-full md:w-20rem"
        />
      ),
      manage: (
        <RiDeleteBin5Line
          style={{ cursor: "pointer" }}
          onClick={() => {
            openModalDelete();
            setUserID("123");
          }}
        />
      ),
    },
    {
      imageURL: (
        <ProfilePic src={"https://picsum.photos/id/237/536/354"} alt={"jose"} />
      ),
      name: "jose",
      email: "teste@123",
      type: (
        <Select
          value={["admin"]}
          //onChange={(e) => handleTypeChange(user?._id, e.value)}
          options={selectOptions}
          placeholder={"admin"}
          optionLabel="label"
          className="w-full md:w-20rem"
        />
      ),
      manage: (
        <RiDeleteBin5Line
          style={{ cursor: "pointer" }}
          onClick={() => {
            openModalDelete();
            setUserID("123");
          }}
        />
      ),
    },
  ];
  return (
    <Container>
      <Title>GERENCIAR USUÁRIOS</Title>
      <Line />
      <Table value={users} paginator rows={10} removableSort>
        {columns.map((data) => (
          <TableColumn
            sortable
            key={data.field}
            field={data.field}
            header={data.header}
          />
        ))}
      </Table>
      <ModalStyle
        open={modalDelete}
        onCancel={closeModalDelete}
        width={500}
        height={250}
        padding={0}
        footer={null}
        closeIcon={modalCloseButton}
        centered
        destroyOnClose
      >
        <ModalDeleteUser close={closeModalDelete} id={userID} />
      </ModalStyle>
    </Container>
  );
}
