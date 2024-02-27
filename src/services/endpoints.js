import api from "./api";
//user

export async function getUsers() {
  const { data } = await api.get("/user");
  console.log("data", data);
  return data;
}
