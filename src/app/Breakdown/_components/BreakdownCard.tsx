'use client'

import { useState } from "react";
import Gallons from "./Gallons/Gallons";
import Practice from "./Practice/Practice";
import { ProductObject, Products } from "../_data/constants";

export default function BreakdownBox() {
  // state for all gallons
  const [gallons, setGallons] = useState<ProductObject[]>([]);

  function submitHandler(data: ProductObject[]) {
    setGallons(data);
  }
  console.log(gallons);
  return (
    <div className="flex justify-center m-2">
      <Practice gallons={gallons} />
      <Gallons
        submitHandler={submitHandler}
      />
    </div>
  )
}