import { ProductObject } from "@/app/Breakdown/_data/constants";
import Operations from "./Operations";
import Result from "./Result";

export default function Actions({ gallons, truckType }: { gallons: ProductObject[], truckType: any }) {
  return (
    <div className="flex flex-col space-y-2 p-2 w-full 2xl:w-1/4 bg-slate-500 rounded-md ">
      <Result gallons={gallons} />
      <Operations truckType={truckType} />
    </div>
  )
}