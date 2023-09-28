import SemiBox from "./_components/SemiBox";

export default function Practice({ gallons }: { gallons: any }) {
  return (
    <div className="flex flex-col items-center w-full m-2 rounded-md">
      <SemiBox gallons={gallons} />

    </div>
  )
}