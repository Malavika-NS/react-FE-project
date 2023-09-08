import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders the NavBar component', () => {
    const { getByTestId } = render(<App />);
    const navBar = getByTestId('navbar');
    expect(navBar).toBeInTheDocument();
  });

  it('renders the Home component for the "/" route', () => {
    const { getByText } = render(<App />);
    const homeText = getByText('SEARCH RECIPES');
    expect(homeText).toBeInTheDocument();
  });

  it('renders the Recipes component for the "/search" route', () => {
    window.history.pushState({}, '', '/search');
    const { getByText } = render(<App />);
    const recipesText = getByText('Search for recipes', { exact: false });
    expect(recipesText).toBeInTheDocument();
  });

  it('renders the RecipeDetails component for the "/recipes/:recipeId" route', () => {
    window.history.pushState({}, '', '/recipes/54439');
    const { getByText } = render(<App />);
    const recipeDetailsText = getByText('Recipes');
    expect(recipeDetailsText).toBeInTheDocument();
  });
});
