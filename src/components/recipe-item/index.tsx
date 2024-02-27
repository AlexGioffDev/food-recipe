import { Link } from "react-router-dom";
import { RecipeSearch } from "../../data/type.ts";

export default function RecipeItem({ item }: { item: RecipeSearch }) {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.image_url} alt="recipe item" className="block w-full" />
      </div>
      <div>
        <span className="text-sm text-[#ADA753] font-medium">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-2x truncate text-[#413F45]">
          {item?.title}
        </h3>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="text-sm mt-5 p-3 px-8 rounded-lg uppercase font-bold tracking-wider inline-block shadow-md bg-transparent border border-[#ADA753] text-[#ADA753] hover:border-transparent hover:bg-[#ADA753] hover:text-white transition duration-200 "
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}
