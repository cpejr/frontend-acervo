import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Container, Select, ProfilePic, Title, LoadingStyles } from "./Styles";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ModalDeleteItem, Table, SearchBar } from "../../components";
import { LoadingOutlined } from "@ant-design/icons";

import {
  useDeleteUsers,
  useGetUsers,
  useUpdateUsers,
} from "../../hooks/querys/user";

export default function ManageUsers() {
  const [userID, setUserID] = useState("");
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalDelete, setModalDelete] = useState(false);

  const openModalDelete = () => setModalDelete(true);
  const closeModalDelete = () => setModalDelete(false);

  const modalCloseButton = <AiOutlineCloseCircle />;
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
    const filteredUsers = user.filter((user) =>
      user?.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const formattedUsers = await filteredUsers.map((user) => ({
      imageURL: <ProfilePic src={user?.imageURL} alt={user?.name} />,
      name: user?.name,
      email: user?.email,
      type: (
        <Select
          value={[user?.type]}
          onChange={(e) => handleTypeChange(user?._id, e.value)}
          options={selectOptions}
          placeholder={user?.type}
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
  function handleTypeChange(_id, type) {
    const newUserData = { type };
    updateUser({ _id, newUserData });
  }
  function handleUserDelete(_id) {
    deleteUser(_id);
    closeModalDelete();
  }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isLoading, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Container>
      <Title>GERENCIAR USUÁRIOS</Title>
      <SearchBar
        placeholder={"pesquisar usuario"}
        value={searchQuery}
        search={handleSearchChange}
      ></SearchBar>
      {isLoading ? (
        <LoadingStyles>
          <LoadingOutlined />
        </LoadingStyles>
      ) : (
        <Table columns={columns} data={users} />
      )}
      <ModalDeleteItem
        close={closeModalDelete}
        handleItemDelete={handleUserDelete}
        id={userID}
        modal={modalDelete}
        modalCloseIcon={modalCloseButton}
        closeModal={closeModalDelete}
      />
    </Container>
  );
}
