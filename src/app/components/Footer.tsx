import Image from 'next/image'
import React from 'react'
import logo from "../assets/logo.png"
import Link from 'next/link'
import {XIcon, FaceBookIcon, InstaIcon, TiktokIcon, CallIcon, MailIcon} from '../components/Icon'

const Footer = () => {
  return (
    <div className="pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto  px-4 md:px-8">
        <div className="mb-16 grid grid-cols-2 gap-12  pt-10 md:grid-cols-5  lg:gap-8 lg:pt-12">
          <div className="col-span-full lg:col-span-2">
            <div className=" w-fit mb-4 h-20 px-1  flex items-center justify-center">
              <Image
                src={logo}
                alt="Logo"
                className="object-contain"
                width={150}
                height={50}
                priority
              />
            </div>
            <p className="mb-6 text-black font-medium text-sm sm:pr-8"> Lorem ipsum dolor sit amet consectetur. Nisi pellentesque tortor iaculis ut non magna in pharetra. Aenean fermentum tortor mauris ultricies nec. Mauris elementum risus etiam gravida sit turpis non. Ligula quis amet non eu justo massa sit blandit in.</p>
            <div className="flex gap-4">

                
              <Link  href="" target="_blank" className="text-black">
              <FaceBookIcon/>
              </Link>

              <Link  href="" target="_blank" className="text-black">
              <InstaIcon/>
              </Link>

              <Link  href="https://www.linkedin.com/in/muhammad-salman-158213287/" target="_blank" className="text-black">
              <XIcon/>
              </Link>

              <Link  href="https://github.com/Salman-Aijaz/" target="_blank" className="text-black">
              <TiktokIcon/>
              </Link>
            </div>
          </div>

          <div>
            <div className="mb-4 font-medium text-sm uppercase   text-[#828282]">My Account</div>

            <nav className="flex flex-col gap-4 font-medium text-base">
              <div>
                <Link href="#" className="text-black">Tracking Order</Link>
              </div>

              <div>
                <Link href="#" className="text-black">Shipping</Link>
              </div>

              <div>
                <Link href="#" className="text-black">WishList</Link>
              </div>

              <div>
                <Link href="#" className="text-black">My Account</Link>
              </div>

              
              <div>
                <Link href="#" className="text-black">Order History</Link>
              </div>

              
              <div>
                <Link href="#" className="text-black">Returns</Link>
              </div>
            </nav>
          </div>
          <div>

            <div className="mb-4 font-medium text-sm uppercase  text-[#828282]">Information</div>
            <nav className="flex flex-col gap-4 font-medium text-base">
              <div>
                <Link href="#" className="text-black  ">Our Story</Link>
              </div>

              <div>
                <Link href="#" className="text-black  ">Career</Link>
              </div>

              <div>
                <Link href="#" className="text-black  ">Privacy Policy</Link>
              </div>

              <div>
                <Link href="#" className="text-black  ">Terms & Condition</Link>
              </div>

              
              <div>
                <Link href="#" className="text-black ">Latest News</Link>
              </div>

              
              <div>
                <Link href="#" className="text-black">Contact Us</Link>
              </div>
            </nav>
          </div>

          <div>
            <div className="mb-4 font-medium text-sm uppercase  text-[#828282]">Talk To Us</div>
            <nav className="flex flex-col gap-4 font-medium text-base">
              <div className='flex items-center gap-3 '>
               <CallIcon/>
                <Link href="#" className="text-black">+92 345 6627789</Link>
              </div>

              <div className='flex items-center gap-3'>
                <MailIcon/>
                <Link href="#" className="text-black">supermart@support.com</Link>
              </div>

            </nav>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default Footer