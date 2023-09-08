import { Link } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react';
import { object } from 'prop-types';
import styled from 'styled-components';

/**
 * Styled Recipe Card
 */
const CardContainer = styled(Card)`
  height: 100%;

  &.card > .content.cta {
    flex-grow: 0;
    margin-top: auto;
  }
`;

/**
 * Recipe card component
 * Displays image, title and other details
 */
const RecipeListItem = ({ recipe }) => {
  return (
    <CardContainer>
      <img
        src={recipe.image_url}
        alt="recipe thumbnail"
        style={{ height: 170 }}
      />
      <Card.Content className="title">
        <Card.Header content={recipe.title} />
      </Card.Content>
      <Card.Content className="cta">
        <Button
          as={Link}
          to={`/recipes/${recipe.recipe_id}`}
          content="Recipe"
          color="blue"
          size="tiny"
        />
        <Button
          href={recipe.source_url}
          target="_blank"
          content="Original article"
          color="green"
          size="tiny"
        />
      </Card.Content>
    </CardContainer>
  );
};

RecipeListItem.propTypes = {
  /**
   * Details about the recipe
   */
  recipe: object,
};

export default RecipeListItem;
