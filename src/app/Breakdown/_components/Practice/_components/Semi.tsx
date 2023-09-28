import CompartmentPractice from "./CompartmentPractice";

export default function Semi({ gallons }: { gallons: any }) {
  return (
    <div className="flex flex-col justify-center my-2 w-3/4 bg-slate-800 rounded-md">
      <div className="flex justify-center mt-2">SEMI</div>
      <div className="flex flex-row-reverse">
        <CompartmentPractice number={1} gallons={gallons} />
        <CompartmentPractice number={2} gallons={gallons} />
        <CompartmentPractice number={3} gallons={gallons} />
        <CompartmentPractice number={4} gallons={gallons} />
      </div>
    </div>
  )
}