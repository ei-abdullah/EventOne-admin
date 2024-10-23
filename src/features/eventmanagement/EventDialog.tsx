import { TfiPlus } from "react-icons/tfi";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EventForm from "./CreateEventForm";

export function EventDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <span className="flex justify-center items-center">
            <TfiPlus /> <span className="pl-2">Create Event</span>
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="mb-4 ">
          <DialogTitle className="text-2xl py-1">
            Create a new event
          </DialogTitle>
          <DialogDescription>Enter event details</DialogDescription>
        </DialogHeader>
        <EventForm />
      </DialogContent>
    </Dialog>
  );
}
