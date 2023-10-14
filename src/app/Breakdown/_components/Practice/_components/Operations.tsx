import { TruckType } from "./products/ProductLabel";

export default function Operations({ truckType }: { truckType: any }) {
  return (
    <div className="flex flex-col justify-center items-center p-2 w-full h-full bg-slate-800 text-slate-800 font-bold rounded-md ">
      <button
        className="flex justify-center p-1 w-full bg-slate-500 hover:bg-slate-600 rounded-md"
        onClick={() => truckType(TruckType.SEMI)}>SEMI</button>
      <button
        className="flex justify-center p-1 w-full bg-slate-500 hover:bg-slate-600 rounded-md"
        onClick={() => truckType(TruckType.TUB_THREE)}>TUB AND THREE</button>
      <button
        className="flex justify-center p-1 w-full bg-slate-500 hover:bg-slate-600 rounded-md"
        onClick={() => truckType(TruckType.TWO_TWO)}>TWO AND TWO</button>
    </div>
  )
}