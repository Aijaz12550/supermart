import { Beautyproducts } from "../assets/data";
import ProductGrid from "../Reusable_Components/ProductGrid";

export default function BeautyProducts() {

  return (
    <>
      <ProductGrid title="Beauty Products" products={Beautyproducts} />
    </>
  );
}
