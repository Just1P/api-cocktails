import { useEffect, useState } from "react";

export const useGetIngredients = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
        );
        const data = await response.json();
        setIngredients(data?.drinks?.slice(0, 6) || []);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des ingrédients :",
          error
        );
      }
    })();
  }, []);

  return ingredients;
};
