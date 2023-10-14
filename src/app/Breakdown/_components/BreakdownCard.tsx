'use client'

import { useState } from "react";
import Gallons from "./Gallons/Gallons";
import { ProductObject } from "../_data/constants";
import Trailer from "./Practice/_components/Trailer";
import Actions from "./Practice/_components/Actions";
import { TruckType } from "./Practice/_components/products/ProductLabel";
import { calculatedGallons } from "./calculation";

export default function BreakdownBox() {
  // State for clear inputs fields
  const [clearChoice, setClearChoice] = useState(false);

  // state for all gallons
  const [gallons, setGallons] = useState<ProductObject[]>([]);

  // State for chosen Gallons
  const [chosenProductsGallons, setChosenProductsGallons] = useState<ProductObject[]>([]);

  // State for buttons to chose Truck Type
  const [truckType, setTruckType] = useState(TruckType.SEMI);

  // Handlers to update state
  function submitHandler(data: ProductObject[]) {
    setClearChoice(false);
    setGallons(data);
  }

  function resetForm(data: ProductObject[]) {
    setGallons(data);
    setClearChoice(true);
  }

  // Handler to do math on gallons and send result to Breakdown
  function chosenGallons(data: ProductObject[]) {
    setChosenProductsGallons(calculatedGallons(gallons, data));
  }

  // Handler for TruckType state
  function setTruck(data: TruckType) {
    setTruckType(data);
  }

  return (
    <div className="md:grid md:grid-cols-2 space-y-2 md:space-y-0 md:gap-2 w-full 2xl:flex 2xl:flex-row justify-center p-2">
      <Trailer truckType={truckType} gallons={gallons} backGallons={chosenGallons} clearChoice={clearChoice} />
      <Actions gallons={chosenProductsGallons} truckType={setTruck} />
      <Gallons
        submitHandler={submitHandler}
        resetForm={resetForm}
      />

    </div>
  )
}