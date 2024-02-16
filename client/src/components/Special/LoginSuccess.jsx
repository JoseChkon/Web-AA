import { useEffect } from "react";

export function LoginSuccess() {
    useEffect(() => {
        window.close();
    }, []);
  
    return <div>Thanks for loggin in!</div>;
  }