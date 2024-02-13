import React from "react";
import Divider from "../../components/Divider";
import { Link } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="bg-brown-300 ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-xl font-semibold text-pink-300">
                Resources
              </h2>
              <ul className=" font-medium">
                <li className="mb-4">
                  <Link href="#" size="sm" className="text-pink-300">Default Link</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xl font-semibold text-pink-300">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <Link href="#" size="sm" className="text-pink-300">Instagram</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Divider />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 Jose Chacon
          </span>
        </div>
      </div>
    </footer>
  );
}
