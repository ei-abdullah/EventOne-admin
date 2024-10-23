import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";

import { TfiPencil, TfiTrash } from "react-icons/tfi";

interface Ticket {
  id: number;
  ticketType: string;
  price: number;
  available: number;
  sold: number;
}

export default function TicketRow({ ticket }: { ticket: Ticket }) {
  const { id, ticketType, price, available, sold } = ticket;

  return (
    <TableRow>
      <TableCell className="font-semibold">
        {id} {ticketType}
      </TableCell>
      <TableCell>${price}</TableCell>
      <TableCell>{available}</TableCell>
      <TableCell>{sold}</TableCell>
      <TableCell>
        <Button variant="ghost" size="sm">
          <TfiPencil />
        </Button>
        <Button variant="ghost" size="sm">
          <TfiTrash />
        </Button>
      </TableCell>
    </TableRow>
  );
}
