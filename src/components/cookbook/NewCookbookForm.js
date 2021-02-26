import React, { useState } from "react";

const NewCookbookForm = (props) => {
  const [cookbook, setCookbook] = useState(props.initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCookbook({ ...cookbook, [name]: value });
    console.log(cookbook);
  };

  return (
    <form
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
        value={cookbook.name}
        onChange={handleInputChange}
      ></input>

      <button>Create cookbook</button>
    </form>
  );
};

export default NewCookbookForm;
