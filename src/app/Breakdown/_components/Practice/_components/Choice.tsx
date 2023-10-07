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
  const [regular, setRegular] = useState<ProductObject>({ name: Products.regular, voluem: 0 });
  const [midgrade, setMidgrade] = useState<ProductObject>({ name: Products.midgrade, voluem: 0 });
  const [premium, setPremium] = useState<ProductObject>({ name: Products.premium, voluem: 0 });
  const [e85, setE85] = useState<ProductObject>({ name: Products.e85, voluem: 0 });
  const [diesel, setDiesel] = useState<ProductObject>({ name: Products.diesel, voluem: 0 });
  const [ethanol, setEthanol] = useState<ProductObject>({ name: Products.ethanol, voluem: 0 });
  const [backGallons, setBackGallons] = useState<ProductObject[]>([]);
  const temp_gallons: any = [];

  const show = gallons.map((product) => {
    if (product.name === Products.regular) {
      return <div className={"flex w-full justify-center p-2 " + Color.REG} key={"01"}>
        <input className="placeholder:text-center w-3/4" placeholder="87" type="number" min="0" max="4000"
          onChange={(event: any) => { setRegular({ ...regular, voluem: Number(event.target.value) }) }} />
      </div>;
    }
    if (product.name === Products.midgrade) {
      return <div className={"flex w-full justify-center p-2 " + Color.MID} key={"02"}>
        <input className="placeholder:text-center w-3/4" placeholder="89" type="number" min={0} max={4000}
          onChange={(event: any) => { setMidgrade({ ...midgrade, voluem: Number(event.target.value) }) }} />
      </div>;
    }
    if (product.name === Products.premium) {
      return <div className={"flex w-full justify-center p-2 " + Color.PRM} key={"03"}>
        <input className="placeholder:text-center w-3/4" placeholder="91" type="number" min={0} max={4000}
          onChange={(event: any) => { setPremium({ ...premium, voluem: Number(event.target.value) }) }} />
      </div>;
    }
    if (product.name === Products.e85) {
      return <div className={"flex w-full justify-center p-2 " + Color.E85} key={"05"}>
        <input className="placeholder:text-center w-3/4" placeholder="E85" type="number" min={0} max={4000}
          onChange={(event: any) => { setE85({ ...e85, voluem: Number(event.target.value) }) }} />
      </div>;
    }
    if (product.name === Products.diesel) {
      return <div className={"flex w-full justify-center p-2 " + Color.DSL} key={"04"}>
        <input className="placeholder:text-center w-3/4" placeholder="DIESEL" type="number" min={0} max={4000}
          onChange={(event: any) => { setDiesel({ ...diesel, voluem: Number(event.target.value) }) }} />
      </div>;
    }
    if (product.name === Products.ethanol) {
      return <div className={"flex w-full justify-center p-2 " + Color.ETH} key={"06"}>
        <input className="placeholder:text-center w-3/4" placeholder="ETHANOL" type="number" min={0} max={4000}
          onChange={(event: any) => { setEthanol({ ...ethanol, voluem: Number(event.target.value) }) }} />
      </div>;
    }
  });
  // console.log(regular);
  // console.log(midgrade);
  // console.log(premium);
  // console.log(e85);
  // console.log(diesel);
  // console.log(ethanol);
  temp_gallons.push(regular);
  temp_gallons.push(midgrade);
  temp_gallons.push(premium);
  temp_gallons.push(e85);
  temp_gallons.push(diesel);
  temp_gallons.push(ethanol);
  console.log(temp_gallons);
  // console.log(backGallons);
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
