import axios from 'axios';

import { API_URL } from '../constants/constant';

/**
 * Function to fetch recipe list
 * @param {string} searchedQuery
 * @returns array of recipes
 */
export const getRecipes = async (searchedQuery) => {
  try {
    let response = await axios.get(`${API_URL}/search?q=${searchedQuery}`);
    return response.data;
  } catch (error) {
    console.log('Error while calling the api ', error.message);
    return error.response;
  }
};

/**
 * Function to get recipe details
 * @param {string} id
 * @returns details of recipe
 */
export const getRecipeDetails = async (id) => {
  try {
    let response = await axios.get(`${API_URL}/get?rId=${id}`);
    return response.data;
  } catch (error) {
    console.log('Error while calling the api ', error.message);
    return error.response;
  }
};
