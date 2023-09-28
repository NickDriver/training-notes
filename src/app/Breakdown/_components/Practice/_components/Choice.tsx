enum Color {
  REG = " bg-slate-400",
  MID = " bg-blue-600",
  PRM = " bg-red-600",
  DSL = " bg-green-600",
  E85 = " bg-yellow-500",
  ETH = " bg-sky-600",
}

const REG = <div className={"flex w-full justify-center p-2 " + Color.REG} key={"01"}>
  <input className="placeholder:text-center w-3/4" placeholder="87" />
</div>;

const MID = <div className={"flex w-full justify-center p-2 " + Color.MID} key={"02"}>
  <input className="placeholder:text-center w-3/4" placeholder="89" />
</div>;

const PRM = <div className={"flex w-full justify-center p-2 " + Color.PRM} key={"03"}>
  <input className="placeholder:text-center w-3/4" placeholder="91" />
</div>;

const DSL = <div className={"flex w-full justify-center p-2 " + Color.DSL} key={"04"}>
  <input className="placeholder:text-center w-3/4" placeholder="DIESEL" />
</div>;

const E85 = <div className={"flex w-full justify-center p-2 " + Color.E85} key={"05"}>
  <input className="placeholder:text-center w-3/4" placeholder="E85" />
</div>;

const ETH = <div className={"flex w-full justify-center p-2 " + Color.ETH} key={"06"}>
  <input className="placeholder:text-center w-3/4" placeholder="ETHANOL" />
</div>;

function ProductsProvided({ gallons }: { gallons: any }) {

  const my_array = Object.keys(gallons);
  const show = my_array.map((product) => {
    if (product === "regular") {
      return REG;
    }
    if (product === "midgrade") {
      return MID;
    }
    if (product === "premium") {
      return PRM;
    }
    if (product === "e85") {
      return E85;
    }
    if (product === "diesel") {
      return DSL;
    }
    if (product === "ethsnol") {
      return ETH;
    }
  });
  return (
    <>
      {show}
    </>
  )
}

export default function Choice({ gallons }: { gallons: any }) {
  return (
    <div className="flex flex-col items-center w-full rounded-md">
      <ProductsProvided gallons={gallons} />
    </div>

  )
}