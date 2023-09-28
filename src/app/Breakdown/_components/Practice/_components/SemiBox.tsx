import Result from "./Result";
import Semi from "./Semi";

export default function SemiBox({ gallons }: { gallons: any }) {
  return (
    <div className="flex justify-center w-full ">
      <Semi gallons={gallons} />
      <Result />
    </div>
  )
}