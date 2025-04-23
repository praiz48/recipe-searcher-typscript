import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import { Recipe } from "./types";
function App() {
  const [recipes, setRecipes] = useState<Recipe[] | []>([]);
  const [searchTerm, setSearchTerm] = useState("rice");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //const [noresults, setNoResults] = useState(false);
  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();
        setRecipes(data.meals || []);
        setError("");
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (searchTerm) {
      fetchRecipes();
    }
  }, [searchTerm]);
  return (
    <>
      <div className="App">
        <header>
          <h1>Recipe Search</h1>
          <SearchBar onSearch={setSearchTerm} />
        </header>

        <main>
          {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {!loading && !error && <RecipeList Recipes={recipes} />}
        </main>
      </div>
    </>
  );
}

export default App;
