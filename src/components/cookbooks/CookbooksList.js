import React, { useState, useEffect } from "react";
import axios from "axios";
import NewCookbookForm from "./NewCookbookForm";
import CookbookSummary from "./CookbookSummary";

const CookbooksList = (props) => {
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/cookbooks.json")
      .then((res) => setCookbooks(res.data));
  }, []);

  const [cookbooks, setCookbooks] = useState([]);

  const initialFormState = {
    name: "",
  };

  // ADD RECIPE //
  const addCookbook = (cookbook) => {
    axios
      .post(
        "http://localhost:3001/api/v1/cookbooks",
        { cookbook },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        setCookbooks([...cookbooks, res.data]);
      })
      .catch((error) => console.log(error));
  };

  // REMOVE RECIPE //
  const removeCookbook = (id) => {
    console.log("delete", id);
    axios
      .delete("http://localhost:3001/api/v1/cookbooks/" + id)
      .then((res) => {
        setCookbooks(cookbooks.filter((cookbook) => cookbook.id !== id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="App">
      <div>
        <h1>Cookbooks</h1>
        <hr />
        <br />
        <NewCookbookForm
          addCookbook={addCookbook}
          initialFormState={initialFormState}
        />
      </div>
      <br />
      <hr />
      <br />
      <div className="cookbooks-list">
        {cookbooks.map((cookbook, _) => (
          <CookbookSummary
            key={cookbook.id}
            cookbook={cookbook}
            removeCookbook={removeCookbook}
          />
        ))}
      </div>
    </section>
  );
};
export default CookbooksList;
