import { ProductObject, Products } from "../../_data/constants";
import Actions from "./_components/Actions";
import Trailer from "./_components/Trailer";
import { TruckType } from "./_components/products/ProductLabel";

export default function Practice({ gallons }: { gallons: ProductObject[] }) {
  // UseState for gallons for subtraction - HERE
  // Function checks if product exist in Provided gallons. Needs to be universal, 
  function regular(data: ProductObject[]): number {
    // has to create new ProductObject with calculated gallons and sends them to <Actions />
    const productProvided = data.find((product) => product.name === Products.regular);
    return productProvided ? productProvided.voluem : 0;
  }

  // Returns total of chosen product. Can it be Universal??????????
  function chosenRegular(data: ProductObject[]): number {
    const regular = data.filter((element) => element.name === Products.regular);
    if (regular) {
      let sumOfRegular: number = 0;
      regular.forEach(element => sumOfRegular += element.voluem);
      return sumOfRegular;
    }
    return 0;
  }

  function chosenGallons(data: ProductObject[]) {
    console.log(chosenRegular(data));

  }


  // Function to chose beetwen SEMI, TUB, TWO
  // HERE
  let truck_type = TruckType.SEMI;
  return (
    <div className="flex w-full m-2 rounded-md">
      <Trailer truck_type={truck_type} gallons={gallons} backGallons={chosenGallons} />
      <Actions gallons={gallons} />
    </div>
  )
}