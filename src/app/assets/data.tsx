// data.ts
import CauliFlower from "../assets/caulifower.png";
import Choclate from "../assets/choclate.png";
import ChocoChips from "../assets/choco-chips.png";
import Meat from "../assets/meat.png";
import BeautyFirst from "../assets/Beauty_Products(1).jpg";
import BeautySecond from "../assets/Beauty_Products(2).jpg";
import BeautyThird from "../assets/Beauty_Products(3).jpg";
import BeautyFourth from "../assets/Beauty_Products(4).jpg";
import BeautyFifth from "../assets/Beauty_Products(5).jpg";
import GadgetFirst from "../assets/gadget_and_accessories_first.jpg";
import GadgetSecond from "../assets/gadget_and_accessories_second.jpg";
import GadgetThird from "../assets/gadget_and_accessories_third.jpg";
import GadgetFourth from "../assets/gadget_and_accessories_fourth.jpg";
import GadgetFifth from "../assets/gadget_and_accessories_fifth.jpg";
import redshirt from "../assets/red-shirt.jpg"
import blueshirt from "../assets/blue-shirt.jpg"
import brownshirt from "../assets/brown-shirt.jpg"
import { ReactNode } from "react";
import { HealthIcon, InstagramIcon, KidsIcon, LifeStyleIcon, MenFashionIcon, PhoneIcon, TikTokIcon, TwitterIcon, WomenFashionIcon } from "../components/Icon";

interface Category {
  id: number;
  name: string;
  icon: ReactNode;
  productCount: number;
}

// Product data array
export const products = [
  {
    id: 16,
    name: "Fresh Street Frozen Broccoli, 500g",
    description: "",
    price: "Rs. 500",
    image: CauliFlower,
  },
  {
    id: 17,
    name: "Dairy Milk Bubbly Choclate",
    description: "",
    price: "Rs. 500",
    image: Choclate,
  },
  {
    id: 18,
    name: "Bisconni Choco Chips",
    description: "",
    price: "Rs. 500",
    image: ChocoChips,
  },
  {
    id: 19,
    name: "Fresh Meat, 500g",
    description: "",
    price: "Rs. 500",
    image: Meat,
  },
];

export const Beautyproducts = [
  {
    id: 6,
    name: "Loreal Body Lotion,500mg",
    description: "",
    price: "Rs. 500",
    image: BeautyFirst,
  },
  {
    id: 7,
    name: "Loreal Shampoo, 500mg",
    description: "",
    price: "Rs. 500",
    image: BeautySecond,
  },
  {
    id: 8,
    name: "Loreal Body Lotion,500mg",
    description: "",
    price: "Rs. 500",
    image: BeautyThird,
  },
  {
    id: 9,
    name: "Loreal Body Lotion,500mg",
    description: "",
    price: "Rs. 500",
    image: BeautyFourth,
  },
  {
    id: 10,
    name: "Loreal Skin Care Face Wash,500mg",
    description: "",
    price: "Rs. 500",
    image: BeautyFifth,
  },
];

export const Gadgetproducts = [
  {
    id: 1,
    name: "Anker Power Bank with two type c ports",
    description: "",
    price: "Rs. 500",
    image: GadgetFirst,
  },
  {
    id: 2,
    name: "Anker Beats Super Bass Headphones",
    description: "",
    price: "Rs. 500",
    image: GadgetSecond,
  },
  {
    id: 3,
    name: "Anker Beats Usb C-Port",
    description: "",
    price: "Rs. 500",
    image: GadgetThird,
  },
  {
    id: 4,
    name: "Anker Beats Microphone",
    description: "",
    price: "Rs. 500",
    image: GadgetFourth,
  },
  {
    id: 5,
    name: "Anker Beats Data Cabel",
    description: "",
    price: "Rs. 500",
    image: GadgetFifth,
  },
];

// Array of category objects
export const categories: Category[] = [
  {
    id: 1,
    name: "Health Care",
    icon: <HealthIcon />,
    productCount: 53,
  },
  {
    id: 2,
    name: "Lifestyle",
    icon: <LifeStyleIcon />,
    productCount: 55,
  },
  {
    id: 3,
    name: "Men Fashion",
    icon: <MenFashionIcon />,
    productCount: 19,
  },
  {
    id: 4,
    name: "Women's Fashion",
    icon: <WomenFashionIcon />,
    productCount: 53,
  },
  {
    id: 5,
    name: "Phone & Computer",
    icon: <PhoneIcon />,
    productCount: 35,
  },
  {
    id: 6,
    name: "Kids",
    icon: <KidsIcon />,
    productCount: 55,
  },
];

export const cartHeadings = [
  { label: "Product", colSpan: 5 },
  { label: "Unit Price", colSpan: 2 },
  { label: "Quantity", colSpan: 2 },
  { label: "SubTotal", colSpan: 2 },
  { label: "Action", colSpan: 1 },
];

 // Navigation links data
export const navLinks = [
    { href: "/", text: "Home" },
    { href: "/categories", text: "Categories" },
    { href: "/product", text: "Shop" },
    { href: "/track", text: "Hot Offers" },
    { href: "/checkout", text: "Contact Us" },
  ];
 
  // Social media icons data
export  const socialIcons = [
    { Icon: InstagramIcon },
    { Icon: TwitterIcon },
    { Icon: TikTokIcon },
  ];


export const Fashionproducts = [
  {
    id: 11,
    name: "Red Shirt Summer Collection",
    description: "",
    price: "Rs. 500",
    image: redshirt,
  },
  {
    id: 12,
    name: "Blue Shirt Summer Collection",
    description: "",
    price: "Rs. 500",
    image: blueshirt,
  },
  {
    id: 13,
    name: "Brown Shirt Summer Collection",
    description: "",
    price: "Rs. 500",
    image: brownshirt,
  },
  {
    id: 14,
    name: "Red Shirt Summer Collection",
    description: "",
    price: "Rs. 500",
    image: redshirt,
  },
  {
    id: 15,
    name: "Blue Shirt Summer Collection",
    description: "",
    price: "Rs. 500",
    image: blueshirt,
  },
];