import * as z from "zod";

export const createEventSchema = z.object({
  eventName: z.string().min(6, {
    message: "Eventname must be at least 8 characters long",
  }),
  venue: z.string().min(3, {
    message: "Venue must be at least 6 characters long",
  }),
  eventDate: z.date({
    message: "Enter a valid date",
  }),
  isDraft: z.boolean().default(false).optional(),
});
