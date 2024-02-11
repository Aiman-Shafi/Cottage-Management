import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getRooms } from "../../api/apiRooms";
import CreateRooms from "./CreateRooms";
import TableRow from "./TableRow";

export default function RoomTable() {
  //   const x = useQuery({
  //     queryKey: ["rooms"],
  //     queryFn: getRooms,
  //   });

  //   console.log(x);

  const {
    isLoading,
    data: rooms,
    error,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  if (isLoading) return <div>Loading.....</div>;

  return (
    <>
      <table
        className="w-full text-left border border-separate rounded border-slate-200"
        cellspacing="0"
      >
        <tbody>
          <tr>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            ></th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Room
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Capacity
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Cost / Price
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Discount
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            ></th>
          </tr>
          {rooms.map((room) => (
            <TableRow key={room.id} room={room} />
          ))}
        </tbody>
      </table>
      <div className="mt-20">
        <CreateRooms />
      </div>
    </>
  );
}
