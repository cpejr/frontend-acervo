import { useQuery, useMutation } from "@tanstack/react-query";
import { getUsers /*deleteUser, updateUser*/ } from "../../services/endpoints";

export function useGetUsers({
  onSuccess = () => console.log("foiii"),
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
    onSuccess,
    onError,
  });
}
export function useDeleteUsers({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    // mutationFn: deleteUser,
    onSuccess,
    onError,
  });
}
export function useUpdateUsers({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    // mutationFn: updateUser,
    onSuccess,
    onError,
  });
}
