import { useEffect, useState } from "react";

export const useGetCocktails = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
        );
        const data = await response.json();
        setCocktails(data?.drinks?.slice(0, 6) || []);
      } catch (error) {
        console.error("Erreur lors de la récupération des cocktails :", error);
      }
    })();
  }, []);

  return cocktails;
};
