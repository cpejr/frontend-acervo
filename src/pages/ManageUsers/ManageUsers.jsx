/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import {
  Container,
  Select,
  ProfilePic,
  Table,
  TableColumn,
  ModalStyle,
  Line,
  Title,
  SearchBar,
} from "./Styles";
import { RiDeleteBin5Line } from "react-icons/ri";
import ModalDeleteUser from "../../components/features/modais/ModalDeleteUser/ModalDeleteUser";
import { CloseOutlined } from "@ant-design/icons";
import {
  useDeleteUsers,
  useGetUsers,
  useUpdateUsers,
} from "../../hooks/querys/user";

export default function ManageUsers() {
  const [modalDelete, setModalDelete] = useState(false);
  const [userID, setUserID] = useState("");
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const openModalDelete = () => setModalDelete(true);
  const closeModalDelete = () => setModalDelete(false);
  const modalCloseButton = <CloseOutlined />;
  const queryClient = useQueryClient();
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
  //formating the users
  async function formatAllUsers() {
    const formattedUsers = await user.map((user) => ({
      imageURL: <ProfilePic src={user.imageURL} alt={user.name} />,
      name: user.name,
      email: user.email,
      type: (
        <Select
          value={[user.type]}
          onChange={(e) => handleTypeChange(user?._id, e.value)}
          options={selectOptions}
          placeholder={user.type}
          optionLabel="label"
          className="w-full md:w-20rem"
        />
      ),
      manage: (
        <RiDeleteBin5Line
          style={{ cursor: "pointer" }}
          onClick={() => {
            openModalDelete();
            setUserID(user?._id);
          }}
        />
      ),
    }));

    setUsers(formattedUsers);
  }

  const handleTypeChange = (_id, type) => {
    const newUserData = { type };
    updateUser({ _id, newUserData });
  };
  const handleUserDelete = (_id) => {
    deleteUser(_id);
    closeModalDelete();
  };
  //backend calls
  const { mutate: deleteUser } = useDeleteUsers({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      toast.success("Usuario deletado com sucesso!");
    },
    onError: (err) => {
      toast.error("Erro ao excluir usuário.", err);
    },
  });

  const { mutate: updateUser } = useUpdateUsers({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      toast.success("Usuário atualizado com sucesso!");
    },
    onError: (err) => {
      toast.error("Erro ao atualizar usuário.", err);
    },
  });

  const { data: user, isLoading } = useGetUsers({
    onError: (err) => {
      toast.error("Erro ao pegar itens", err);
    },
  });
  //
  useEffect(() => {
    if (!isLoading && user) {
      formatAllUsers();
    }
  }, [user, isLoading, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Container>
      <Title>GERENCIAR USUÁRIOS</Title>
      <Line />

      <SearchBar
        type="text"
        placeholder="Pesquisar usuario"
        value={searchQuery}
        onChange={handleSearchChange}
      ></SearchBar>
      <Table
        value={users}
        paginator
        rows={10}
        removableSort
        scrollable
        scrollHeight="1000px"
      >
        {columns.map((data) => (
          <TableColumn
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
        <ModalDeleteUser
          close={closeModalDelete}
          handleUserDelete={handleUserDelete}
          id={userID}
        />
      </ModalStyle>
    </Container>
  );
}
