import Image from "next/image";
import ProductImage from "../assets/product.png";

export function CheckoutList() {
  const cartItems = [
    {
      id: 1,
      name: "Fresh Red-Bell Pepper",
      weight: "500g",
      price: 1000,
      quantity: 2,
      image: ProductImage,
    },
    {
      id: 2,
      name: "Fresh Red-Bell Pepper",
      weight: "500g",
      price: 1000,
      quantity: 2,
      image: ProductImage,
    },
    {
      id: 3,
      name: "Fresh Red-Bell Pepper",
      weight: "500g",
      price: 500,
      quantity: 1,
      image: ProductImage,
    },
  ];

  const subtotal = 2500; // Fixed value from screenshot
  const shippingCharges = 200;
  const total = 3200; // Fixed value from screenshot

  return (
    <div className="space-y-4">
      {/* Cart Items */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-start space-x-3 py-2">
            <div className="relative">
              <div className="absolute -top-1 -right-1 z-10 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center">
                {item.quantity}
              </div>
              <Image
                src={item.image}
                alt={item.name}
                width={60}
                height={60}
                className="rounded-md"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm">
                {item.name}, {item.weight}
              </p>
            </div>
            <div className="text-right">
              <p className="font-medium">Rs {item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Discount Code */}
      <div className="flex space-x-2 pt-2">
        <input type="text" placeholder="Discount code" className="flex-1" />
        <button className="bg-gray-100 hover:bg-gray-200 px-10 py-2 rounded-md  text-gray-700 font-medium">
          Apply
        </button>
      </div>

      {/* Order Summary */}
      <div className="space-y-2 pt-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Sub Total:</span>
          <span className="font-medium">Rs {subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping Charges:</span>
          <span className="font-medium">Rs {shippingCharges}</span>
        </div>
        <div className="flex justify-between pt-4 mt-2 border-t border-[#C0C0C0]">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-lg font-semibold">Rs {total}</span>
        </div>
      </div>
    </div>
  );
}
