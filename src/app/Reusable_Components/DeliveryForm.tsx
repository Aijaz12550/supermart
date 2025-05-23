"use clientS"
import React, { useState } from 'react'
import { ChevronDown, Eye } from "lucide-react"
import { DropDownIcon, InfoIcon } from '../components/Icon'


const DeliveryForm = () => {
    const [saveInformation, setSaveInformation] = useState(false)
    
  return (
    <>
      <section className="mb-6">
        <h2 className="text-lg font-medium mb-3">Delivery</h2>

        {/* Country/Region Dropdown */}
        <div className="relative mb-3">
          <div
            className="w-full p-3 border border-gray-300 rounded-md flex justify-between items-center cursor-pointer"
          >
            <span className="text-gray-500">Country/Region</span>
            <DropDownIcon/>
          </div>

        </div>

        {/* Name Fields */}
        <div className="flex flex-col md:flex-row gap-3 mb-3">
          <input
            type="text"
            placeholder="First Name"
            className="flex-1 p-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {/* Address Fields */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="Address"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            placeholder="Apartment, suite etc."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-3 mb-3">
          <input
            type="text"
            placeholder="City"
            className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Postal Code"
            className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {/* Phone Field */}
        <div className="relative mb-3">
          <input
            type="text"
            placeholder="Phone"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent pr-10"
          />
          <InfoIcon/>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="saveInformation"
            checked={saveInformation}
            onChange={() => setSaveInformation(!saveInformation)}
            className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
          />
          <label htmlFor="saveInformation" className="ml-2 text-sm">
            Save this information for next time
          </label>
        </div>
      </section>
    </>
  )
}

export default DeliveryForm
