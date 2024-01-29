"use client";

import { User } from "@/app/models/user";
import { getUserBooking } from "@/libs/apis";
import axios from "axios";
import useSWR from "swr";

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

  return <div>UserDetails</div>;
};

export default UserDetails;
