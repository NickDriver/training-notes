import Choice from "./Choice";
import { ProductLabel, TruckType, CompartmentNumber, Product } from "./products/ProductLabel";

let comp: CompartmentNumber;
export default function CompartmentPractice({ comp, gallons }: { comp: CompartmentNumber, gallons: any }) {
  // Function to chose beetwen SEMI, TUB, TWO
  // HERE
  let truck_type = TruckType.SEMI;

  return (
    <div className="flex flex-col items-center w-full m-2 p-1 bg-slate-500 text-slate-900 rounded-md hover:bg-red-300">
      <div className="font-bold">{comp.toString()}</div>
      <ProductLabel comp={comp} truck_type={truck_type} product={Product.GAS} />
      <ProductLabel comp={comp} truck_type={truck_type} product={Product.DSL} />
      <ProductLabel comp={comp} truck_type={truck_type} product={Product.ETH} />
      <Choice gallons={gallons} />
    </div>
  )
}