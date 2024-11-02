import supabase from "./supabase";

export async function getTicketsApi() {
  const { data: tickets, error } = await supabase.from("tickets").select("*");

  if (error) throw new Error("Error fetching tickets");

  return tickets;
}

export async function createTicketApi(newTicket: object) {
  const { data, error } = await supabase
    .from("tickets")
    .insert([{ ...newTicket }])
    .select();

  if (error) throw new Error("Error creating ticket");

  return data;
}

export async function upadateTicketApi(id: number, updatedTicket: object) {
  const { data, error } = await supabase
    .from("tickets")
    .update({ ...updatedTicket })
    .eq("id", id)
    .select();

  if (error) throw new Error("Error updating ticket");

  return data;
}

export async function deleteTicketApi(id: number) {
  const { error } = await supabase.from("tickets").delete().eq("id", id);

  if (error) throw new Error("Error deleting ticket");
}
