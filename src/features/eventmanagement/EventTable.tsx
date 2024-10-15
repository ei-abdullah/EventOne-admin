import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function EventTable() {
  return (
    <Table className="mt-12">
      <TableHeader>
        <TableRow>
          <TableHead>Event Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Venue</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Summer Music Fesitval</TableCell>
          <TableCell>July 15, 2023</TableCell>
          <TableCell>Central Part</TableCell>
          <TableCell>
            <Badge className="font-robotoCondensed">Upcoming</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Tech Conference 2023</TableCell>
          <TableCell>September 5, 2023</TableCell>
          <TableCell>Convention Center</TableCell>
          <TableCell>
            <Badge variant="outline" className="font-robotoCondensed">
              Draft
            </Badge>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
