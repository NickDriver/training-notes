import { useState } from "react";
import { ProductObject, Products } from "../../_data/constants";
import Actions from "./_components/Actions";
import Trailer from "./_components/Trailer";
import { TruckType } from "./_components/products/ProductLabel";
import { calculatedGallons } from "../calculation";

export default function Practice({ gallons }: { gallons: ProductObject[] }) {
  // State for chosen Gallons
  const [chosenProductsGallons, setChosenProductsGallons] = useState<ProductObject[]>([]);

  // Handler to do math on gallons and send result to Breakdown
  function chosenGallons(data: ProductObject[]) {
    setChosenProductsGallons(calculatedGallons(gallons, data));
  }

  return (
    <div className="flex w-full m-2 rounded-md hover:bg-rose-500">
      <Trailer gallons={gallons} backGallons={chosenGallons} />
      <Actions gallons={chosenProductsGallons} />
    </div>
  )
}