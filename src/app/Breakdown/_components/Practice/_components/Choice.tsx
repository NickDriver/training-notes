

enum Color {
  REG = " bg-slate-400",
  MID = " bg-blue-600",
  PRM = " bg-red-600",
  DSL = " bg-green-600",
  E85 = " bg-yellow-500",
  ETH = " bg-sky-600",
}

function ProductsProvided({ gallons }: { gallons: any }) {
  const count: Number = Object.keys(gallons).length;

  // const result_gallons = Object.assign(gallons);
  // Object.entries(result_gallons).forEach(([k, v]) => {
  //   if (v === 0) delete result_gallons[k];
  // });
  return (
    <div>{count.toString()}</div>
  )
}

export default function Choice({ gallons }: { gallons: any }) {
  return (
    <div className="flex flex-col items-center w-full">
      <ProductsProvided gallons={gallons} />
    </div>

  )
}