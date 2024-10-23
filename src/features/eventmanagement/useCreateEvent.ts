import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";

import { createEventApi } from "../../services/apiEvent";

export function useCreateEvent() {
  const queryClient = useQueryClient();

  const { mutate: createEvent, isPending: isCreating } = useMutation({
    mutationFn: createEventApi,
    onSuccess: () => {
      toast({
        title: "Event created successfully",
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

  return { createEvent, isCreating };
}
