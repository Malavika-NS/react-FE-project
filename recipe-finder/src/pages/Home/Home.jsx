import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import * as S from './Home.styles.js';

const Home = () => {
  return (
    <S.BackgroundImage>
      <S.Container>
        <S.Title>Recipe Finder</S.Title>
        <Button
          content="SEARCH RECIPES"
          color="blue"
          as={Link}
          to="/search"
          size="big"
        />
      </S.Container>
    </S.BackgroundImage>
  );
};

export default Home;
