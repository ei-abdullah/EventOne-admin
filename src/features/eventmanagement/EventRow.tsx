import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { formatDate } from "@/utils/helpers";
import { TfiTrash } from "react-icons/tfi";
import { useDeleteEvent } from "./useDeleteEvent";

interface Event {
  id: number;
  eventName: string;
  venue: string;
  eventDate: string;
  isDraft: boolean;
}

export default function EventRow({ event }: { event: Event }) {
  const { id, eventName, eventDate, venue, isDraft } = event;

  const { deleteEvent, isDeleting } = useDeleteEvent();

  return (
    <TableRow>
      <TableCell className="font-semibold">{eventName}</TableCell>
      {/* <TableCell>July 15, 2023</TableCell> */}
      <TableCell>{formatDate(eventDate)}</TableCell>
      <TableCell>{venue}</TableCell>
      <TableCell>
        <Badge
          className="font-robotoCondensed font-medium cursor-pointer"
          variant={isDraft ? "secondary" : "default"}
        >
          {isDraft ? "Draft" : "Upcoming"}
        </Badge>
      </TableCell>
      <TableCell>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => deleteEvent(id)}
          disabled={isDeleting}
        >
          <TfiTrash />
        </Button>
      </TableCell>
    </TableRow>
  );
}
