import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Container, Title } from "./Styles";
import { Table } from "../../components";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineCloseCircle, AiFillTool } from "react-icons/ai";
export default function ManageCollection() {
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
          <RiDeleteBin5Line />
        </div>
      ),
    },
  ];
  return (
    <Container>
      <Title>Gerenciar Arquivos </Title>
      <Table columns={columns} data={data}></Table>
    </Container>
  );
}
