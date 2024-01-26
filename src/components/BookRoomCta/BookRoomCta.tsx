"use client";

import { Dispatch, FC, SetStateAction } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  checkInDate: Date | null;
  setCheckInDate: Dispatch<SetStateAction<Date | null>>;
  checkOutDate: Date | null;
  setCheckOutDate: Dispatch<SetStateAction<Date | null>>;
  price: number;
  discount: number;
  specialNote: string;
  calcMinCheckoutDate: () => Date | null;
  adults: number;
  setAdults: Dispatch<SetStateAction<number>>;
  children: number;
  setChildren: Dispatch<SetStateAction<number>>;
};

const BookRoomCta: FC<Props> = (props) => {
  const {
    price,
    discount,
    specialNote,
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    calcMinCheckoutDate,
    adults,
    children,
    setAdults,
    setChildren,
  } = props;

  const discountPrice = price - (price / 100) * discount;

  return (
    <div className="px-7 py-6">
      <h3>
        <span
          className={`${discount ? "text-gray-400" : ""} font-bold text-xl`}
        >
          ${price}
        </span>
        {discount ? (
          <span className="font-bold text-xl">
            {" "}
            | discount {discount}%. Now{" "}
            <span className="text-tertiary-dark">${discountPrice}</span>
          </span>
        ) : (
          ""
        )}
      </h3>
      <div className="w-full border-b-2 border-b-secondary my-2" />

      <h4 className="my-8"> {specialNote}</h4>
      <div className="flex">
        <div className="w-50% pr-2">
          <label
            htmlFor="check-in-date"
            className="block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Check In date
          </label>
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            id="check-in-date"
            className="w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary"
          />
        </div>
        <div className="w-50% pl-2">
          <label
            htmlFor="check-out-date"
            className="block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Check Out date
          </label>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            dateFormat="dd/MM/yyyy"
            disabled={!checkInDate}
            minDate={calcMinCheckoutDate()}
            id="check-out-date"
            className="w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary"
          />
        </div>
      </div>

      <div className="flex mt-4">
        <div className="w-50% pr-2">
          <label
            htmlFor="adults"
            className="block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Adults
          </label>
          <input
            type="number"
            id="adults"
            value={adults}
            onChange={(e) => setAdults(+e.target.value)}
            min={1}
            max={5}
            className="w-full border border-gray-300 rounded-lg p-2.5"
          />
        </div>
        <div className="w-50% pl-2">
          <label
            htmlFor="children"
            className="block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Children
          </label>
          <input
            type="number"
            id="children"
            value={children}
            onChange={(e) => setChildren(+e.target.value)}
            min={0}
            max={3}
            className="w-full border border-gray-300 rounded-lg p-2.5"
          />
        </div>
      </div>
    </div>
  );
};

export default BookRoomCta;
