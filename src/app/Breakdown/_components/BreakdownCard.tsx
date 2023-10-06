'use client'

import { useState } from "react";
import Gallons from "./Gallons/Gallons";
import Practice from "./Practice/Practice";
import { ProductObject } from "../_data/constants";

export default function BreakdownBox() {
  const [regular, setRegular] = useState<ProductObject | null>(null);
  const [midgrade, setMidgrade] = useState<ProductObject | null>(null);
  const [premium, setPremium] = useState<ProductObject | null>(null);
  const [e85, setE85] = useState<ProductObject | null>(null);
  const [diesel, setDiesel] = useState<ProductObject | null>(null);
  const [ethanol, setEthanol] = useState<ProductObject | null>(null);
  const [gallons, setGallons] = useState<ProductObject[]>([]);

  function regularHandler(data: ProductObject) {
    setRegular(data);
  }

  function midgradeHandler(data: ProductObject) {
    setMidgrade(data);
  }

  function premiumHandler(data: ProductObject) {
    setPremium(data);
  }

  function e85Handler(data: ProductObject) {
    setE85(data);
  }

  function dieselHandler(data: ProductObject) {
    setDiesel(data);
  }

  function ethanolHandler(data: ProductObject) {
    setEthanol(data);
  }

  function resetFrom() {
    setRegular(null);
    setMidgrade(null);
    setPremium(null);
    setE85(null);
    setDiesel(null);
    setEthanol(null);
  }

  function submitHandler(event: any) {
    event.preventDefault();
    const temp_gallons = [];
    if (regular) temp_gallons.push(regular);
    if (midgrade) temp_gallons.push(midgrade);
    if (premium) temp_gallons.push(premium);
    if (e85) temp_gallons.push(e85);
    if (diesel) temp_gallons.push(diesel);
    if (ethanol) temp_gallons.push(ethanol);
    setGallons(temp_gallons);
  }

  return (
    <div className="flex justify-center m-2">
      <Practice gallons={gallons} />
      <Gallons
        regularHandler={regularHandler}
        midgradeHandler={midgradeHandler}
        premiumHandler={premiumHandler}
        e85Handler={e85Handler}
        dieselHandler={dieselHandler}
        ethanolHandler={ethanolHandler}
        resetFrom={resetFrom}
        submitHandler={submitHandler}
      />
    </div>
  )
}