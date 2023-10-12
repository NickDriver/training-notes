import { useState } from "react";
import { ProductObject, Products } from "../../_data/constants";
import Actions from "./_components/Actions";
import Trailer from "./_components/Trailer";
import { TruckType } from "./_components/products/ProductLabel";
import { calculatedGallons } from "../calculation";

export default function Practice({ gallons }: { gallons: ProductObject[] }) {
  // State for chosen Gallons
  const [chosenProductsGallons, setChosenProductsGallons] = useState<ProductObject[]>([]);

  // State for buttons to chose Truck Type
  const [truckType, setTruckType] = useState(TruckType.SEMI);

  // Handler to do math on gallons and send result to Breakdown
  function chosenGallons(data: ProductObject[]) {
    setChosenProductsGallons(calculatedGallons(gallons, data));
  }

  // Handler for TruckType state
  function setTruck(data: TruckType) {
    setTruckType(data);
  }

  return (
    <div className="flex w-full m-2 rounded-md">
      <Trailer truckType={truckType} gallons={gallons} backGallons={chosenGallons} />
      <Actions gallons={chosenProductsGallons} truckType={setTruck} />
    </div>
  )
}