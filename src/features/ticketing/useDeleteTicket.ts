import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteTicketApi } from "@/services/apiTickets";
import { toast } from "@/hooks/use-toast";

export default function useDeleteTicket() {
  const queryClient = useQueryClient();

  const { mutate: deleteTicket, isPending: isDeleting } = useMutation({
    mutationFn: deleteTicketApi,
    onSuccess: () => {
      toast({
        title: "Ticket deleted successfully",
      });
      queryClient.invalidateQueries({
        queryKey: ["tickets"],
      });
    },
    onError: (error) => {
      toast({
        title: "Error deleting ticket",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return { deleteTicket, isDeleting };
}
