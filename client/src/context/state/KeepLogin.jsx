import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useUser } from "../../context/providers/UserProvider";
import GetUser from "../hooks/GetUser";
import { useState } from "react";
import { CircularProgress } from "@nextui-org/react";

export default function KeepLogin({ children }) {
  const { isAuthenticate } = useUser();
  const [loading, setLoading] = useState(true);

  const getUser = GetUser();

  useEffect(() => {
    const authenticate = async () => {
      try {
        const a = await getUser();
        console.log(a);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    !isAuthenticate ? authenticate() : setLoading(false);
  }, [loading]);

  return loading ? (
    <div className="flex justify-center items-center h-screen">
      <CircularProgress />
    </div>
  ) : (
    <Outlet />
  );
}
