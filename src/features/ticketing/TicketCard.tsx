import { Card, CardContent, CardHeader } from "@/components/ui/card";

import TicketDialog from "./TicketDialog";
import TicketTable from "./TicketTable";
import { useTickets } from "./useTickets";
import Loader from "@/components/custom/Loader";

export default function TicketCard() {
  const { isLoading } = useTickets();

  if (isLoading) return <Loader />;
  
  return (
    <Card className="w-1/2 max-h-[50%] bg-white shadow-none p-4">
      <CardHeader className="flex flex-row justify-between items-center">
        <div>
          <div className="text-2xl font-bold">Ticketing & Registration</div>
          <div className="text-gray-500">
            Manage tickets and view registrations.
          </div>
        </div>

        <TicketDialog />
      </CardHeader>

      <CardContent className="flex justify-center items-center max-h-[20rem] overflow-scroll">
        <TicketTable />
      </CardContent>
    </Card>
  );
}
