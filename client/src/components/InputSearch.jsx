import React from "react";
import { Input } from "@nextui-org/react";
import {SearchIcon} from "./SearchIcon.jsx";

export default function InputSearch() {
  return (
    <form action="">
        <Input
        onChange={(e)=>{console.log(e.target.value)}}
          type="search"
          variant="bordered"
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
        />
    </form>
  );
}
