import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const truncateString = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};

const Cookbook = () => {
  const [cookbook, setCookbook] = useState({ recipes: [] });
  const { id } = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3001/api/v1/cookbooks/${id}.json`,
    }).then((res) => {
      setCookbook(res.data);
    });
  }, [id]);

  return (
    <div className="cookbook">
      <br />
      <br />
      <br />
      <br />
      <div className="container my-12 mx-auto px-4 md:px-12">
        <h1 className="cookbook-title text-lg">{cookbook.name}</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {cookbook.recipes.map((recipe) => (
            <div key={recipe.id} className="my-1 px-1 w-full">
              <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:shadow-2xl ...">
                <Link to={`/recipes/${recipe.id}`}>
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src={`https://picsum.photos/id/${Math.floor(
                      Math.random() * 30
                    )}/600/400`}
                  ></img>
                </Link>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <Link to={`/recipes/${recipe.id}`}>
                    <h1 className="text-lg text-left">
                      <span
                        className="no-underline hover:underline text-black"
                        href="#"
                      ></span>
                      {truncateString(recipe.name, 18)}
                    </h1>
                  </Link>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <span className="flex items-center" href="#">
                    <p className="ml-2 text-sm">{recipe.cookbook_name}</p>
                  </span>
                </footer>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cookbook;
