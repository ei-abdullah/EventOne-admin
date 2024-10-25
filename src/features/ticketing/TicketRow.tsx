import { TfiPencil, TfiTrash } from "react-icons/tfi";

import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import useDeleteTicket from "./useDeleteTicket";
import EditTicketDialog from "./EditTicketDialog";

interface Ticket {
  id: number;
  ticketType: string;
  price: number;
  available: number;
  sold: number;
}

export default function TicketRow({ ticket }: { ticket: Ticket }) {
  const { id, ticketType, price, available, sold } = ticket;

  const { deleteTicket, isDeleting } = useDeleteTicket();

  return (
    <TableRow>
      <TableCell className="font-semibold">{ticketType}</TableCell>
      <TableCell>${price}</TableCell>
      <TableCell>{available}</TableCell>
      <TableCell>{sold}</TableCell>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm">
              <TfiPencil />
            </Button>
          </DialogTrigger>
          <EditTicketDialog ticket={ticket} />
        </Dialog>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => deleteTicket(id)}
          disabled={isDeleting}
        >
          <TfiTrash />
        </Button>
      </TableCell>
    </TableRow>
  );
}
