import Gallons from "./Gallons/Gallons";
import Practice from "./Practice/Practice";

export default function BreakdownBox() {
  return (
    <div className="flex justify-center m-2 hover:bg-rose-300">
      <Practice />
      <Gallons />
    </div>
  )
}