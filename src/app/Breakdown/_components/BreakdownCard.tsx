'use client'

import { useState } from "react";
import Gallons from "./Gallons/Gallons";
import Practice from "./Practice/Practice";
import { ProductObject, Products } from "../_data/constants";

export default function BreakdownBox() {
  // State for clear inputs fields
  const [clearChoice, setClearChoice] = useState(false);

  // state for all gallons
  const [gallons, setGallons] = useState<ProductObject[]>([]);

  // Handlers to update state
  function submitHandler(data: ProductObject[]) {
    setClearChoice(false);
    setGallons(data);
  }

  function resetForm(data: ProductObject[]) {
    setGallons(data);
    setClearChoice(true);
  }

  return (
    <div className="flex justify-center m-2">
      <Practice gallons={gallons} clearChoice={clearChoice} />
      <Gallons
        submitHandler={submitHandler}
        resetForm={resetForm}
      />
    </div>
  )
}