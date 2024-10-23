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
import CreateEditForm from "./CreateEditForm";

export default function TicketDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <span className="flex justify-center items-center">
            <TfiPlus /> <span className="pl-2">Add Ticket</span>
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="mb-4 ">
          <DialogTitle className="text-2xl py-1">
            Add a new ticket type
          </DialogTitle>
          <DialogDescription>Enter ticket details</DialogDescription>
        </DialogHeader>
        <CreateEditForm />
      </DialogContent>
    </Dialog>
  );
}
