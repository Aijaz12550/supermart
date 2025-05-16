// components/ServiceFeatures.tsx
import { CustomerSupport, Payment, FreeReturn, FastShipping } from "../components/Icon"

export default function ServiceFeatures() {
  return (
    <div className="md:col-span-1 space-y-6 h-fit bg-[#F8F8F8] p-4  rounded-md border border-[#F8F8F8]">
      <Feature icon={<FastShipping />} title="Fast Shipping" desc="Shipped in 1-3 Days" />
      <Feature icon={<FreeReturn />} title="Free Returns" desc="Free 7 Days Return" />
      <Feature icon={<Payment />} title="Payment On Delivery" desc="Cash On Delivery Option" />
      <Feature icon={<CustomerSupport />} title="Customer Support" desc="Phone and Email" />
    </div>
  )
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-start">
      <div className="mr-4 mt-1">{icon}</div>
      <div>
        <h3 className="font-medium text-base text-gray-900">{title}</h3>
        <p className="text-gray-500 text-xs font-light">{desc}</p>
      </div>
    </div>
  )
}
