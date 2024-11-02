import { useQueryClient, useMutation } from "@tanstack/react-query";

import { upadateTicketApi } from "@/services/apiTickets";
import { toast } from "@/hooks/use-toast";

interface Ticket {
  id: number;
  updatedTicket: object;
}

export function useUpdateTicket() {
  const queryClient = useQueryClient();

  const { mutate: updateTicket, isPending: isUpdating } = useMutation({
    mutationFn: ({ id, updatedTicket }: Ticket) =>
      upadateTicketApi(id, updatedTicket),
    onSuccess: () => {
      toast({
        title: "Ticket upated successfully",
      });
      queryClient.invalidateQueries({
        queryKey: ["tickets"],
      });
    },
    onError: (error) => {
      toast({
        title: "Error updating ticket",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return { updateTicket, isUpdating };
}
