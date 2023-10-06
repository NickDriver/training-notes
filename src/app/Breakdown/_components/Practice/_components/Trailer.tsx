import { ProductObject } from "@/app/Breakdown/_data/constants";
import CompartmentPractice from "./CompartmentPractice";
import { TruckType } from "./products/ProductLabel";

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
export default function Trailer({ gallons, truck_type }: { gallons: ProductObject[], truck_type: TruckType }) {
  return (
    <div className="flex flex-col my-2 w-3/4 bg-slate-800 rounded-md">
      <div className="flex justify-center mt-2">{trailer_name(truck_type)}</div>
      <div className="flex flex-row-reverse">
        <CompartmentPractice truck_type={truck_type} comp={1} gallons={gallons} />
        <CompartmentPractice truck_type={truck_type} comp={2} gallons={gallons} />
        <CompartmentPractice truck_type={truck_type} comp={3} gallons={gallons} />
        <CompartmentPractice truck_type={truck_type} comp={4} gallons={gallons} />
      </div>
    </div>
  )
}