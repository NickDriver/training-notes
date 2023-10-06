import { ProductObject } from "../../_data/constants";
import Actions from "./_components/Actions";
import Trailer from "./_components/Trailer";
import { TruckType } from "./_components/products/ProductLabel";

export default function Practice({ gallons }: { gallons: ProductObject[] }) {
  // UseState for gallons for subtraction - HERE

  // Function to chose beetwen SEMI, TUB, TWO
  // HERE
  let truck_type = TruckType.SEMI;
  return (
    <div className="flex w-full m-2 rounded-md">
      <Trailer truck_type={truck_type} gallons={gallons} />
      <Actions gallons={gallons} />
    </div>
  )
}