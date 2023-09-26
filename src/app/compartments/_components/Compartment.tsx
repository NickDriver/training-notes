const w_num: string = "w-3/4 ";

export enum Vendors {
  SHELL = "Shell",
  VERNON = "Vernon",
}

export enum VendorColor {
  SHELL = " bg-yellow-400 ",
  VERNON = " bg-sky-400 ",
}

export enum TruckType {
  SEMI,
  TwoAndTwo,
  TubAndThree,
}

export interface Compartment_t {
  compartment: Number;
  size: Number;
  vendor: Vendors;
  truck_type: TruckType;
  comp_code: Number;
  vendor_color: String;
}

export function Compartment({ compartment_info: { vendor, compartment, comp_code, vendor_color } }: any) {
  return (
    <div className={w_num + 'm-1 p-1 bg-slate-500 text-slate-900 rounded-md shadow-md shadow-slate-800'}>
      <div className="flex justify-center items-center font-bold">{compartment}</div>
      <div className={"flex flex-col items-center p-1 text-sm font-normal rounded-md" + vendor_color}>
        <p className="underline">{vendor}</p>
        <p className="">{"code: " + comp_code}</p>
      </div>
    </div>
  )
}