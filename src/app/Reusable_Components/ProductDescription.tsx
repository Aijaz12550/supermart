export default function ProductDescription() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-medium text-gray-900 mb-6">Descriptions</h2>
      <div className="space-y-6 text-gray-700 border-t border-gray-200">
        {[1, 2, 3].map((_, i) => (
          <p key={i} className={i === 2 ? "border-b border-gray-200 pb-4 pt-4 font-light text-base" : "pt-4"}>
            Experience the sweetness and vibrant color of red bell peppers, a delicious addition to any dish. Known for
            their juicy flesh and mild flavor, these peppers are perfect for snacking, sautéing, or adding to salads.
            Rich in vitamins A and C, red bell peppers support immune health and promote glowing skin. Enjoy them fresh
            as a crunchy snack, roasted for a smoky flavor, or stuffed with your favorite fillings. Their versatility
            and sweetness make red bell peppers a favorite in kitchens worldwide!
          </p>
        ))}
      </div>
    </div>
  )
}
