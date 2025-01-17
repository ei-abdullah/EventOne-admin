import { Card, CardContent, CardHeader } from "@/components/ui/card";

import EventTable from "./EventTable";
import { EventDialog } from "./EventDialog";
import { useEvents } from "./useEvents";
import Loader from "@/components/custom/Loader";

export default function EventCard() {
  // TODO Add Error check const {error} = useEvents();
  const { isLoading } = useEvents();

  if (isLoading) return <Loader />;

  return (
    <Card className="w-3/4 max-h-[50%] bg-white shadow-none p-4">
      <CardHeader className="flex flex-row justify-between items-center">
        <div>
          <div className="text-2xl font-bold">Event Management</div>
          <div className="text-gray-500">
            Create and manage your events here.
          </div>
        </div>

        <EventDialog />
      </CardHeader>

      <CardContent className="flex justify-center items-center max-h-[20rem] overflow-scroll">
        <EventTable />
      </CardContent>
    </Card>
  );
}
