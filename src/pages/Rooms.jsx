import { useEffect } from "react";
import { getRooms } from "../api/apiRooms";
import RoomTable from "../features/Rooms/RoomTable";

export default function Rooms() {
  // useEffect(() => {
  //   getRooms().then((data) => console.log(data));
  // }, []);

  return (
    <div>
      <RoomTable />
    </div>
  );
}
