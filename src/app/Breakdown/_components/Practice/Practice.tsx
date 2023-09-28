import Actions from "./_components/Actions";
import Semi from "./_components/Semi";

export default function Practice({ gallons }: { gallons: any }) {
  // UseState for gallons for subtraction - HERE
  return (
    <div className="flex w-full m-2 rounded-md">
      <Semi gallons={gallons} />
      <Actions gallons={gallons} />
    </div>
  )
}