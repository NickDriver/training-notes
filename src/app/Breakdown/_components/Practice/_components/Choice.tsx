import { ProductObject, Products } from "@/app/Breakdown/_data/constants";
import { useEffect, useState } from "react";

enum Color {
  REG = " bg-slate-400",
  MID = " bg-blue-600",
  PRM = " bg-red-600",
  DSL = " bg-green-600",
  E85 = " bg-yellow-500",
  ETH = " bg-sky-600",
}

function ProductsProvided({ gallons, chosenProductHandler, clearChoice }: { gallons: ProductObject[], chosenProductHandler: any, clearChoice: boolean }) {
  // States for disable input
  const [isRegularVisible, setIsRegularVisible] = useState(false);
  const [isMidgradeVisible, setIsMidgradeVisible] = useState(false);
  const [isPremiumVisible, setIsPremiumVisible] = useState(false);
  const [isE85Visible, setIsE85Visible] = useState(false);
  const [isDieselVisible, setIsDieselVisible] = useState(false);
  const [isEthanolVisible, setIsEthanolVisible] = useState(false);

  // UseEffect toclear visibility on Clear button
  useEffect(() => {
    clearVisibility();
  }, [clearChoice]);

  // Handler to lift state up: ProductsProvided => Choice
  function productHandler(data: ProductObject) {
    chosenProductHandler(data);
  }

  // Handlers for change
  const onRegular = (event: any) => {
    productHandler({ name: Products.regular, voluem: Number(event.target.value) });
    setIsRegularVisible(false);
    setIsMidgradeVisible(true);
    setIsPremiumVisible(true);
    setIsE85Visible(true);
    setIsDieselVisible(true);
    setIsEthanolVisible(true);
  }

  const onMidgrade = (event: any) => {
    productHandler({ name: Products.midgrade, voluem: Number(event.target.value) });
    setIsRegularVisible(true);
    setIsMidgradeVisible(false);
    setIsPremiumVisible(true);
    setIsE85Visible(true);
    setIsDieselVisible(true);
    setIsEthanolVisible(true);
  }

  const onPremium = (event: any) => {
    productHandler({ name: Products.premium, voluem: Number(event.target.value) });
    setIsRegularVisible(true);
    setIsMidgradeVisible(true);
    setIsPremiumVisible(false);
    setIsE85Visible(true);
    setIsDieselVisible(true);
    setIsEthanolVisible(true);
  }

  const onE85 = (event: any) => {
    productHandler({ name: Products.e85, voluem: Number(event.target.value) });
    setIsRegularVisible(true);
    setIsMidgradeVisible(true);
    setIsPremiumVisible(true);
    setIsE85Visible(false);
    setIsDieselVisible(true);
    setIsEthanolVisible(true);
  }

  const onDiesel = (event: any) => {
    productHandler({ name: Products.diesel, voluem: Number(event.target.value) });
    setIsRegularVisible(true);
    setIsMidgradeVisible(true);
    setIsPremiumVisible(true);
    setIsE85Visible(true);
    setIsDieselVisible(false);
    setIsEthanolVisible(true);
  }

  const onEthanol = (event: any) => {
    productHandler({ name: Products.ethanol, voluem: Number(event.target.value) });
    setIsRegularVisible(true);
    setIsMidgradeVisible(true);
    setIsPremiumVisible(true);
    setIsE85Visible(true);
    setIsDieselVisible(true);
    setIsEthanolVisible(false);
  }

  const clearVisibility = () => {
    setIsRegularVisible(false);
    setIsMidgradeVisible(false);
    setIsPremiumVisible(false);
    setIsE85Visible(false);
    setIsDieselVisible(false);
    setIsEthanolVisible(false);
  }

  const show = gallons.map((product) => {
    if (product.name === Products.regular) {
      return <div className={"flex w-full justify-center p-2 " + Color.REG} key={"01"}>
        <input disabled={isRegularVisible} className="placeholder:text-center w-3/4 pl-1" placeholder="87" type="number"
          onChange={onRegular} onClick={clearVisibility} />
      </div>;
    }
    if (product.name === Products.midgrade) {
      return <div className={"flex w-full justify-center p-2 " + Color.MID} key={"02"}>
        <input disabled={isMidgradeVisible} className="placeholder:text-center w-3/4 pl-1" placeholder="89" type="number" min={0} max={4000}
          onChange={onMidgrade} onClick={clearVisibility} />
      </div>;
    }
    if (product.name === Products.premium) {
      return <div className={"flex w-full justify-center p-2 " + Color.PRM} key={"03"}>
        <input disabled={isPremiumVisible} className="placeholder:text-center w-3/4 pl-1" placeholder="91" type="number" min={0} max={4000}
          onChange={onPremium} onClick={clearVisibility} />
      </div>;
    }
    if (product.name === Products.e85) {
      return <div className={"flex w-full justify-center p-2 " + Color.E85} key={"05"}>
        <input disabled={isE85Visible} className="placeholder:text-center w-3/4 pl-1" placeholder="E85" type="number" min={0} max={4000}
          onChange={onE85} onClick={clearVisibility} />
      </div>;
    }
    if (product.name === Products.diesel) {
      return <div className={"flex w-full justify-center p-2 " + Color.DSL} key={"04"}>
        <input disabled={isDieselVisible} className="placeholder:text-center w-3/4 pl-1" placeholder="DIESEL" type="number" min={0} max={4000}
          onChange={onDiesel} onClick={clearVisibility} />
      </div>;
    }
    if (product.name === Products.ethanol) {
      return <div className={"flex w-full justify-center p-2 " + Color.ETH} key={"06"}>
        <input disabled={isEthanolVisible} className="placeholder:text-center w-3/4 pl-1" placeholder="ETHANOL" type="number" min={0} max={4000}
          onChange={onEthanol} onClick={clearVisibility} />
      </div>;
    }
  });
  return (
    <>
      {show}
    </>
  )
}

export default function Choice({ gallons, chosenProductHandler, clearChoice }: { gallons: ProductObject[], chosenProductHandler: any, clearChoice: boolean }) {
  return (
    <div className="flex flex-col items-center w-full rounded-md">
      <ProductsProvided gallons={gallons} chosenProductHandler={chosenProductHandler} clearChoice={clearChoice} />
    </div>
  );
}
