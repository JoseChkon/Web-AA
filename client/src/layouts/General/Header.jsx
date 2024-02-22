import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useUser } from "../../context/providers/UserProvider";
import { logoutRequest } from "../../api/user";

export default function Header() {
  const { isAuthenticate, setIsAuthenticate } = useUser();

  const handleClick = () =>{
    setIsAuthenticate(false)
    logoutRequest()
  }

  return (
    <Navbar className="bg-pink-200">
      <NavbarBrand>
        <Link className="font-bold text-inherit text-brown-100" href="/">
          LOGO
        </Link>
      </NavbarBrand>
      <NavbarContent className=" sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-brown-300" color="foreground" href="/products">
            Products
          </Link>
        </NavbarItem>
      </NavbarContent>
      {isAuthenticate ? (
        <NavbarContent justify="end">
          <NavbarItem className="lg:flex">
            <Button color="danger" onClick={handleClick}>Logout</Button>
          </NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent justify="end">
          <NavbarItem className="lg:flex">
            <Link className="text-brown-300" href="/login">
              Login
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              className="bg-pink-400 text-brown-300"
              href="/register"
              variant="flat"
            >
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}
    </Navbar>
  );
}
