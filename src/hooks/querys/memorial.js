import { useMutation } from "@tanstack/react-query";
import { getCards } from "../../services/endpoints";

export function useGetCards({
  onSuccess = () => {},
  onError = (err) => console.error(err),
} = {}) {
  return useMutation({
    queryKey: ["memorialCards"],
    mutationFn: getCards,
    onSuccess,
    onError,
  });
}
