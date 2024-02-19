import React from "react";
import { useUser } from "../providers/UserProvider";
import { userRequest } from "../../api/user";

export default function GetUser() {
  const { setIsAuthenticate } = useUser();

  const reqUser = async () => {
    const res = await userRequest();
    setIsAuthenticate(true);

    return res
  };

  return reqUser;
}
