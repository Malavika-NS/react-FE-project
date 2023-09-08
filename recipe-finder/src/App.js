import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';

import Home from './pages/Home/Home';
import Recipes from './pages/Recipes/Recipes';
import RecipeDetails from './pages/Recipes/RecipeDetails';

import './App.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Recipes />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
