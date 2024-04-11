import { useQuery } from "@tanstack/react-query";
import { getArchives } from "../../services/endpoints";

export function useGetArchives(
  archiveIDs, // Adicione os parâmetros aqui
  { onSuccess = () => {}, onError = (err) => console.log(err) } = {}
) {
  return useQuery({
    queryKey: ["archives"],
    queryFn: () => getArchives(archiveIDs), // Passe os parâmetros para a função
    onSuccess,
    onError,
  });
}
