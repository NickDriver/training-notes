import { ProductObject } from "@/app/Breakdown/_data/constants";
import Choice from "./Choice";
import { ProductLabel, TruckType, CompartmentNumber, Product } from "./products/ProductLabel";

export default function CompartmentPractice(
  { comp, gallons, truck_type, backGallonsHandler, clearChoice }:
    { comp: CompartmentNumber, gallons: ProductObject[], truck_type: TruckType, backGallonsHandler: any, clearChoice: boolean }) {

  // Handler to move state from Choice up to Trailer
  function chosenProductHandler(data: ProductObject) {
    backGallonsHandler(data);
  }

  return (
    <div className="flex flex-col grow items-center space-y-1 p-2 w-full md:w-20 bg-slate-500 text-slate-900 rounded-md">
      <div className="font-bold">{comp.toString()}</div>
      <ProductLabel comp={comp} truck_type={truck_type} product={Product.GAS} />
      <ProductLabel comp={comp} truck_type={truck_type} product={Product.DSL} />
      <ProductLabel comp={comp} truck_type={truck_type} product={Product.ETH} />
      <Choice clearChoice={clearChoice} gallons={gallons} chosenProductHandler={chosenProductHandler} />
    </div>
  )
}