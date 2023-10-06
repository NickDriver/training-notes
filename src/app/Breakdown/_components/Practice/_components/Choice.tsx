import { useState } from "react";
import { ProductObject, Products } from "@/app/Breakdown/_data/constants";

enum Color {
  REG = " bg-slate-400",
  MID = " bg-blue-600",
  PRM = " bg-red-600",
  DSL = " bg-green-600",
  E85 = " bg-yellow-500",
  ETH = " bg-sky-600",
}

function ProductsProvided({ gallons }: { gallons: ProductObject[] }) {
  const [regular, setRegular] = useState<ProductObject | null>(null);
  const [midgrade, setMidgrade] = useState<ProductObject | null>(null);
  const [premium, setPremium] = useState<ProductObject | null>(null);
  const [e85, setE85] = useState<ProductObject | null>(null);
  const [diesel, setDiesel] = useState<ProductObject | null>(null);
  const [ethanol, setEthanol] = useState<ProductObject | null>(null);
  const [backGallons, setBackGallons] = useState<ProductObject[]>([]);
  const temp_gallons: any = [];

  function regHandler(event: any) {
    setRegular({ name: Products.regular, voluem: event.target.value, prevState: null });
  }
  const show = gallons.map((product) => {
    if (product.name === Products.regular) {
      return <div className={"flex w-full justify-center p-2 " + Color.REG} key={"01"}>
        <input className="placeholder:text-center w-3/4" placeholder="87" type="number" min="0" max="4000" onChange={regHandler} />
      </div>;
    }
    if (product.name === Products.midgrade) {
      return <div className={"flex w-full justify-center p-2 " + Color.MID} key={"02"}>
        <input className="placeholder:text-center w-3/4" placeholder="89" type="number" min={0} max={4000} onChange={(event: any) => setMidgrade(event.target.value)} />
      </div>;
    }
    if (product.name === Products.premium) {
      return <div className={"flex w-full justify-center p-2 " + Color.PRM} key={"03"}>
        <input className="placeholder:text-center w-3/4" placeholder="91" type="number" min={0} max={4000} onChange={(event: any) => setPremium(event.target.value)} />
      </div>;
    }
    if (product.name === Products.e85) {
      return <div className={"flex w-full justify-center p-2 " + Color.E85} key={"05"}>
        <input className="placeholder:text-center w-3/4" placeholder="E85" type="number" min={0} max={4000} onChange={(event: any) => setE85(event.target.value)} />
      </div>;
    }
    if (product.name === Products.diesel) {
      return <div className={"flex w-full justify-center p-2 " + Color.DSL} key={"04"}>
        <input className="placeholder:text-center w-3/4" placeholder="DIESEL" type="number" min={0} max={4000} onChange={(event: any) => setDiesel(event.target.value)} />
      </div>;
    }
    if (product.name === Products.ethanol) {
      return <div className={"flex w-full justify-center p-2 " + Color.ETH} key={"06"}>
        <input className="placeholder:text-center w-3/4" placeholder="ETHANOL" type="number" min={0} max={4000} onChange={(event: any) => setEthanol(event.target.value)} />
      </div>;
    }
  });
  return (
    <>
      {show}
    </>
  )
}

export default function Choice({ gallons }: { gallons: ProductObject[] }) {
  return (
    <div className="flex flex-col items-center w-full rounded-md">
      <ProductsProvided gallons={gallons} />
    </div>

  );
}
