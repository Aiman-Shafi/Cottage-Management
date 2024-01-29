import supabase from "./supabase";

export async function getRooms() {
  let { data, error } = await supabase.from("rooms").select("*");

  if (error) {
    console.error("Rooms not found!");
    throw new Error("Rooms could not be loaded");
  }

  return data;
}
