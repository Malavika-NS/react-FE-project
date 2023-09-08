import { Container, Header, Grid } from 'semantic-ui-react';
import { array, string } from 'prop-types';

import RecipeListItem from './RecipeListItem';

/**
 * Recipe grid with list of recipes
 */
const RecipeList = ({ recipes, searchedQuery }) => {
  return (
    <Container>
      <Header size="huge" textAlign="center">
        Recipe list for
        <span style={{ color: '#2185d0' }}> {searchedQuery}</span>
      </Header>
      <Grid columns={4} doubling>
        {recipes &&
          recipes.map((recipe, index) => (
            <Grid.Column key={`recipe-${index}`}>
              <RecipeListItem recipe={recipe} />
            </Grid.Column>
          ))}
      </Grid>
    </Container>
  );
};

RecipeList.propTypes = {
  /**
   * Array of recipe detials
   */
  recipes: array,
  /**
   * User searched recipe term
   */
  searchedQuery: string,
};

export default RecipeList;
