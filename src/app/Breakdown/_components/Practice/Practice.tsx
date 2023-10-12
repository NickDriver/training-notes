import { useState } from "react";
import { ProductObject, Products } from "../../_data/constants";
import Actions from "./_components/Actions";
import Trailer from "./_components/Trailer";
import { TruckType } from "./_components/products/ProductLabel";
import { calculatedGallons } from "../calculation";

export default function Practice({ gallons }: { gallons: ProductObject[] }) {
  // UseState for gallons for subtraction - HERE
  const [chosenProductsGallons, setChosenProductsGallons] = useState<ProductObject[]>([]);
  function chosenGallons(data: ProductObject[]) {
    setChosenProductsGallons(calculatedGallons(gallons, data));

    /// SWAP gallons to updated gallons and send to <Actions /> HERE!!!!!
  }

  // Function to chose beetwen SEMI, TUB, TWO
  // HERE
  let truck_type = TruckType.SEMI;
  return (
    <div className="flex w-full m-2 rounded-md">
      <Trailer truck_type={truck_type} gallons={gallons} backGallons={chosenGallons} />
      <Actions gallons={chosenProductsGallons} />
    </div>
  )
}