import React from "react";
import { Button } from "@nextui-org/react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

export default function ButtonGoogle() {
  const navigate = useNavigate()

  const instance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:3000",
  });

  const reqUser = async () => {
    const res = await instance.get("/auth/user");
    console.log(res)
    if(res){
      navigate("/")
    }
  }

  return (
    <Button
      onClick={async () => {
        let timer = null;
        const googleLoginURL = "http://localhost:3000/login/access";
        const newWindow = window.open(
          googleLoginURL,
          "_blank",
          "width=500,height=600"
        );
    
        if (newWindow) {
          timer = setInterval(() => {
            if (newWindow.closed) {
              console.log("Yay we're authenticated");
              reqUser()
              
              if (timer) clearInterval(timer);
            }
          }, 500);
        }
    
      }}
    />
  );
}
