import { Button, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled(Card)`
  height: 100%;

  &.card > .content.cta {
    flex-grow: 0;
    margin-top: auto;
  }
`;

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

export default RecipeListItem;
