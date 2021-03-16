import { Link } from "react-router-dom";
import { IoMdBook } from "react-icons/io";
// import { CgBowl } from "react-icons/cg";

const truncateString = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};

const Recipe = ({ recipe, removeRecipe, onMenu }) => {
  return (
    <div className="my-1 px-1 w-full">
      <article
        className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:shadow-2xl ..."
        onDoubleClick={() => onMenu(recipe.id)}
      >
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
              >
                {truncateString(recipe.name, 18)}
              </span>
            </h1>
          </Link>
        </header>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <span className="flex items-center" href="#">
            <IoMdBook />
            <p className="ml-2 text-sm">{recipe.cookbook_name}</p>
          </span>
          <label>
            <input type="checkbox" value={recipe.on_the_menu} />
          </label>
        </footer>
      </article>
    </div>
  );
};

export default Recipe;
