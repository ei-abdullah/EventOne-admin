import { useEvents } from "./useEvents";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import EventRow from "./EventRow";

export default function EventTable() {
  const { isLoading, events, error } = useEvents();

  return (
    <Table className="mt-12 overflow-hidden ">
      <TableHeader>
        <TableRow>
          <TableHead>Event Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Venue</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {events?.map((event) => (
          <EventRow event={event} key={event.id} />
        ))}
      </TableBody>
    </Table>
  );
}
