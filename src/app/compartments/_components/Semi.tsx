import { Compartment, Compartment_t, Vendors, TruckType } from "./Compartment";


const comp_1: Compartment_t = {
  compartment: 1,
  size: 3500,
  vendor: Vendors.SHELL,
  truck_type: TruckType.SEMI,
}
const comp_2: Compartment_t = {
  compartment: 2,
  size: 1700,
  vendor: Vendors.SHELL,
  truck_type: TruckType.SEMI,
}
const comp_3: Compartment_t = {
  compartment: 3,
  size: 1000,
  vendor: Vendors.SHELL,
  truck_type: TruckType.SEMI,
}
const comp_4: Compartment_t = {
  compartment: 4,
  size: 2000,
  vendor: Vendors.SHELL,
  truck_type: TruckType.SEMI,
}
const ver_1: Compartment_t = {
  compartment: 1,
  size: 3500,
  vendor: Vendors.VERNON,
  truck_type: TruckType.SEMI,
}
const ver_2: Compartment_t = {
  compartment: 2,
  size: 1700,
  vendor: Vendors.VERNON,
  truck_type: TruckType.SEMI,
}
const ver_3: Compartment_t = {
  compartment: 3,
  size: 1000,
  vendor: Vendors.VERNON,
  truck_type: TruckType.SEMI,
}
const ver_4: Compartment_t = {
  compartment: 4,
  size: 2000,
  vendor: Vendors.VERNON,
  truck_type: TruckType.SEMI,
}

export default function Semi() {
  return (
    <div className="flex flex-col items-center">
      <div>SEMI</div>
      <div className="flex justify-center flex-row-reverse m-1 w-96">
        <Compartment compartment_info={comp_1} />
        <Compartment compartment_info={comp_2} />
        <Compartment compartment_info={comp_3} />
        <Compartment compartment_info={comp_4} />
      </div>
      <div className="flex justify-center flex-row-reverse m-1 w-96">
        <Compartment compartment_info={ver_1} />
        <Compartment compartment_info={ver_2} />
        <Compartment compartment_info={ver_3} />
        <Compartment compartment_info={ver_4} />
      </div>
    </div>
  )
}