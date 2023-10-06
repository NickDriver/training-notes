import { CompartmentSizes } from "@/app/Breakdown/_data/constants";


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

// inner style constants
enum Styles {
  GAS_COLOR = " bg-orange-200",
  DSL_COLOR = " bg-green-600",
  ETH_COLOR = " bg-sky-600",
}

let size: Number = 0;
let color: String = " ";


//Function with logic to render right Product
function product_semi_gas(comp: CompartmentNumber) {
  if (comp === CompartmentNumber.ONE) { size = CompartmentSizes.SEMI_GAS_ONE; }
  if (comp === CompartmentNumber.TWO) { size = CompartmentSizes.SEMI_GAS_TWO; }
  if (comp === CompartmentNumber.THREE) { size = CompartmentSizes.SEMI_GAS_THREE; }
  if (comp === CompartmentNumber.FOUR) { size = CompartmentSizes.SEMI_GAS_FOUR; }
}

function product_semi_dsl(comp: CompartmentNumber) {
  if (comp === CompartmentNumber.ONE) { size = CompartmentSizes.SEMI_DSL_ONE; }
  if (comp === CompartmentNumber.TWO) { size = CompartmentSizes.SEMI_DSL_TWO; }
  if (comp === CompartmentNumber.THREE) { size = CompartmentSizes.SEMI_DSL_THREE; }
  if (comp === CompartmentNumber.FOUR) { size = CompartmentSizes.SEMI_DSL_FOUR; }
}

function product_semi_eth(comp: CompartmentNumber) {
  if (comp === CompartmentNumber.ONE) { size = CompartmentSizes.SEMI_ETH_ONE; }
  if (comp === CompartmentNumber.TWO) { size = CompartmentSizes.SEMI_ETH_TWO; }
  if (comp === CompartmentNumber.THREE) { size = CompartmentSizes.SEMI_ETH_THREE; }
  if (comp === CompartmentNumber.FOUR) { size = CompartmentSizes.SEMI_ETH_FOUR; }
}

function product_tub_gas(comp: CompartmentNumber) {
  if (comp === CompartmentNumber.ONE) { size = CompartmentSizes.TUB_GAS_ONE; }
  if (comp === CompartmentNumber.TWO) { size = CompartmentSizes.TUB_GAS_TWO; }
  if (comp === CompartmentNumber.THREE) { size = CompartmentSizes.TUB_GAS_THREE; }
  if (comp === CompartmentNumber.FOUR) { size = CompartmentSizes.TUB_GAS_FOUR; }
}

function product_tub_dsl(comp: CompartmentNumber) {
  if (comp === CompartmentNumber.ONE) { size = CompartmentSizes.TUB_DSL_ONE; }
  if (comp === CompartmentNumber.TWO) { size = CompartmentSizes.TUB_DSL_TWO; }
  if (comp === CompartmentNumber.THREE) { size = CompartmentSizes.TUB_DSL_THREE; }
  if (comp === CompartmentNumber.FOUR) { size = CompartmentSizes.TUB_DSL_FOUR; }
}

function product_tub_eth(comp: CompartmentNumber) {
  if (comp === CompartmentNumber.ONE) { size = CompartmentSizes.TUB_ETH_ONE; }
  if (comp === CompartmentNumber.TWO) { size = CompartmentSizes.TUB_ETH_TWO; }
  if (comp === CompartmentNumber.THREE) { size = CompartmentSizes.TUB_ETH_THREE; }
  if (comp === CompartmentNumber.FOUR) { size = CompartmentSizes.TUB_ETH_FOUR; }
}

function product_two_gas(comp: CompartmentNumber) {
  if (comp === CompartmentNumber.ONE) { size = CompartmentSizes.TWO_GAS_ONE; }
  if (comp === CompartmentNumber.TWO) { size = CompartmentSizes.TWO_GAS_TWO; }
  if (comp === CompartmentNumber.THREE) { size = CompartmentSizes.TWO_GAS_THREE; }
  if (comp === CompartmentNumber.FOUR) { size = CompartmentSizes.TWO_GAS_FOUR; }
}

function product_two_dsl(comp: CompartmentNumber) {
  if (comp === CompartmentNumber.ONE) { size = CompartmentSizes.TWO_DSL_ONE; }
  if (comp === CompartmentNumber.TWO) { size = CompartmentSizes.TWO_DSL_TWO; }
  if (comp === CompartmentNumber.THREE) { size = CompartmentSizes.TWO_DSL_THREE; }
  if (comp === CompartmentNumber.FOUR) { size = CompartmentSizes.TWO_DSL_FOUR; }
}

function product_two_eth(comp: CompartmentNumber) {
  if (comp === CompartmentNumber.ONE) { size = CompartmentSizes.TWO_ETH_ONE; }
  if (comp === CompartmentNumber.TWO) { size = CompartmentSizes.TWO_ETH_TWO; }
  if (comp === CompartmentNumber.THREE) { size = CompartmentSizes.TWO_ETH_THREE; }
  if (comp === CompartmentNumber.FOUR) { size = CompartmentSizes.TWO_ETH_FOUR; }
}

export function ProductLabel({ comp, truck_type, product }: { comp: CompartmentNumber, truck_type: TruckType, product: Product }) {
  // Validation for Truck Type and Product
  if (truck_type === TruckType.SEMI) {
    if (product === Product.GAS) product_semi_gas(comp);
    if (product === Product.DSL) product_semi_dsl(comp);
    if (product === Product.ETH) product_semi_eth(comp);
  }

  if (truck_type === TruckType.TUB_THREE) {
    if (product === Product.GAS) product_tub_gas(comp);
    if (product === Product.DSL) product_tub_dsl(comp);
    if (product === Product.ETH) product_tub_eth(comp);
  }

  if (truck_type === TruckType.TWO_TWO) {
    if (product === Product.GAS) product_two_gas(comp);
    if (product === Product.DSL) product_two_dsl(comp);
    if (product === Product.ETH) product_two_eth(comp);
  }

  // Validation of Product to switch color
  if (product === Product.GAS) {
    color = Styles.GAS_COLOR;
  }

  if (product === Product.DSL) {
    color = Styles.DSL_COLOR;
  }

  if (product === Product.ETH) {
    color = Styles.ETH_COLOR;
  }

  return (
    <div className="flex justify-between w-full text-xs">
      <div data-testid="product" className={"flex justify-center w-2/3 m-1 rounded-md " + color}>{product}</div>
      <div data-testid="size" className={"flex justify-center w-2/3 m-1 rounded-md " + color}>{size.toString()}</div>
    </div>
  )
}