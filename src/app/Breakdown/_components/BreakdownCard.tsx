'use client'

import { useState } from "react";
import Gallons from "./Gallons/Gallons";
import Practice from "./Practice/Practice";

export default function BreakdownBox() {
  const [gallons, setGallons] = useState({});

  function gallonsInputHandler(data: any) {
    setGallons(data);
  }
  // Create new Object with no 0

  return (
    <div className="flex justify-center m-2">
      <Practice gallons={gallons} />
      <Gallons onGallonsInput={gallonsInputHandler} />
    </div>
  )
}