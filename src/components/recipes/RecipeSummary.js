import { Link } from "react-router-dom";

const Recipe = ({ recipe, removeRecipe }) => {
  return (
    <div className="my-1 px-1 w-full">
      <Link to={`/recipes/${recipe.id}`}>
        <article className="overflow-hidden rounded-lg shadow-lg">
          <span href="#">
            <img
              alt="Placeholder"
              className="block h-auto w-full"
              src={`https://picsum.photos/id/${Math.floor(
                Math.random() * 100
              )}/600/400`}
            ></img>
          </span>

          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <span
                className="no-underline hover:underline text-black"
                href="#"
              >
                {recipe.name}
              </span>
            </h1>
            <p className="text-grey-darker text-sm">{recipe.protein}</p>
          </header>

          <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <span
              className="flex items-center no-underline hover:underline text-black"
              href="#"
            >
              <img
                alt="Placeholder"
                className="block rounded-full"
                src="https://picsum.photos/32/32/?random"
              ></img>
              <p className="ml-2 text-sm">Author Name</p>
            </span>
            <span
              className="no-underline text-grey-darker hover:text-red-dark"
              href="#"
            >
              <span className="hidden">Like</span>
              <i className="fa fa-heart"></i>
            </span>
          </footer>
        </article>
      </Link>
    </div>
  );
};

export default Recipe;
