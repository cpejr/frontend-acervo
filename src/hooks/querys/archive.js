import { useQuery } from "@tanstack/react-query";
import { getArchives } from "../../services/endpoints";

export function useGetArchives(
  archiveIDs,
  key, // Adicione os parâmetros aqui
  { onSuccess = () => {}, onError = (err) => console.error(err) } = {}
) {
  return useQuery({
    queryKey: [key],
    queryFn: () => getArchives(archiveIDs), // Passe os parâmetros para a função
    onSuccess,
    onError,
  });
}
