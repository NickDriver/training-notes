export enum TruckType {
  SEMI,
  TUB_THREE,
  TWO_TWO,
}

export enum CompartmentNumber {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
}

export enum Product {
  GAS = "Gas",
  DSL = "Diesel",
  ETH = "Ethanol",
}

export interface TruckData {
  truck_type: TruckType;
  compartment_number: CompartmentNumber;
  product: Product;
}

let size: Number = 0;
let color: String = " ";

export function ProductLabel({ truck_data }: { truck_data: TruckData }) {
  // Validation for Truck Type and Product
  if (truck_data.truck_type === TruckType.SEMI) {
    if (truck_data.product === Product.GAS) {
      if (truck_data.compartment_number === CompartmentNumber.ONE) { size = 3700; }
      if (truck_data.compartment_number === CompartmentNumber.TWO) { size = 1700; }
      if (truck_data.compartment_number === CompartmentNumber.THREE) { size = 1000; }
      if (truck_data.compartment_number === CompartmentNumber.FOUR) { size = 2100; }
    }

    if (truck_data.product === Product.DSL) {
      if (truck_data.compartment_number === CompartmentNumber.ONE) { size = 3500; }
      if (truck_data.compartment_number === CompartmentNumber.TWO) { size = 1500; }
      if (truck_data.compartment_number === CompartmentNumber.THREE) { size = 800; }
      if (truck_data.compartment_number === CompartmentNumber.FOUR) { size = 1800; }
    }

    if (truck_data.product === Product.ETH) {
      if (truck_data.compartment_number === CompartmentNumber.ONE) { size = 3500; }
      if (truck_data.compartment_number === CompartmentNumber.TWO) { size = 1600; }
      if (truck_data.compartment_number === CompartmentNumber.THREE) { size = 900; }
      if (truck_data.compartment_number === CompartmentNumber.FOUR) { size = 2000; }
    }
  }

  // Validation of Product to switch color
  if (truck_data.product === Product.GAS) {
    color = " bg-orange-200";
  }

  if (truck_data.product === Product.DSL) {
    color = " bg-green-600";
  }

  if (truck_data.product === Product.ETH) {
    color = " bg-sky-600";
  }

  return (
    <div className="flex justify-between w-full text-xs">
      <div className={"flex justify-center w-2/3 m-1 rounded-md " + color}>{truck_data.product}</div>
      <div className={"flex justify-center w-2/3 m-1 rounded-md " + color}>{size.toString()}</div>
    </div>
  )
}