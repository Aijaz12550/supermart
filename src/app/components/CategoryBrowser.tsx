import { categories } from "../assets/data";
import Arrowslider from "../Reusable_Components/Arrow-Slider";

const CategoryBrowser: React.FC = () => {
  return (
    <div className="mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-4xl font-bold ">Browse All Categories</h2>
        <p className="text-gray-600 text-base font-light mt-2">
          Lorem ipsum dolor sit amet consectetur. Blandit dolor nunc et a
          faucibus sed risus fringilla urna.
        </p>
      </div>

      <div className="relative">
        {/* Category grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="border-gray-50 border-2 rounded-lg px-2 py-8 flex flex-col items-center"
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="font-medium text-xl text-center">{category.name}</h3>
              <p className="text-sm font-light text-gray-500 mt-1 flex justify-center items-center gap-2">
                <span className="w-[5px] h-[5px] bg-[#FF7B02] rounded-full inline-block "></span>
                {category.productCount} Products
              </p>
            </div>
          ))}
        </div>

        {/* Navigation controls */}
        <Arrowslider/>
      </div>
    </div>
  );
};

export default CategoryBrowser;
