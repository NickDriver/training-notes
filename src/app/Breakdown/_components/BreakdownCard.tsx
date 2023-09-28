'use client'

import { useState } from "react";
import Gallons from "./Gallons/Gallons";
import Practice from "./Practice/Practice";

export default function BreakdownBox() {
  const [gallons, setGallons] = useState({});

  const filtered_gallons = Object.assign(gallons);
  Object.entries(filtered_gallons).forEach(([k, v]) => {
    if (v === 0) delete filtered_gallons[k];
  });

  function gallonsInputHandler(data: any) {
    setGallons(data);
  }
  // Create new Object with no 0

  return (
    <div className="flex justify-center m-2">
      <Practice gallons={filtered_gallons} />
      <Gallons onGallonsInput={gallonsInputHandler} />
    </div>
  )
}