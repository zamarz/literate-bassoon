"use client";

import { User } from "@/app/models/user";
import { getUserBooking } from "@/libs/apis";
import axios from "axios";
import Image from "next/image";
import useSWR from "swr";
import LoadingSpinner from "../../loading";
import { FaSignOutAlt } from "react-icons/fa";
import { signOut } from "next-auth/react";

const UserDetails = (props: { params: { id: string } }) => {
  const {
    params: { id: userId },
  } = props;

  const fetchUserBooking = async () => getUserBooking(userId);
  const fetchUserData = async () => {
    const { data } = await axios.get<User>("/api/users");
    return data;
  };

  const {
    data: userBookings,
    error,
    isLoading,
  } = useSWR("/api/userbooking", fetchUserBooking);

  const {
    data: userData,
    isLoading: loadingUserData,
    error: errorUserData,
  } = useSWR("/api/users", fetchUserData);

  if (error || errorUserData) throw new Error("Cannot fetch data");
  if (typeof userBookings === "undefined" && !isLoading) {
    throw new Error("Cannot fetch data");
  }
  if (typeof userData === "undefined" && !loadingUserData) {
    throw new Error("Cannot fetch user data");
  }
  if (loadingUserData) return <LoadingSpinner />;
  if (isLoading) return <LoadingSpinner />;
  if (!userData) throw new Error("Cannot fetch user data");

  return (
    <div className="container mx-auto px-2 md:px-4 py-10">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="hidden md:block md:col-span-4 lg:col-span-3 shadow-lg h-fit sticky top-10 bg-[#eff0f2] text-black rounded-lg px-6 py-4">
          <div className="md:w-[143px] w-38 h-28 md:h-[143px] mx-auto mb-5 rounded-full overflow-hidden">
            <Image
              src={userData.image}
              alt={userData.name}
              width={143}
              height={143}
              className="img scale-animation rounded-full"
            />
          </div>
          <div className="font-normal py-4 text-left">
            <h6 className="text-xl font-bold pb-3">About</h6>
            <p className="text-sm">{userData.about ?? ""}</p>
          </div>
          <div className="font-normal text-left">
            <h6 className="text-xl font-bold pb-3">{userData.name}</h6>
          </div>
          <div className="flex items-center">
            <p className="mr-2">Sign Out</p>
            <FaSignOutAlt
              className="text-3xl cursor-pointer"
              onClick={() => signOut({ callbackUrl: "/" })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
