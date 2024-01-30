"use client";

import { Booking } from "@/app/models/room";
import { useRouter } from "next/navigation";
import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  bookingDetails: Booking[];
  setRoomId: Dispatch<SetStateAction<string | null>>;
};

const Table: FC<Props> = ({ bookingDetails, setRoomId }) => {
  const router = useRouter();
  return (
    <div className="overflow-x-auto max-w-[340px] rounded-lg mx-auto md:max-w-full shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left to-gray-500">
        <thead className="text-xs text-green-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3">Room name</th>
            <th className="px-6 py-3">Unit price</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Discount</th>
            <th className="px-6 py-3">No. Days Booked</th>
            <th className="px-6 py-3">Days left</th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {bookingDetails.map((booking) => (
            <tr
              key={booking._id}
              className="bg-white border-b hover:bg-gray-50"
            >
              <th
                onClick={() =>
                  router.push(`/rooms/${booking.hotelRoom.slug.current}`)
                }
                className="px-6 underline text-blue-600 cursor-pointer py-4 font-medium whitespace-nowrap"
              >
                {booking.hotelRoom.name}
              </th>
              <td className="px-6 py-4">{booking.hotelRoom.price}</td>
              <td className="px-6 py-4">{booking.totalPrice}</td>
              <td className="px-6 py-4">{booking.discount}</td>
              <td className="px-6 py-4">{booking.numberOfDays}</td>
              <td className="px-6 py-4">0</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => setRoomId(booking.hotelRoom._id)}
                  className="font-medium text-blue-600 hover:underline"
                >
                  Rate room
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
