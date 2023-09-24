import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import getCurrentUser from "../actions/getCurrentUser";

const UserPage = async () => {
  const data = await getCurrentUser();
  // console.log("SERVER SESSION (USERDATA)", data);

  return <div>UserPage</div>;
};

export default UserPage;
