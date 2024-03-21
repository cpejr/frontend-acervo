import { useMutation, useQuery } from "@tanstack/react-query";

import {
  getCategoryType,
  getCategoryTypeByName,
} from "../../services/endpoints";

export function useGetCategoryType({
    filters,
    onSuccess = ()=>{},
    onError = (err) = console.log(err),
}={}) {
    return useQuery({
        queryKey:["categoryType", filters],
        queryFn: ()=> getCategoryType(filters),
        onSuccess,
        onError
    });
}
export function useGetCategoryTypeByName({
    name,
    onSuccess = () => {},
    onError = (err) => console.log(err),
  } = {}) {
    return useQuery({
      queryKey: ["categoryType", name],
      queryFn: () => getCategoryTypeByName(name),
      onSuccess,
      onError,
    });
  }

