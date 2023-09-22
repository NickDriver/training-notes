import Compartment from "./Compartment";

enum Vendors {
  SHELL = "Shell",
  VERNON = "Vernon",
}

enum TruckType {
  SEMI,
  TwoAndTwo,
  TubAndThree,
}

export interface Compartment {
  compartment: Number;
  size: Number;
  vendor: Vendors;
}
const comp_1: Compartment = {
  compartment: 1,
  size: 3500,
  vendor: Vendors.SHELL,
}
const comp_2: Compartment = {
  compartment: 2,
  size: 1700,
  vendor: Vendors.SHELL,
}
const comp_3: Compartment = {
  compartment: 3,
  size: 1000,
  vendor: Vendors.SHELL,
}
const comp_4: Compartment = {
  compartment: 4,
  size: 2000,
  vendor: Vendors.SHELL,
}
const ver_1: Compartment = {
  compartment: 1,
  size: 3500,
  vendor: Vendors.VERNON,
}
const ver_2: Compartment = {
  compartment: 2,
  size: 1700,
  vendor: Vendors.VERNON,
}
const ver_3: Compartment = {
  compartment: 3,
  size: 1000,
  vendor: Vendors.VERNON,
}
const ver_4: Compartment = {
  compartment: 4,
  size: 2000,
  vendor: Vendors.VERNON,
}

export default function Semi({ children }: any) {
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