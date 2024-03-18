import { useMutation, useQuery } from "@tanstack/react-query";

import {
  getEvents,
  createEvents,
  getEventsByCategoryId,
} from "../../services/endpoints";

export function useGetEvents({
  filters,
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ["events", filters],
    queryFn: () => getEvents(filters),
    onSuccess,
    onError,
  });
}

export function useCreateEvents({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({ mutationFn: createEvents, onSuccess, onError });
}

export function useEventsByCategoryId({
  name,
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ["events", name],
    queryFn: () => getEventsByCategoryId(name),
    onSuccess,
    onError,
  });
}
