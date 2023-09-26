import { data_shell, data_vernon } from "../_data/data_two_and_two"
import { Compartment } from "./Compartment"

export default function TwoAndTwo() {
  return (
    <div className="flex flex-col items-center hover:bg-rose-400 mt-2 mb-4">
      <div>TWO AND TWO</div>
      <div className="flex justify-center flex-row-reverse w-96">
        <Compartment compartment_info={data_shell[0]} />
        <Compartment compartment_info={data_shell[1]} />
        <Compartment compartment_info={data_shell[2]} />
        <Compartment compartment_info={data_shell[3]} />
      </div>
      <div className="flex justify-center flex-row-reverse w-96">
        <Compartment compartment_info={data_vernon[0]} />
        <Compartment compartment_info={data_vernon[1]} />
        <Compartment compartment_info={data_vernon[2]} />
        <Compartment compartment_info={data_vernon[3]} />
      </div>
    </div>
  )
}