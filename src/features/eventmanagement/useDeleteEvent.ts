import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEventApi } from "../../services/apiEvent";
import { toast } from "@/hooks/use-toast";

export function useDeleteEvent() {
  const queryClient = useQueryClient();

  const { mutate: deleteEvent, isPending: isDeleting } = useMutation({
    mutationFn: deleteEventApi,
    onSuccess: () => {
      toast({
        title: "Event deleted successfully",
      });
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
    },
    onError: (error) => {
      toast({
        title: error.message,
        variant: "destructive",
      });
    },
  });

  return { deleteEvent, isDeleting };
}
