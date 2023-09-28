import Choice from "./Choice";
import { ProductLabel, TruckData, TruckType, CompartmentNumber, Product } from "./products/ProductLabel";

const truck_data: TruckData = {
  truck_type: TruckType.SEMI,
  compartment_number: CompartmentNumber.ONE,
  product: Product.GAS,
}

export default function CompartmentPractice({ number, gallons }: { number: Number, gallons: any }) {
  if (number === 1) { truck_data.compartment_number = CompartmentNumber.ONE; }
  if (number === 2) { truck_data.compartment_number = CompartmentNumber.TWO; }
  if (number === 3) { truck_data.compartment_number = CompartmentNumber.THREE; }
  if (number === 4) { truck_data.compartment_number = CompartmentNumber.FOUR; }
  const truck_data_GAS: TruckData = {
    ...truck_data,
    product: Product.GAS,
  }
  const truck_data_DSL: TruckData = {
    ...truck_data,
    product: Product.DSL,
  }
  const truck_data_ETH: TruckData = {
    ...truck_data,
    product: Product.ETH,
  }
  return (
    <div className="flex flex-col items-center w-full m-2 p-1 bg-slate-500 text-slate-900 rounded-md">
      <div className="font-bold">{number.toString()}</div>
      <ProductLabel truck_data={truck_data_GAS} />
      <ProductLabel truck_data={truck_data_DSL} />
      <ProductLabel truck_data={truck_data_ETH} />
      <Choice gallons={gallons} />
    </div>
  )
}