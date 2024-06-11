import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { getCategoryMemorial } from "../../services/endpoints";

export function useGetCategoryMemorial({
  filters,
  onSuccess = () => {},
  onError = (err) => toast.error(err),
} = {}) {
  return useQuery({
    queryKey: ["categoryMemorial", filters],
    queryFn: () => getCategoryMemorial(filters),
    onSuccess,
    onError,
  });
}
