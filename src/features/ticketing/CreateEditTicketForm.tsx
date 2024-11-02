import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useUpdateTicket } from "./useUpdateTicket";
import { useCreateTicket } from "./useCreateTicket";
import { createEditTicketSchema } from "../../../schema/index";

interface Ticket {
  id?: number;
  ticketType?: string;
  price?: number;
  available?: number;
  sold?: number | 0;
}

type TicketFormProps = {
  ticket?: Ticket;
};

export default function CreateEditTicketForm({ ticket = {} }: TicketFormProps) {
  const { id, ticketType, price, available, sold } = ticket;

  const isEditingSession = Boolean(id);

  const form = useForm({
    resolver: zodResolver(createEditTicketSchema),
    defaultValues: isEditingSession
      ? {
          ticketType,
          price,
          available,
          sold,
        }
      : {
          sold: 0,
        },
  });

  const { createTicket, isCreating } = useCreateTicket();
  const { updateTicket, isUpdating } = useUpdateTicket();

  const isWorking = isCreating || isUpdating;

  function onSubmit(data: z.infer<typeof createEditTicketSchema>) {
    const { ticketType, price, available, sold } = data;

    if (isEditingSession && id !== undefined) {
      const updatedTicket = {
        ticketType,
        price,
        available,
        sold,
      };

      updateTicket({ updatedTicket, id });
    } else {
      createTicket({ ...data });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="ticketType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ticket Type</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field: { value, onChange } }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="available"
            render={({ field: { value, onChange } }) => (
              <FormItem>
                <FormLabel>Available</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sold"
            render={({ field: { value, onChange } }) => (
              <FormItem>
                <FormLabel>Sold</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    value={isEditingSession ? value : "0"}
                    onChange={(e) => onChange(Number(e.target.value))}
                    disabled={!isEditingSession}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full" disabled={isWorking}>
          {isEditingSession ? "Update Ticket" : "Create Ticket"}
        </Button>
      </form>
    </Form>
  );
}
