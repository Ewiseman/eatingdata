import { Link } from "react-router-dom";

const truncateString = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};

const Recipe = ({ recipe, removeRecipe }) => {
  return (
    <div className="my-1 px-1 w-full">
      <Link to={`/recipes/${recipe.id}`}>
        <article className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:shadow-2xl ...">
          <span href="#">
            <img
              alt="Placeholder"
              className="block h-auto w-full"
              src={`https://picsum.photos/id/${Math.floor(
                Math.random() * 30
              )}/600/400`}
            ></img>
          </span>

          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <span
                className="no-underline hover:underline text-black"
                href="#"
              >
                {truncateString(recipe.name, 18)}
              </span>
            </h1>
            <p className="text-grey-darker text-sm">{recipe.protein}</p>
          </header>

          <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <span className="flex items-center" href="#">
              <img
                alt="Placeholder"
                className="block rounded-full"
                src="https://picsum.photos/32/32/?random"
              ></img>
              <p className="ml-2 text-sm">{recipe.cookbook_name}</p>
            </span>
          </footer>
        </article>
      </Link>
    </div>
  );
};

export default Recipe;
