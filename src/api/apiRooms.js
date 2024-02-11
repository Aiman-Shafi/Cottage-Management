import supabase from "./supabase";

export async function getRooms() {
  let { data, error } = await supabase.from("rooms").select("*");

  if (error) {
    console.error("Rooms not found!");
    throw new Error("Rooms could not be loaded");
  }

  return data;
}

export async function deleteRooms(id) {
  const { data, error } = await supabase.from("rooms").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Rooms could not be Deleted");
  }

  return data;
}

export async function createRoom(newRoom) {
  const { data, error } = await supabase
    .from("rooms")
    .insert([newRoom])
    .select();
  if (error) {
    console.error(error);
    throw new Error("Rooms could not be Deleted");
  }
  return data;
}
