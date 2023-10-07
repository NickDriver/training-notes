export enum CompartmentSizes {
  SEMI_GAS_ONE = 3700,
  SEMI_GAS_TWO = 1700,
  SEMI_GAS_THREE = 1000,
  SEMI_GAS_FOUR = 2100,
  SEMI_DSL_ONE = 3500,
  SEMI_DSL_TWO = 1500,
  SEMI_DSL_THREE = 800,
  SEMI_DSL_FOUR = 1800,
  SEMI_ETH_ONE = 3500,
  SEMI_ETH_TWO = 1600,
  SEMI_ETH_THREE = 900,
  SEMI_ETH_FOUR = 2000,
  TUB_GAS_ONE = 4000,
  TUB_GAS_TWO = 1800,
  TUB_GAS_THREE = 1000,
  TUB_GAS_FOUR = 1800,
  TUB_DSL_ONE = 3600,
  TUB_DSL_TWO = 1500,
  TUB_DSL_THREE = 1000,
  TUB_DSL_FOUR = 1500,
  TUB_ETH_ONE = 3800,
  TUB_ETH_TWO = 1600,
  TUB_ETH_THREE = 1000,
  TUB_ETH_FOUR = 1600,
  TWO_GAS_ONE = 3000,
  TWO_GAS_TWO = 1000,
  TWO_GAS_THREE = 1800,
  TWO_GAS_FOUR = 2800,
  TWO_DSL_ONE = 2800,
  TWO_DSL_TWO = 800,
  TWO_DSL_THREE = 1500,
  TWO_DSL_FOUR = 2500,
  TWO_ETH_ONE = 2800,
  TWO_ETH_TWO = 900,
  TWO_ETH_THREE = 1600,
  TWO_ETH_FOUR = 2700
}

export enum Products {
  regular = "regular",
  midgrade = "midgrade",
  premium = "premium",
  e85 = "e85",
  diesel = "diesel",
  ethanol = "ethanol",
}

export interface ProductObject {
  name: Products;
  voluem: Number;
  // prevState: null;
}