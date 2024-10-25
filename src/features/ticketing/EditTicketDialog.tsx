import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import EditTicketForm from "./EditTicketForm";

interface Ticket {
  id: number;
  ticketType: string;
  price: number;
  available: number;
  sold: number;
}

export default function EditTicketDialog({ ticket }: { ticket: Ticket }) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit Ticket Details</DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>
      <Separator />
      <EditTicketForm ticket={ticket} />
    </DialogContent>
  );
}
