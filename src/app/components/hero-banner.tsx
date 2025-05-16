import Image from "next/image";
import Link from "next/link";
import Banner from "../assets/banner-hero-section.jpg";

export default function HeroBanner() {
  return (
    <div className="relative w-full mx-auto overflow-hidden rounded-md shadow-lg h-[500px]">
      {/* Background image */}
      <Image
        src={Banner}
        alt="Background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col md:flex-row-reverse items-center h-full">
        <div className="w-full md:w-1/2 p-6 md:p-10 text-white z-20">
          <p className="text-xl md:text-3xl font-light mb-2">
            Limited Offer 25% OFF
          </p>
          <h1 className="text-6xl font-bold mb-6">
            Organic Fruit for your Family's Health
          </h1>
          <button className="bg-white text-emerald-800 hover:bg-gray-100 font-medium text-xl px-8 py-2">
            <Link href="/shop">Shop Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
