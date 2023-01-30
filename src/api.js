import { API_KEY, API_URL } from "./config";

const getMealById = async (id) => {
    const response = await fetch(API_URL + API_KEY + 'lookup.php?i=' + id);
    return await response.json();
};

const getAllCategories = async () => {
    const response = await fetch(API_URL + API_KEY + 'categories.php');
    return await response.json();
}

const getFilteredCategory = async (CATEGORY_NAME) => {
    const response = await fetch(API_URL + API_KEY + 'filter.php?i=' + CATEGORY_NAME)
    return await response.json()
}

export {getMealById, getAllCategories, getFilteredCategory}
