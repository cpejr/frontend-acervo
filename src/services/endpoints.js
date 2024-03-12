import useAuthStore from "../Stores/auth";
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
export const login = async (credentials) => {
    const { setAuth } = useAuthStore.getState();
    const { data } = await api.post('/user', credentials);

    setAuth(data.accessToken);
    return data;
}