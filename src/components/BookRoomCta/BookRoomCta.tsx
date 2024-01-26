"use client";

import { FC } from "react";

type Props = {
  price: number;
  discount: number;
};

const BookRoomCta: FC<Props> = (props) => {
  const { price, discount } = props;

  const discountPrice = (price / 100) * discount;

  return (
    <div className="px-7 py-6">
      <h3></h3>
      <span className={`${discount ? "text-gray-400" : ""} font-bold text-xl`}>
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
    </div>
  );
};

export default BookRoomCta;
