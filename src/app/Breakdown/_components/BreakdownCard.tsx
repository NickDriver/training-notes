'use client'

import { useState } from "react";
import Gallons from "./Gallons/Gallons";
import Practice from "./Practice/Practice";

export default function BreakdownBox() {
  const [gallons, setGallons] = useState({});

  function gallonsInputHandler(data: any) {
    setGallons(data);
  }
  // Temporary:
  console.log(gallons);

  return (
    <div className="flex justify-center m-2 hover:bg-rose-300">
      <Practice />
      <Gallons onGallonsInput={gallonsInputHandler} />
    </div>
  )
}