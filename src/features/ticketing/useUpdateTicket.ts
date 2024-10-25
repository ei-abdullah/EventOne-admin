import { useQueryClient, useMutation } from "@tanstack/react-query";

import { upadateTicketApi } from "@/services/apiTickets";
import { toast } from "@/hooks/use-toast";

interface Ticket {
  id: number;
  newTicket: object;
}

export function useUpdateTicket() {
  const queryClient = useQueryClient();

  const { mutate: upadateTicket, isPending: isUpdating } = useMutation({
    mutationFn: ({ id, newTicket }: Ticket) => upadateTicketApi(id, newTicket),
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

  return { upadateTicket, isUpdating };
}
