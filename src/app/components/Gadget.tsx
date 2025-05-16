import { Gadgetproducts } from "../assets/data";
import ProductGrid from "../Reusable_Components/ProductGrid";

export default function GadgetAndAccessories() {
  return (
    <>
      <ProductGrid title="Gadget and Accessories" products={Gadgetproducts} />
    </>
  );
}
