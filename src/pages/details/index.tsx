import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Details() {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFavorite,
    favoritesList,
  } = useContext(GlobalContext)!;

  useEffect(() => {
    async function getRecipeDetails() {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`,
      );
      const data = await res.json();

      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    }

    getRecipeDetails();
  }, [id, setRecipeDetailsData]);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-1 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData?.recipe.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-[#A76D5E] font-medium">
          {recipeDetailsData?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-[#A76D5E]">
          {recipeDetailsData?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorite(recipeDetailsData!.recipe)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium bg-transparent border border-[#A76D5E] text-[#A76D5E] tracking-wider mt-3 inline-block shadow-md"
          >
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe?.id,
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
        </div>
        <div className="flex flex-col lg:col-start-1">
          <div className="overflow-x-auto">
            <div className="py-2 inline-block min-w-full">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-[#A76D5E] border-b">
                    <tr>
                      <th
                        scope="col"
                        className=" text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Ingredients
                      </th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {recipeDetailsData?.recipe?.ingredients.map(
                      (ingredient, index) => (
                        <tr
                          key={index}
                          className="bg-white border-b transition duration-300 ease-in-out hover:bg-[#A76D5E]/30"
                        >
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {ingredient.quantity ? ingredient.quantity : "-"}
                            {ingredient.unit && ingredient.unit}
                          </td>
                          <td className="text-sm text-gray-900 font-light max-w-[25%] text-wrap  px-6 py-4 whitespace-nowrap">
                            {ingredient.description}
                          </td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
