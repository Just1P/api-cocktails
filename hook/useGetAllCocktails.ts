import { useEffect, useState } from "react";

export const useGetAllCocktails = (initialLetter = "a") => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${initialLetter}`
        );
        const data = await response.json();
        setCocktails(data.drinks || []);
      } catch (error) {
        console.error("Erreur lors de la récupération des cocktails :", error);
      }
    };

    fetchCocktails();
  }, [initialLetter]);

  return { cocktails };
};
