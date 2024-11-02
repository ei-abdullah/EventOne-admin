import { TfiPlus } from "react-icons/tfi";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import Loader from "@/components/custom/Loader";

import CreateEditTicketForm from "./CreateEditTicketForm";
import TicketTable from "./TicketTable";
import { useTickets } from "./useTickets";

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

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <span className="flex justify-center items-center">
                <TfiPlus /> <span className="pl-2">Add Ticket</span>
              </span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader className="mb-4 ">
              <DialogTitle className="text-2xl py-1">
                Add a new ticket type
              </DialogTitle>
              <DialogDescription>Enter ticket details</DialogDescription>
            </DialogHeader>

            <CreateEditTicketForm />
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent className="flex justify-center items-center max-h-[20rem] overflow-scroll">
        <TicketTable />
      </CardContent>
    </Card>
  );
}
