import { useEffect, useState } from "react";

export const useGetAllCocktails = (initialLetter = "a") => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCocktails = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${initialLetter}`
        );
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des cocktails");
        }
        const data = await response.json();
        setCocktails(data.drinks || []);
      } catch (err) {
        setError(err.message || "Une erreur s'est produite.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCocktails();
  }, [initialLetter]);

  return { cocktails, isLoading, error };
};
