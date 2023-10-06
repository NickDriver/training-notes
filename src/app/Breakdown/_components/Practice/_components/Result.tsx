import { ProductObject } from "@/app/Breakdown/_data/constants";

export default function Result({ gallons }: { gallons: ProductObject[] }) {
  const message = gallons.map((product) => <div className="" key={gallons.indexOf(product)}>{product.name + " left: " + product.voluem}</div>);
  return (
    <div className="flex justify-center items-center m-2 w-full h-full bg-slate-800 rounded-md ">
      <div className="flex flex-col justify-start m-2 w-full h-full">
        {message}
      </div>
    </div>
  )
}