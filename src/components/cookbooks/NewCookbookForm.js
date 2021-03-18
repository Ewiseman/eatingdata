import React, { useState } from "react";

const NewCookbookForm = (props) => {
  const [cookbook, setCookbook] = useState(props.initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCookbook({ ...cookbook, [name]: value });
    console.log(cookbook);
  };

  return (
    <div className="align-content: center h-48 flex flex-wrap content-center ...">
      <form
        className="form bg-white p-6 my-10 relative"
        onSubmit={(event) => {
          event.preventDefault();
          if (!cookbook.name) return;
          props.addCookbook(cookbook);
          setCookbook(props.initialFormState);
        }}
      >
        <label>Cookbook</label>

        <input
          type="text"
          name="name"
          placeholder="Cookbook Name"
          value={cookbook.name}
          onChange={handleInputChange}
          className="border p-2 w-full mt-3 rounded-md"
        ></input>

        <button className="w-full mt-6 bg-pink-600 hover:bg-pink-500 text-white font-semibold p-3 rounded-md">
          Create Cookbook
        </button>
      </form>
    </div>
  );
};

export default NewCookbookForm;
