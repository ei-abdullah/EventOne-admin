import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Checkbox } from "@/components/ui/checkbox";

import { createEventSchema } from "../../../schema";

import { cn } from "@/lib/utils";
import { formatDateForSupabase } from "@/utils/helpers";
import { useCreateEvent } from "./useCreateEvent";

export default function CreateEventForm() {
  const form = useForm({
    resolver: zodResolver(createEventSchema),
    defaultValues: {
      eventName: "",
      venue: "",
      eventDate: "",
      isDraft: false,
    },
  });

  const { createEvent, isCreating } = useCreateEvent();

  // Login talking to backend
  function onSubmit(data: z.infer<typeof createEventSchema>) {
    const { eventName, venue, eventDate, isDraft } = data;

    const newEvent = {
      eventName,
      venue,
      eventDate: formatDateForSupabase(eventDate),
      isDraft,
    };

    createEvent(newEvent);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="eventName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="venue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Venue</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="eventDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Event Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="isDraft"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4 shadow ">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div>
                  <FormLabel>Draft?</FormLabel>
                </div>
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full" disabled={isCreating}>
          Create Event
        </Button>
      </form>
    </Form>
  );
}
