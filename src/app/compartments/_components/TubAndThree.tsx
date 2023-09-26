import { data_shell, data_vernon } from "../_data/data_tub_and_three"
import { Compartment } from "./Compartment"

export default function TubAndThree() {
  return (
    <div className="flex flex-col items-center mt-2 mb-4">
      <div>TUB AND THREE</div>
      <div className="flex justify-center flex-row-reverse items-center w-2/4">
        <Compartment compartment_info={data_shell[0]} />
        <div className="box-content h-2 w-2/12 m-2 bg-orange-300 rounded-lg shadow-md shadow-slate-900 "></div>
        <Compartment compartment_info={data_shell[1]} />
        <Compartment compartment_info={data_shell[2]} />
        <Compartment compartment_info={data_shell[3]} />
      </div>
      <div className="flex justify-center flex-row-reverse items-center w-2/4">
        <Compartment compartment_info={data_vernon[0]} />
        <div className="box-content h-2 w-2/12 m-2 bg-orange-300 rounded-lg shadow-md shadow-slate-900 "></div>
        <Compartment compartment_info={data_vernon[1]} />
        <Compartment compartment_info={data_vernon[2]} />
        <Compartment compartment_info={data_vernon[3]} />
      </div>
    </div>
  )
}