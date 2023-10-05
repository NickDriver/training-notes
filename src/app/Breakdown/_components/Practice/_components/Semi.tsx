import CompartmentPractice from "./CompartmentPractice";
import { TruckType } from "./products/ProductLabel";

export default function Semi({ gallons, truck_type }: { gallons: any, truck_type: TruckType }) {
  return (
    <div className="flex flex-col my-2 w-3/4 bg-slate-800 rounded-md">
      <div className="flex justify-center mt-2">SEMI</div>
      <div className="flex flex-row-reverse">
        <CompartmentPractice truck_type={truck_type} comp={1} gallons={gallons} />
        <CompartmentPractice truck_type={truck_type} comp={2} gallons={gallons} />
        <CompartmentPractice truck_type={truck_type} comp={3} gallons={gallons} />
        <CompartmentPractice truck_type={truck_type} comp={4} gallons={gallons} />
      </div>
    </div>
  )
}