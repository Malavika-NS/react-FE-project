import { Container, Header, Grid } from 'semantic-ui-react';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({ recipes, searchedQuery }) => {
  return (
    <Container>
      <Header size="huge" textAlign="center">
        Recipe list for
        <span style={{ color: '#2185d0' }}> {searchedQuery}</span>
      </Header>
      <Grid columns={4} doubling>
        {recipes &&
          recipes.map((recipe) => (
            <Grid.Column>
              <RecipeListItem recipe={recipe} />
            </Grid.Column>
          ))}
      </Grid>
    </Container>
  );
};

export default RecipeList;
