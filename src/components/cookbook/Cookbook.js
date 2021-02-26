import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Cookbook = (props) => {
  const [cookbook, setCookbook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3001/api/v1/cookbooks/${id}`,
    }).then((res) => {
      setCookbook(res.data);
    });
  }, [id]);

  return (
    <div className="cookbook" key={cookbook.id}>
      <Link to={`/cookbooks/${cookbook.id}`}>
        <h4 className="cookbook-title">{cookbook.name}</h4>
      </Link>
    </div>
  );
};

export default Cookbook;
