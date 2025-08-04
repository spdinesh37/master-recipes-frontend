import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    Axios.get("https://recipe-management-software-production.up.railway.app/recipes/1")
      .then((res) => {
        setRecipe(res.data);
      })
      .catch((err) => {
        console.error("Axios error:", err.message);
      });
  }, []);

  return (
    <div className="App">
      <h1>Recipe Card</h1>
      <div className="card-container">
        {!recipe && <p>Loading recipe...</p>}
        {recipe && (
          <div className="card" key={recipe.id}>
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <p><strong>Cook Time:</strong> {recipe.cookTime} minutes</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
