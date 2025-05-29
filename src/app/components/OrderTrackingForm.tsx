export default function OrderTrackingForm() {
  return (
    <div className="w-full max-w-md border border-gray-200 rounded-lg p-6">
      <h1 className="text-4xl font-medium mb-6">Track Your Order</h1>

      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Order Number"
            className="w-full text-sm px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <input
            type="tel"
            placeholder="Enter Phone Number"
            className="w-full text-sm px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition duration-200 ease-in-out"
        >
          Track Order
        </button>
      </form>
    </div>
  );
}
