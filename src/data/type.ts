export interface IValue {
  searchParam: string;
  setSearchParam: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  loading: boolean;
  recipeList: RecipeSearch[];
  recipeDetailsData: RecipeDetail | null | undefined;
  setRecipeDetailsData: React.Dispatch<
    React.SetStateAction<RecipeDetail | null | undefined>
  >;
}

export interface RecipeSearchResult {
  status: string;
  results: number;
  data: ResultSearch;
}

export interface ResultSearch {
  recipes: RecipeSearch[];
}

export interface RecipeSearch {
  publisher: string;
  image_url: string;
  title: string;
  id: string;
}

export interface RecipeDetailResult {
  status: string;
  data: RecipeDetail;
}

export interface RecipeDetail {
  recipe: Recipe;
}

export interface Recipe {
  publisher: string;
  ingredients: Ingredient[];
  source_url: string;
  image_url: string;
  title: string;
  servings: number;
  cooking_time: number;
  id: string;
}

export interface Ingredient {
  quantity: number;
  unit: string;
  description: string;
}
