import { ProductObject } from "@/app/Breakdown/_data/constants";

export default function Result({ gallons }: { gallons: ProductObject[] }) {
  const message = gallons.map((product) => <div className="" key={gallons.indexOf(product)}>{product.name + " left: " + product.voluem}</div>);
  return (
    <div className="flex justify-center items-center w-full h-full bg-slate-800 rounded-md ">
      <div className="flex flex-col justify-start w-full h-full p-1">
        {message}
      </div>
    </div>
  )
}