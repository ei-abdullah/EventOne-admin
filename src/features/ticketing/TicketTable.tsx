import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import TicketRow from "./TicketRow";
import { useTickets } from "./useTickets";

export default function EventTable() {
  const { tickets } = useTickets();

  return (
    <Table className="mt-12 overflow-hidden ">
      <TableHeader>
        <TableRow>
          <TableHead>Ticket Type</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Available</TableHead>
          <TableHead>Sold</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {tickets?.map((ticket) => (
          <TicketRow ticket={ticket} key={ticket.id} />
        ))}
      </TableBody>
    </Table>
  );
}
