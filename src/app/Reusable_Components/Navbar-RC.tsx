import {  ReactNode, FC } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

type SocialIconProps = {
  Icon: FC;
  href?: string;
};

// Define types for components
type NavLinkProps = {
  href: string;
  children: ReactNode;
};

// Additional reusable components
type UserControlProps = {
  Icon: FC;
  title: string;
  subtitle: string;
};


// Reusable components
const NavLink: FC<NavLinkProps> = ({ href, children }) => (
  <Link href={href} className="text-base font-light relative group">
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5"></span>
  </Link>
);

const SocialIcon: FC<SocialIconProps> = ({ Icon, href = "#" }) => (
  <a href={href} className="text-gray-600 hover:text-gray-900">
    <Icon />
  </a>
);


const UserControl: FC<UserControlProps> = ({ Icon, title, subtitle }) => (
  <div className="flex items-center">
    <div className="p-1 mr-1 text-gray-700 bg-gray-100 rounded-full sm:mr-2">
      <Icon />
    </div>
    <div className="flex flex-col text-xs">
      <span className="text-sm md:text-base font-light">{title}</span>
    </div>
  </div>
);

const CartComponent: FC<UserControlProps> = ({ Icon, title }) => {
  const { totalQuantity } = useCart();

  return (
    <Link href="/cart" className="flex items-center">
      <div className="p-1 mr-1 text-gray-700 bg-gray-100 rounded-full sm:mr-2">
        <Icon />
      </div>
      <div className="flex flex-col text-xs">
        <span className="mb-1 flex h-5 min-w-[24px] items-center justify-center rounded-full bg-black px-1.5 text-xs font-medium text-white">
          {totalQuantity}
        </span>
        <span className="text-sm md:text-base font-light">{title}</span>
      </div>
    </Link>
  );
};
const ContactInfo: FC = () => (
  <div className="hidden lg:items-center lg:flex">
    <span className="mr-2 text-sm font-light">Get In Touch</span>
    <span className="text-base font-medium">+92 345 662 7789</span>
  </div>
);

export { NavLink, SocialIcon, UserControl, ContactInfo,CartComponent };
