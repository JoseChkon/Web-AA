import React from "react";
import { Button } from "@nextui-org/react";
import axios from "axios";

export default function ButtonGoogle() {
  const instance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:3000",
  });

  const requestCall = () => instance.post("/auth/google");
  const navigate = (href) =>{
    window.open('http://localhost:3000/login/access', '_blank')
  }

  return (
    <Button
      onClick={async () => {
  
        navigate()
      }}
    />
  );
}
