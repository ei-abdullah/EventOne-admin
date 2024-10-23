import { Card, CardContent, CardHeader } from "@/components/ui/card";

import EventTable from "./EventTable";
import { EventDialog } from "./EventDialog";

export default function event() {
  return (
    <Card className="w-3/4 h-1/2 bg-white shadow-none p-4">
      <CardHeader className="flex flex-row justify-between items-center">
        <div>
          <div className="text-2xl font-bold">Event Management</div>
          <div className="text-gray-500">
            Create and manage your events here.
          </div>
        </div>

        <EventDialog />
      </CardHeader>

      <CardContent>
        <EventTable />
      </CardContent>
    </Card>
  );
}
