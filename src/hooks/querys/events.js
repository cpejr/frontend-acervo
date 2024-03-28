import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

import {
  getEvents,
  createEvents,
  getEventsByCategoryId,
  deleteEvents,
  updateEvents,
} from "../../services/endpoints";

export function useGetEvents({
  filters,
  onSuccess = () => {},
  onError = (err) => toast.error(err),
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
  onError = (err) => toast.error(err),
} = {}) {
  return useMutation({ mutationFn: createEvents, onSuccess, onError });
}

export function useDeleteEvents({
  onSuccess = () => {},
  onError = (err) => toast.error(err),
} = {}) {
  return useMutation({ mutationFn: deleteEvents, onSuccess, onError });
}

export function useUpdateEvents({
  onSuccess = () => {},
  onError = (err) => toast.error(err),
} = {}) {
  return useMutation({ mutationFn: updateEvents, onSuccess, onError });
}
export function useGetEventsByCategoryId({
  id,
  name,
  type,
  onSuccess = () => {},
  onError = (err) => toast.error(err),
} = {}) {
  return useQuery({
    queryKey: ["events"],
    queryFn: () => getEventsByCategoryId(id, name, type),
    onSuccess,
    onError,
  });
}
