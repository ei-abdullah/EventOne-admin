import { useQueryClient, useMutation } from "@tanstack/react-query";

import { createTicketApi } from "@/services/apiTickets";
import { toast } from "@/hooks/use-toast";

export function useCreateTicket() {
  const queryClient = useQueryClient();

  const { mutate: createTicket, isPending: isCreating } = useMutation({
    mutationFn: createTicketApi,
    onSuccess: () => {
      toast({
        title: "Ticket created successfully",
      });

      queryClient.invalidateQueries({
        queryKey: ["tickets"],
      });
    },
    onError: (error) => {
      toast({
        title: "Error creating ticket",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return { createTicket, isCreating };
}
