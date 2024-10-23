import { useQuery } from "@tanstack/react-query";

import { getTicketsApi } from "@/services/apiTickets";

export function useTickets() {
  const {
    isLoading,
    data: tickets,
    error,
  } = useQuery({
    queryKey: ["tickets"],
    queryFn: getTicketsApi,
  });

  return { tickets, isLoading, error };
}
