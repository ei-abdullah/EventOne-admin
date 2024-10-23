import { useQuery } from "@tanstack/react-query";

import { getEventsApi } from "@/services/apiEvent";

export function useEvents() {
  const {
    isLoading,
    data: events,
    error,
  } = useQuery({
    queryKey: ["events"],
    queryFn: getEventsApi,
  });

  return { events, isLoading, error };
}
