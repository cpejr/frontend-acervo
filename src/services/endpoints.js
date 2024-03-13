import api from "./api";
//user

export async function getUsers() {
  const { data } = await api.get("/user");
  return data;
}

export async function deleteUser(_id) {
  const { data } = await api.delete(`/user/${_id}`);

  return data;
}

export async function updateUser({ _id, newUserData }) {
  const { data } = await api.put(`/user/${_id}`, newUserData);

  return data;
}

//memorial

export async function getMemorial() {
  const { data } = await api.get("/memorial");

  return data;
}

export async function deleteMemorial(_id) {
  const { data } = await api.delete(`/memorial/${_id}`);
  return data;
}

export async function updateMemorial(obj) {
  const { data } = await api.put(`/memorial/${obj._id}`, obj.data);

  return data;
}

export async function postMemorial(newMemorial) {
  const { data } = await api.post(`/memorial`, newMemorial);

  return data;
}
