import { ProductObject, Products } from "@/app/Breakdown/_data/constants";

enum Color {
  REG = " bg-slate-400",
  MID = " bg-blue-600",
  PRM = " bg-red-600",
  DSL = " bg-green-600",
  E85 = " bg-yellow-500",
  ETH = " bg-sky-600",
}

function ProductsProvided({ gallons, chosenProductHandler }: { gallons: ProductObject[], chosenProductHandler: any }) {

  // Handler to lift state up: ProductsProvided => Choice
  function productHandler(data: ProductObject) {
    chosenProductHandler(data);
  }

  const show = gallons.map((product) => {
    if (product.name === Products.regular) {
      return <div className={"flex w-full justify-center p-2 " + Color.REG} key={"01"}>
        <input className="placeholder:text-center w-3/4 pl-1" placeholder="87" type="number"
          onChange={(event: any) => { productHandler({ name: Products.regular, voluem: Number(event.target.value) }) }} />
      </div>;
    }
    if (product.name === Products.midgrade) {
      return <div className={"flex w-full justify-center p-2 " + Color.MID} key={"02"}>
        <input className="placeholder:text-center w-3/4 pl-1" placeholder="89" type="number" min={0} max={4000}
          onChange={(event: any) => { productHandler({ name: Products.midgrade, voluem: Number(event.target.value) }) }} />
      </div>;
    }
    if (product.name === Products.premium) {
      return <div className={"flex w-full justify-center p-2 " + Color.PRM} key={"03"}>
        <input className="placeholder:text-center w-3/4 pl-1" placeholder="91" type="number" min={0} max={4000}
          onChange={(event: any) => { productHandler({ name: Products.premium, voluem: Number(event.target.value) }) }} />
      </div>;
    }
    if (product.name === Products.e85) {
      return <div className={"flex w-full justify-center p-2 " + Color.E85} key={"05"}>
        <input className="placeholder:text-center w-3/4 pl-1" placeholder="E85" type="number" min={0} max={4000}
          onChange={(event: any) => { productHandler({ name: Products.e85, voluem: Number(event.target.value) }) }} />
      </div>;
    }
    if (product.name === Products.diesel) {
      return <div className={"flex w-full justify-center p-2 " + Color.DSL} key={"04"}>
        <input className="placeholder:text-center w-3/4 pl-1" placeholder="DIESEL" type="number" min={0} max={4000}
          onChange={(event: any) => { productHandler({ name: Products.diesel, voluem: Number(event.target.value) }) }} />
      </div>;
    }
    if (product.name === Products.ethanol) {
      return <div className={"flex w-full justify-center p-2 " + Color.ETH} key={"06"}>
        <input className="placeholder:text-center w-3/4 pl-1" placeholder="ETHANOL" type="number" min={0} max={4000}
          onChange={(event: any) => { productHandler({ name: Products.ethanol, voluem: Number(event.target.value) }) }} />
      </div>;
    }
  });
  return (
    <>
      {show}
    </>
  )
}

export default function Choice({ gallons, chosenProductHandler }: { gallons: ProductObject[], chosenProductHandler: any }) {
  return (
    <div className="flex flex-col items-center w-full rounded-md">
      <ProductsProvided gallons={gallons} chosenProductHandler={chosenProductHandler} />
    </div>
  );
}
