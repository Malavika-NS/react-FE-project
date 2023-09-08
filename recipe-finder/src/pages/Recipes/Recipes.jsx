import { useEffect, useState } from 'react';

import Search from '../../components/Search';
import RecipeList from '../../components/RecipeList';
import { getRecipes } from '../../services/api';

import * as S from './Recipes.styles';

const DEFAULT_SEARCH_TERM = 'tomato';

/**
 * Recipe Search Page
 */
const Recipes = () => {
  const searchTerm = localStorage.getItem('searchTerm');

  const [searchedQuery, setSearchedQuery] = useState(
    searchTerm || DEFAULT_SEARCH_TERM
  );
  const [recipes, setRecipes] = useState();

  /**
   * Invokes api to fetch recipe list on new search
   */
  useEffect(() => {
    getRecipeList();
    localStorage.setItem('searchTerm', searchedQuery);
  }, [searchedQuery]);

  /**
   * Function to fetch recipe list
   */
  const getRecipeList = async () => {
    let result = await getRecipes(searchedQuery);
    if (result && result.recipes) {
      setRecipes(result.recipes);
    } else {
      setRecipes([]);
    }
  };

  return (
    <S.Container>
      <Search
        setSearchedQuery={setSearchedQuery}
        defaultSearchTerm={searchedQuery}
      />
      {recipes?.length === 0 ? (
        <h1>No recipes found for ${searchedQuery}!</h1>
      ) : (
        <RecipeList recipes={recipes} searchedQuery={searchedQuery} />
      )}
    </S.Container>
  );
};

export default Recipes;
