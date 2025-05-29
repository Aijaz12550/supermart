import React from "react";
import Image from "next/image";
import bannerfirst from "../assets/bannerfirst.png";
import bannersecond from "../assets/bannersecond.jpg";
import bannerthird from "../assets/bannerthird.jpg";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="w-full md:w-1/3">
          <Image
            src={bannerthird}
            alt="Summer Sale Banner"
            className="w-full h-auto   shadow-md"
            width={400}
            height={150}
            layout="responsive"
            priority
          />
        </div>

        <div className="w-full md:w-1/3">
          <Image
            src={bannersecond}
            alt="50% Discount Banner"
            className="w-full h-auto shadow-md"
            width={400}
            height={150}
            layout="responsive"
            priority
          />
        </div>

        <div className="w-full md:w-1/3">
          <Image
            src={bannerfirst}
            alt="Exclusive Offer Banner"
            className="w-full h-auto    shadow-md"
            width={400}
            height={150}
            layout="responsive"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
