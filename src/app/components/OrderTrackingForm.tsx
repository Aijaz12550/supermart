"use client"

import React, { useState, useEffect } from "react"
import { Package, Truck, CheckCircle, AlertCircle, Printer } from "lucide-react"

export default function OrderTrackingForm() {
  const [orderNumber, setOrderNumber] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [trackingResult, setTrackingResult] = useState<{
    id: string
    status: string
    date: string
  } | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [realTrackingId, setRealTrackingId] = useState("")

  // Load the real tracking ID from localStorage on mount
  useEffect(() => {
    const storedId = localStorage.getItem("tracking_id")
    if (storedId) {
      setRealTrackingId(storedId)
      setOrderNumber(storedId)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")

    if (!orderNumber || !phoneNumber) {
      alert("Please enter all fields.")
      return
    }

    if (orderNumber !== realTrackingId) {
      setTrackingResult(null)
      setErrorMessage("❌ This is not a valid tracking ID. Please enter the correct one.")
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      const statusOptions = ["dispatched", "in transit", "out for delivery", "delivered"]
      const fakeStatus = statusOptions[Math.floor(Math.random() * statusOptions.length)]

      setTrackingResult({
        id: orderNumber,
        status: fakeStatus,
        date: new Date().toLocaleDateString(),
      })
      setIsLoading(false)
    }, 1000)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case "out for delivery":
        return <Truck className="w-5 h-5 text-blue-500" />
      case "in transit":
        return <Package className="w-5 h-5 text-yellow-500" />
      case "dispatched":
        return <Package className="w-5 h-5 text-orange-500" />
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="border border-gray-200 rounded-lg p-6">
        <h1 className="text-4xl font-medium mb-6">Track Your Order</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Order Number"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              className={`w-full text-sm px-4 py-3 rounded-lg border ${
                errorMessage ? "border-red-500" : "border-gray-200"
              } focus:outline-none focus:ring-2 focus:ring-green-500`}
              required
            />
          </div>

          <div>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full text-sm px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white font-medium py-3 px-4 rounded-lg transition duration-200 ease-in-out"
          >
            {isLoading ? "Tracking..." : "Track Order"}
          </button>
        </form>
      </div>

      {trackingResult && (
        <div className="border-2 border-green-100 rounded-lg p-6 bg-white print:border-none">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Tracking Result</h3>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-200 print:hidden"
            >
              <Printer className="w-4 h-4" />
              Print
            </button>
          </div>

          <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-3 mb-2">
              {getStatusIcon(trackingResult.status)}
              <p className="text-lg font-medium">
                Your tracking ID is <span className="font-bold">{trackingResult.id}</span>
              </p>
            </div>
            <p className="text-green-700">
              Your product is <span className="font-bold">{trackingResult.status}</span>
            </p>
          </div>

          <div className="text-sm text-gray-500">
            <p>Last updated: {trackingResult.date}</p>
            <p className="mt-2">Thank you for shopping with us!</p>
          </div>
        </div>
      )}
    </div>
  )
}
