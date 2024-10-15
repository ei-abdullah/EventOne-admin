import { TfiPlus } from "react-icons/tfi";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import EventTable from "./EventTable";

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
        <Button>
          <TfiPlus /> <span className="pl-2">Create Event</span>
        </Button>
      </CardHeader>

      <CardContent>
        <EventTable />
      </CardContent>
    </Card>
  );
}
