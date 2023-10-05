import { render, screen } from "@testing-library/react";
import { CompartmentNumber, Product, ProductLabel, TruckType } from "./ProductLabel";

describe("ProductLabel function:", () => {
  describe("test \"SEMI\"", () => {
    describe("Compartment #1", () => {
      test("should has tag \"Gas\"", () => {
        render(<ProductLabel comp={CompartmentNumber.ONE} truck_type={TruckType.SEMI} product={Product.GAS} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Gas$/);
      });
      test("GAS should has size \"3700\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.ONE} truck_type={TruckType.SEMI} product={Product.GAS} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^3700$/);
      });

      test("should has tag \"Diesel\"", () => {
        render(<ProductLabel comp={CompartmentNumber.ONE} truck_type={TruckType.SEMI} product={Product.DSL} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Diesel$/);
      });
      test("Diesel should has size \"3500\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.ONE} truck_type={TruckType.SEMI} product={Product.DSL} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^3500$/);
      });

      test("should has tag \"Ethanol\"", () => {
        render(<ProductLabel comp={CompartmentNumber.ONE} truck_type={TruckType.SEMI} product={Product.ETH} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Ethanol$/);
      });
      test("Ethanol should has size \"3500\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.ONE} truck_type={TruckType.SEMI} product={Product.ETH} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^3500$/);
      });
    });

    describe("Compartment #2", () => {
      test("should has tag \"Gas\"", () => {
        render(<ProductLabel comp={CompartmentNumber.TWO} truck_type={TruckType.SEMI} product={Product.GAS} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Gas$/);
      });
      test("GAS should has size \"1700\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.TWO} truck_type={TruckType.SEMI} product={Product.GAS} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^1700$/);
      });

      test("should has tag \"Diesel\"", () => {
        render(<ProductLabel comp={CompartmentNumber.TWO} truck_type={TruckType.SEMI} product={Product.DSL} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Diesel$/);
      });
      test("Diesel should has size \"1500\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.TWO} truck_type={TruckType.SEMI} product={Product.DSL} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^1500$/);
      });

      test("should has tag \"Ethanol\"", () => {
        render(<ProductLabel comp={CompartmentNumber.TWO} truck_type={TruckType.SEMI} product={Product.ETH} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Ethanol$/);
      });
      test("Ethanol should has size \"1600\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.TWO} truck_type={TruckType.SEMI} product={Product.ETH} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^1600$/);
      });
    });

    describe("Compartment #3", () => {
      test("should has tag \"Gas\"", () => {
        render(<ProductLabel comp={CompartmentNumber.THREE} truck_type={TruckType.SEMI} product={Product.GAS} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Gas$/);
      });
      test("GAS should has size \"1000\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.THREE} truck_type={TruckType.SEMI} product={Product.GAS} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^1000$/);
      });

      test("should has tag \"Diesel\"", () => {
        render(<ProductLabel comp={CompartmentNumber.THREE} truck_type={TruckType.SEMI} product={Product.DSL} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Diesel$/);
      });
      test("Diesel should has size \"800\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.THREE} truck_type={TruckType.SEMI} product={Product.DSL} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^800$/);
      });

      test("should has tag \"Ethanol\"", () => {
        render(<ProductLabel comp={CompartmentNumber.THREE} truck_type={TruckType.SEMI} product={Product.ETH} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Ethanol$/);
      });
      test("Ethanol should has size \"900\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.THREE} truck_type={TruckType.SEMI} product={Product.ETH} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^900$/);
      });
    });

    describe("Compartment #4", () => {
      test("should has tag \"Gas\"", () => {
        render(<ProductLabel comp={CompartmentNumber.FOUR} truck_type={TruckType.SEMI} product={Product.GAS} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Gas$/);
      });
      test("GAS should has size \"2100\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.FOUR} truck_type={TruckType.SEMI} product={Product.GAS} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^2100$/);
      });

      test("should has tag \"Diesel\"", () => {
        render(<ProductLabel comp={CompartmentNumber.FOUR} truck_type={TruckType.SEMI} product={Product.DSL} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Diesel$/);
      });
      test("Diesel should has size \"1800\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.FOUR} truck_type={TruckType.SEMI} product={Product.DSL} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^1800$/);
      });

      test("should has tag \"Ethanol\"", () => {
        render(<ProductLabel comp={CompartmentNumber.FOUR} truck_type={TruckType.SEMI} product={Product.ETH} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Ethanol$/);
      });
      test("Ethanol should has size \"2000\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.FOUR} truck_type={TruckType.SEMI} product={Product.ETH} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^2000$/);
      });
    });
  });

  describe("test \"TUB\"", () => {
    describe("Compartment #1", () => {
      test("should has tag \"Gas\"", () => {
        render(<ProductLabel comp={CompartmentNumber.ONE} truck_type={TruckType.TUB_THREE} product={Product.GAS} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Gas$/);
      });
      test("GAS should has size \"4000\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.ONE} truck_type={TruckType.TUB_THREE} product={Product.GAS} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^4000$/);
      });

      test("should has tag \"Diesel\"", () => {
        render(<ProductLabel comp={CompartmentNumber.ONE} truck_type={TruckType.TUB_THREE} product={Product.DSL} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Diesel$/);
      });
      test("Diesel should has size \"3600\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.ONE} truck_type={TruckType.TUB_THREE} product={Product.DSL} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^3600$/);
      });

      test("should has tag \"Ethanol\"", () => {
        render(<ProductLabel comp={CompartmentNumber.ONE} truck_type={TruckType.TUB_THREE} product={Product.ETH} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Ethanol$/);
      });
      test("Ethanol should has size \"3800\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.ONE} truck_type={TruckType.TUB_THREE} product={Product.ETH} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^3800$/);
      });
    });

    describe("Compartment #2", () => {
      test("should has tag \"Gas\"", () => {
        render(<ProductLabel comp={CompartmentNumber.TWO} truck_type={TruckType.TUB_THREE} product={Product.GAS} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Gas$/);
      });
      test("GAS should has size \"1800\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.TWO} truck_type={TruckType.TUB_THREE} product={Product.GAS} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^1800$/);
      });

      test("should has tag \"Diesel\"", () => {
        render(<ProductLabel comp={CompartmentNumber.TWO} truck_type={TruckType.TUB_THREE} product={Product.DSL} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Diesel$/);
      });
      test("Diesel should has size \"1500\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.TWO} truck_type={TruckType.TUB_THREE} product={Product.DSL} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^1500$/);
      });

      test("should has tag \"Ethanol\"", () => {
        render(<ProductLabel comp={CompartmentNumber.TWO} truck_type={TruckType.TUB_THREE} product={Product.ETH} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Ethanol$/);
      });
      test("Ethanol should has size \"1600\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.TWO} truck_type={TruckType.TUB_THREE} product={Product.ETH} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^1600$/);
      });
    });

    describe("Compartment #3", () => {
      test("should has tag \"Gas\"", () => {
        render(<ProductLabel comp={CompartmentNumber.THREE} truck_type={TruckType.TUB_THREE} product={Product.GAS} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Gas$/);
      });
      test("GAS should has size \"1000\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.THREE} truck_type={TruckType.TUB_THREE} product={Product.GAS} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^1000$/);
      });

      test("should has tag \"Diesel\"", () => {
        render(<ProductLabel comp={CompartmentNumber.THREE} truck_type={TruckType.TUB_THREE} product={Product.DSL} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Diesel$/);
      });
      test("Diesel should has size \"1000\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.THREE} truck_type={TruckType.TUB_THREE} product={Product.DSL} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^1000$/);
      });

      test("should has tag \"Ethanol\"", () => {
        render(<ProductLabel comp={CompartmentNumber.THREE} truck_type={TruckType.TUB_THREE} product={Product.ETH} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Ethanol$/);
      });
      test("Ethanol should has size \"1000\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.THREE} truck_type={TruckType.TUB_THREE} product={Product.ETH} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^1000$/);
      });
    });

    describe("Compartment #4", () => {
      test("should has tag \"Gas\"", () => {
        render(<ProductLabel comp={CompartmentNumber.FOUR} truck_type={TruckType.TUB_THREE} product={Product.GAS} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Gas$/);
      });
      test("GAS should has size \"1800\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.FOUR} truck_type={TruckType.TUB_THREE} product={Product.GAS} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^1800$/);
      });

      test("should has tag \"Diesel\"", () => {
        render(<ProductLabel comp={CompartmentNumber.FOUR} truck_type={TruckType.TUB_THREE} product={Product.DSL} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Diesel$/);
      });
      test("Diesel should has size \"1500\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.FOUR} truck_type={TruckType.TUB_THREE} product={Product.DSL} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^1500$/);
      });

      test("should has tag \"Ethanol\"", () => {
        render(<ProductLabel comp={CompartmentNumber.FOUR} truck_type={TruckType.TUB_THREE} product={Product.ETH} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Ethanol$/);
      });
      test("Ethanol should has size \"1600\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.FOUR} truck_type={TruckType.TUB_THREE} product={Product.ETH} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^1600$/);
      });
    });
  });

  describe("test \"TWO AND TWO\"", () => {
    describe("Compartment #1", () => {
      test("should has tag \"Gas\"", () => {
        render(<ProductLabel comp={CompartmentNumber.ONE} truck_type={TruckType.TWO_TWO} product={Product.GAS} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Gas$/);
      });
      test("GAS should has size \"3000\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.ONE} truck_type={TruckType.TWO_TWO} product={Product.GAS} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^3000$/);
      });

      test("should has tag \"Diesel\"", () => {
        render(<ProductLabel comp={CompartmentNumber.ONE} truck_type={TruckType.TWO_TWO} product={Product.DSL} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Diesel$/);
      });
      test("Diesel should has size \"2800\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.ONE} truck_type={TruckType.TWO_TWO} product={Product.DSL} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^2800$/);
      });

      test("should has tag \"Ethanol\"", () => {
        render(<ProductLabel comp={CompartmentNumber.ONE} truck_type={TruckType.TWO_TWO} product={Product.ETH} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Ethanol$/);
      });
      test("Ethanol should has size \"2800\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.ONE} truck_type={TruckType.TWO_TWO} product={Product.ETH} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^2800$/);
      });
    });

    describe("Compartment #2", () => {
      test("should has tag \"Gas\"", () => {
        render(<ProductLabel comp={CompartmentNumber.TWO} truck_type={TruckType.TWO_TWO} product={Product.GAS} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Gas$/);
      });
      test("GAS should has size \"1000\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.TWO} truck_type={TruckType.TWO_TWO} product={Product.GAS} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^1000$/);
      });

      test("should has tag \"Diesel\"", () => {
        render(<ProductLabel comp={CompartmentNumber.TWO} truck_type={TruckType.TWO_TWO} product={Product.DSL} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Diesel$/);
      });
      test("Diesel should has size \"800\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.TWO} truck_type={TruckType.TWO_TWO} product={Product.DSL} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^800$/);
      });

      test("should has tag \"Ethanol\"", () => {
        render(<ProductLabel comp={CompartmentNumber.TWO} truck_type={TruckType.TWO_TWO} product={Product.ETH} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Ethanol$/);
      });
      test("Ethanol should has size \"900\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.TWO} truck_type={TruckType.TWO_TWO} product={Product.ETH} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^900$/);
      });
    });

    describe("Compartment #3", () => {
      test("should has tag \"Gas\"", () => {
        render(<ProductLabel comp={CompartmentNumber.THREE} truck_type={TruckType.TWO_TWO} product={Product.GAS} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Gas$/);
      });
      test("GAS should has size \"1800\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.THREE} truck_type={TruckType.TWO_TWO} product={Product.GAS} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^1800$/);
      });

      test("should has tag \"Diesel\"", () => {
        render(<ProductLabel comp={CompartmentNumber.THREE} truck_type={TruckType.TWO_TWO} product={Product.DSL} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Diesel$/);
      });
      test("Diesel should has size \"1500\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.THREE} truck_type={TruckType.TWO_TWO} product={Product.DSL} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^1500$/);
      });

      test("should has tag \"Ethanol\"", () => {
        render(<ProductLabel comp={CompartmentNumber.THREE} truck_type={TruckType.TWO_TWO} product={Product.ETH} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Ethanol$/);
      });
      test("Ethanol should has size \"1600\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.THREE} truck_type={TruckType.TWO_TWO} product={Product.ETH} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^1600$/);
      });
    });

    describe("Compartment #4", () => {
      test("should has tag \"Gas\"", () => {
        render(<ProductLabel comp={CompartmentNumber.FOUR} truck_type={TruckType.TWO_TWO} product={Product.GAS} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Gas$/);
      });
      test("GAS should has size \"2800\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.FOUR} truck_type={TruckType.TWO_TWO} product={Product.GAS} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^2800$/);
      });

      test("should has tag \"Diesel\"", () => {
        render(<ProductLabel comp={CompartmentNumber.FOUR} truck_type={TruckType.TWO_TWO} product={Product.DSL} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Diesel$/);
      });
      test("Diesel should has size \"2500\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.FOUR} truck_type={TruckType.TWO_TWO} product={Product.DSL} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^2500$/);
      });

      test("should has tag \"Ethanol\"", () => {
        render(<ProductLabel comp={CompartmentNumber.FOUR} truck_type={TruckType.TWO_TWO} product={Product.ETH} />)
        expect(screen.getByTestId("product")).toHaveTextContent(/^Ethanol$/);
      });
      test("Ethanol should has size \"2700\" gallons", () => {
        render(<ProductLabel comp={CompartmentNumber.FOUR} truck_type={TruckType.TWO_TWO} product={Product.ETH} />)
        expect(screen.getByTestId("size")).toHaveTextContent(/^2700$/);
      });
    });

  });
});