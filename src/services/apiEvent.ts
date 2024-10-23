import supabase from "./supabase";

export async function getEventsApi() {
  const { data: events, error } = await supabase.from("events").select("*");

  if (error) throw new Error("Error fetching events");

  return events;
}

export async function createEventApi(newEvent: object) {
  const { data, error } = await supabase
    .from("events")
    .insert([{ ...newEvent }])
    .select();

  if (error) throw new Error("Error creating event");

  return data;
}

export async function deleteEventApi(id: number) {
  const { error } = await supabase.from("events").delete().eq("id", id);

  if (error) throw new Error("Error deleting event");
}
