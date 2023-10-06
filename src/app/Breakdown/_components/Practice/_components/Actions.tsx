import { ProductObject } from "@/app/Breakdown/_data/constants";
import Operations from "./Operations";
import Result from "./Result";

export default function Actions({ gallons }: { gallons: ProductObject[] }) {
  return (
    <div className="flex flex-col items-center m-2 p-2 w-1/4 bg-slate-500 rounded-md ">
      <Result gallons={gallons} />
      <Operations />
    </div>
  )
}