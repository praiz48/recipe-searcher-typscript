import { Recipe } from "../types"; // Adjusted the path to match the relative location of the Recipe type file
type RecipeListProps = {
  recipe: Recipe;
};
const RecipeCard = ({ recipe }: RecipeListProps) => {
  return (
    <div
      className="recipe-card"
      style={{
        border: "2px solid #f5c518",
        borderRadius: "12px",
        padding: "16px",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
        textAlign: "center",
        maxWidth: "320px",
        margin: "16px auto",
        backgroundColor: "#fff8e1",
        fontFamily: "'Caveat', cursive",
      }}
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "12px",
          marginBottom: "12px",
          border: "2px solid #f5c518",
        }}
      />
      <h3
        style={{
          margin: "8px 0",
          fontSize: "1.5rem",
          color: "#d35400",
          fontFamily: "'Pacifico', cursive",
        }}
      >
        {recipe.strMeal}
      </h3>
      <p
        style={{
          margin: "4px 0",
          fontSize: "1rem",
          color: "#6c757d",
          fontStyle: "italic",
        }}
      >
        Category: {recipe.strCategory}
      </p>
      <p
        style={{
          margin: "4px 0",
          fontSize: "1rem",
          color: "#6c757d",
          fontStyle: "italic",
        }}
      >
        Area: {recipe.strArea}
      </p>
      <a
        href={`https://www.themealdb.com/meal/${recipe.idMeal}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "12px",
          padding: "10px 20px",
          backgroundColor: "#e67e22",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "8px",
          fontSize: "1rem",
          fontWeight: "bold",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        View Recipe
      </a>
    </div>
  );
};

export default RecipeCard;
