import { CgClose } from "react-icons/cg";
const setIngredients = ({ ingredient, removeIngredient }) => {
  return (
    <div className="ingredient" key={ingredient.id}>
      <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
        <span>
          {ingredient.name}
          <button onClick={() => removeIngredient(ingredient.id)}>
            <CgClose />
          </button>
        </span>
      </span>
    </div>
  );
};

export default setIngredients;
