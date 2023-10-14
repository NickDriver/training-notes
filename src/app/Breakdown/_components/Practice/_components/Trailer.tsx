import { ProductObject } from "@/app/Breakdown/_data/constants";
import CompartmentPractice from "./CompartmentPractice";
import { TruckType } from "./products/ProductLabel";
import { useState, useEffect } from "react";

enum TrailerName {
  SEMI = "SEMI",
  TWO_TWO = "TWO AND TWO",
  TUB_THREE = "TUB AND THREE",
}

// Trailer's Name Validation
function trailer_name(truck_type: TruckType) {
  if (truck_type === TruckType.SEMI) {
    return TrailerName.SEMI;
  } else if (truck_type === TruckType.TUB_THREE) {
    return TrailerName.TUB_THREE;
  } else if (truck_type === TruckType.TWO_TWO) {
    return TrailerName.TWO_TWO;
  }
}

// Trailer's MAIN()
export default function Trailer({ gallons, backGallons, truckType, clearChoice }: { gallons: ProductObject[], backGallons: any, truckType: TruckType, clearChoice: boolean }) {
  // Stetes for Compartments
  const [chosenProductCompartmentOne, setChosenProductCompartmentOne] = useState<ProductObject | null>(null);
  const [chosenProductCompartmentTwo, setChosenProductCompartmentTwo] = useState<ProductObject | null>(null);
  const [chosenProductCompartmentThree, setChosenProductCompartmentThree] = useState<ProductObject | null>(null);
  const [chosenProductCompartmentFour, setChosenProductCompartmentFour] = useState<ProductObject | null>(null);
  const chosenGallons: ProductObject[] = [];

  useEffect(() => {
    setChosenProductCompartmentOne(null);
    setChosenProductCompartmentTwo(null);
    setChosenProductCompartmentThree(null);
    setChosenProductCompartmentFour(null);
  }, [clearChoice]);

  // Handlers
  function backGallons_1(data: ProductObject) {
    setChosenProductCompartmentOne(data);
  }
  function backGallons_2(data: ProductObject) {
    setChosenProductCompartmentTwo(data);
  }
  function backGallons_3(data: ProductObject) {
    setChosenProductCompartmentThree(data);
  }
  function backGallons_4(data: ProductObject) {
    setChosenProductCompartmentFour(data);
  }

  // Checkers if !null
  if (chosenProductCompartmentOne) chosenGallons.push(chosenProductCompartmentOne);
  if (chosenProductCompartmentTwo) chosenGallons.push(chosenProductCompartmentTwo);
  if (chosenProductCompartmentThree) chosenGallons.push(chosenProductCompartmentThree);
  if (chosenProductCompartmentFour) chosenGallons.push(chosenProductCompartmentFour);

  // Check button handler
  function checkButtonHandler() {
    backGallons(chosenGallons);
  }

  return (
    <div className="flex flex-col w-3/4 bg-slate-800 rounded-md">
      <div className="flex justify-center">{trailer_name(truckType)}</div>
      <div className="flex flex-row-reverse items-center">
        <CompartmentPractice clearChoice={clearChoice} truck_type={truckType} comp={1} gallons={gallons} backGallonsHandler={backGallons_1} />
        {(truckType === TruckType.TUB_THREE) ? <div className="h-2 w-2/12 bg-orange-300 rounded-lg shadow-md shadow-slate-900"></div> : <p></p>}
        <CompartmentPractice clearChoice={clearChoice} truck_type={truckType} comp={2} gallons={gallons} backGallonsHandler={backGallons_2} />
        {(truckType === TruckType.TWO_TWO) ? <div className="h-2 w-2/12 bg-orange-300 rounded-lg shadow-md shadow-slate-900"></div> : <p></p>}
        <CompartmentPractice clearChoice={clearChoice} truck_type={truckType} comp={3} gallons={gallons} backGallonsHandler={backGallons_3} />
        <CompartmentPractice clearChoice={clearChoice} truck_type={truckType} comp={4} gallons={gallons} backGallonsHandler={backGallons_4} />
      </div>
      <div className="flex justify-center w-full">
        <button onClick={checkButtonHandler} className="flex justify-center p-1 w-full pointer-events-auto bg-sky-800 hover:bg-sky-900 rounded-md border border-blue-950">Check</button>
      </div>
    </div>
  )
}