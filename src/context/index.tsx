import { createContext, useState } from "react";
import React from "react";
import { IValue, RecipeDetail, RecipeSearch, Recipe } from "../data/type";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext<IValue | null>(null);

export default function GlobalState({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchParam, setSearchParam] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [recipeList, setRecipeList] = useState<RecipeSearch[] | []>([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState<
    RecipeDetail | undefined | null
  >(null);
  const [favoritesList, setFavoriteList] = useState<Recipe[] | []>([]);

  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`,
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
        setLoading(false);
        setSearchParam("");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParam("");
    }
  }

  function handleAddToFavorite(getCurrentItem: Recipe) {
    const cpyFavoritesList: Recipe[] = [...favoritesList];
    const index = cpyFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.id,
    );

    if (index === -1) {
      cpyFavoritesList.push(getCurrentItem);
    } else {
      cpyFavoritesList.splice(index);
    }

    setFavoriteList(cpyFavoritesList);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorite,
        favoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
