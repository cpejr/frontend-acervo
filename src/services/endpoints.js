import api from "./api";
//user

export async function getUsers() {
  const { data } = await api.get("/user");
  return data;
}

export const deleteUser = async (_id) => {
  const { data } = await api.delete(`/users/${_id}`);

  return data;
};

export const updateUser = async ({ _id, newUserData }) => {
  const { data } = await api.put(`/users/${_id}`, newUserData);

  return data;
};
