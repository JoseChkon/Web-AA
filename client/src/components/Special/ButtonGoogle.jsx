import React from "react";
import { Button } from "@nextui-org/react";
import Google from "./Google";

export default function ButtonGoogle() {
  function navigate(url) {
    window.location.href = url;
  }

  return (
    <Button
      className="w-full bg-white rounded-md text-sm font-semibold text-gray-400 shadow-sm hover:bg-gray-100 hover:text-gray-500 "
      onClick={async () => {
        let timer = null;
        const googleLoginURL = "http://localhost:3000/auth/google";
        const newWindow = window.open(
          googleLoginURL,
          "_blank",
          "width=500,height=600"
        );

        if (newWindow) {
          timer = setInterval(async () => {
            if (newWindow.closed) {
              navigate("/"); 
              if (timer) clearInterval(timer);
            }
          }, 500);
        }
      }}
    >
      <Google />
      <p>Continuar con google</p>
    </Button>
  );
}
