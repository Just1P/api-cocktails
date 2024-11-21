import { useEffect, useState } from "react";

export const useGethCocktailById = (id) => {
  const [cocktail, setCocktail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchCocktail = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        if (!response.ok) {
          throw new Error(
            "Erreur lors de la récupération des détails du cocktail"
          );
        }

        const data = await response.json();
        setCocktail(data?.drinks?.[0] || null);
      } catch (err) {
        setError(err.message || "Une erreur s'est produite.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCocktail();
  }, [id]);

  return { cocktail, isLoading, error };
};
