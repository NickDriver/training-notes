import { useState } from "react";
import { ProductObject } from "../../_data/constants";
import Actions from "./_components/Actions";
import Trailer from "./_components/Trailer";
import { TruckType } from "./_components/products/ProductLabel";
import { calculatedGallons } from "../calculation";

export default function Practice({ gallons, clearChoice }: { gallons: ProductObject[], clearChoice: boolean }) {
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
    <div className="flex space-x-2 w-full rounded-md">
      <Trailer truckType={truckType} gallons={gallons} backGallons={chosenGallons} clearChoice={clearChoice} />
      <Actions gallons={chosenProductsGallons} truckType={setTruck} />
    </div>
  )
}