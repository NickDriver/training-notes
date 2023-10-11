import { ProductObject, Products } from "../_data/constants";

//-----------------------------------------------------------------------------------------------------------------------------------------
// Function checks if product exist in Provided gallons. Needs to be universal, 
export function calculatedGallons(providetGallons: ProductObject[], chosenGallons: ProductObject[]): ProductObject[] {
  const newProductObject: ProductObject[] = [];
  providetGallons.forEach((product) => {
    if (product.name === Products.regular) {
      newProductObject.push({ name: product.name, voluem: product.voluem - chosenProduct(chosenGallons, Products.regular) });
    }

    if (product.name === Products.midgrade) {
      newProductObject.push({ name: product.name, voluem: product.voluem - chosenProduct(chosenGallons, Products.midgrade) });
    }

    if (product.name === Products.premium) {
      newProductObject.push({ name: product.name, voluem: product.voluem - chosenProduct(chosenGallons, Products.premium) });
    }

    if (product.name === Products.e85) {
      newProductObject.push({ name: product.name, voluem: product.voluem - chosenProduct(chosenGallons, Products.e85) });
    }

    if (product.name === Products.diesel) {
      newProductObject.push({ name: product.name, voluem: product.voluem - chosenProduct(chosenGallons, Products.diesel) });
    }

    if (product.name === Products.ethanol) {
      newProductObject.push({ name: product.name, voluem: product.voluem - chosenProduct(chosenGallons, Products.ethanol) });
    }
  });

  return newProductObject;
  }

  // Returns total of chosen product.
  function chosenProduct(chosenGallons: ProductObject[], chosenProduct: Products): number {
  const filteredProduct = chosenGallons.filter((product) => product.name === chosenProduct);
  if (filteredProduct) {
    let sumOfRegular: number = 0;
    filteredProduct.forEach(element => sumOfRegular += element.voluem);
    return sumOfRegular;
  }
  return 0;
}
//----------------------------------------------------------------------------------------------------------------------------------