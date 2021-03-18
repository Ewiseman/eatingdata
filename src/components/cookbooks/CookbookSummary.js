import { Link } from "react-router-dom";

const setCookbooks = ({ cookbook, removeCookbook }) => {
  return (
    <div className="cookbook" key={cookbook.id}>
      <Link to={`/cookbooks/${cookbook.id}`}>
        <h4 className="cookbook-title">{cookbook.name}</h4>
      </Link>
      <p>{cookbook.recipes}</p>

      <button
        onClick={() => removeCookbook(cookbook.id)}
        className="mt-6 bg-pink-600 hover:bg-pink-500 text-white font-semibold p-3 rounded-md"
      >
        Remove
      </button>
    </div>
  );
};

export default setCookbooks;
