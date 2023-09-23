import { Compartment, Compartment_t, Vendors, TruckType } from "./Compartment";
import { data_shell, data_vernon } from "../_data/data";



export default function Semi() {
  return (
    <div className="flex flex-col items-center">
      <div>SEMI</div>
      <div className="flex justify-center flex-row-reverse m-1 w-96">
        <Compartment compartment_info={data_shell[0]} />
        <Compartment compartment_info={data_shell[1]} />
        <Compartment compartment_info={data_shell[2]} />
        <Compartment compartment_info={data_shell[3]} />
      </div>
      <div className="flex justify-center flex-row-reverse m-1 w-96">
        <Compartment compartment_info={data_vernon[0]} />
        <Compartment compartment_info={data_vernon[1]} />
        <Compartment compartment_info={data_vernon[2]} />
        <Compartment compartment_info={data_vernon[3]} />
      </div>
    </div>
  )
}