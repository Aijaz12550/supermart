"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { useRouter } from "next/navigation";
import {
  SearchIcon,
  AccountIcon,
  CartIcon,
  HamburgerIcon,
  ArrowDownIcon,
} from "./Icon";
import {
  ContactInfo,
  NavLink,
  SocialIcon,
  UserControl,
  CartComponent,
} from "../Reusable_Components/Navbar-RC";
import { navLinks, socialIcons } from "../assets/data";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <header className="w-full">
      {/* Top navbar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Site Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </Link>

        {/* Search - Full width on mobile, normal on desktop */}
        <div className="order-3 w-full mt-4 md:order-2 md:w-auto md:flex-1 md:mt-0 md:max-w-md md:mx-4 lg:max-w-lg">
          <div className="flex w-full">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center px-2 border-r border-gray-300">
                <span className="text-sm font-light text-gray-600 sm:text-sm">
                  Category
                </span>
                <ArrowDownIcon />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 pl-28 pr-10 text-sm border border-gray-300 rounded-l-md focus:outline-none"
                placeholder="what are you looking for..."
              />
            </div>
            {/* Search button */}
            <button
              onClick={handleSearch}
              className="px-2 py-2 text-xs text-white bg-orange-500 rounded-r-md hover:bg-orange-600 transition-colors duration-200 sm:px-4 sm:text-sm"
            >
              <SearchIcon />
            </button>
          </div>
        </div>

        {/* Social Media - Hidden on mobile, visible on medium screens */}
        <div className="hidden md:flex items-center space-x-3 order-3 md:order-3 lg:ml-4">
          <span className="font-medium text-xs text-[#929292]">
            Follow us on
          </span>
          {socialIcons.map((social, index) => (
            <SocialIcon key={index} Icon={social.Icon} />
          ))}
        </div>

        {/* Account & Cart */}
        <div className="flex items-center space-x-2 md:space-x-4 order-2 md:order-4">
          <UserControl
            Icon={AccountIcon}
            title="Account"
            subtitle="Sign In/ Register"
          />
          <CartComponent Icon={CartIcon} title="Cart" subtitle="" />
        </div>
      </div>

      {/* Bottom navbar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2 shadow-md">
        {/* Categories dropdown */}
        <div className="relative">
          <button
            className="flex items-center px-2 py-2 text-xs text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors duration-200 sm:px-3 sm:text-sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            <HamburgerIcon open={false} />
            <span className="px-2 text-base font-light">Browse Categories</span>
            <ArrowDownIcon />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-600 rounded-md hover:bg-gray-100"
          >
            <HamburgerIcon open={false} />
          </button>
        </div>

        {/* Navigation links - Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.href}>
              {link.text}
            </NavLink>
          ))}
        </nav>

        {/* Contact info */}
        <ContactInfo />
      </div>

      {/* Mobile menu */}
      <div
        className={`px-4 py-2 border-b md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden border-none"
        }`}
      >
        <nav className="flex flex-col space-y-3 py-3">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href} className="text-sm font-medium">
              {link.text}
            </Link>
          ))}

          {/* Social Media in mobile menu */}
          <div className="pt-2 mt-2 border-t">
            <div className="flex items-center space-x-3 py-2">
              <span className="text-xs text-gray-600">Follow us on</span>
              <div className="flex space-x-3">
                {socialIcons.map((social, index) => (
                  <SocialIcon key={index} Icon={social.Icon} />
                ))}
              </div>
            </div>
          </div>

          <div className="pt-2 mt-2 border-t">
            <div className="flex items-center">
              <span className="mr-2 text-sm font-light">Get In Touch</span>
              <span className="text-base font-medium">+92 345 662 7789</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
