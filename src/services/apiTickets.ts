import supabase from "./supabase";

export async function getTicketsApi() {
  const { data: tickets, error } = await supabase.from("tickets").select("*");

  if (error) throw new Error("Error fetching tickets");

  return tickets;
}
