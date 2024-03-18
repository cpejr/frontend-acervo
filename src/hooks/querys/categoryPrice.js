import { useMutation, useQuery } from "@tanstack/react-query";

import {
  getCategoryPrice,
} from "../../services/endpoints";

export function useGetCategoryPrice({
    filters,
    onSuccess = ()=>{},
    onError = (err) = console.log(err),
}={}) {
    return useQuery({
        queryKey:["categoryPrice", filters],
        queryFn: ()=> getCategoryPrice(filters),
        onSuccess,
        onError
    });
}

