import React, { useState } from "react";
import Error from "../error/Error";

const Form = ({saveSearch}) => {
  const [word, saveWord] = useState("");
  const [error, saveError] = useState(false);

  const searchImage = (e) => {
    e.preventDefault();

    if (word.trim() === "") {
      saveError(true);
      return;
    }

    saveError(false);
    saveSearch(word);
  };

  return (
    <form action="" onSubmit={searchImage}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            placeholder="Coffee, Computer, Car, Plane..."
            className="form-control form-control-lg"
            onChange={(e) => saveWord(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn bn-lg btn-danger btn-block"
            value="SEARCH"
          />
        </div>
      </div>

      {error ? <Error message="add a word"></Error> : null}
    </form>
  );
};

export default Form;
