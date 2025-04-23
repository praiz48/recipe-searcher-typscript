import RecipeCard from "./RecipeCard";
import { Recipe } from "../types";
type RecipeListProps = {
  Recipes: Array<Recipe>;
};
const RecipeList = ({ Recipes }: RecipeListProps) => {
  if (Recipes.length === 0) {
    return <div style={{ textAlign: "center" }}>No recipes found</div>;
  }

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
          backgroundColor: "#fffaf0", // Light cream background for a cooking vibe
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for a cozy feel
        }}
      >
        {Recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
