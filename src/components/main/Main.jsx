import React, { useState, useEffect } from "react";
import Form from "../form/Form";
import ListImages from "../listImages/ListImages";

const Main = () => {
  const [search, saveSearch] = useState("");
  const [images, saveImages] = useState([]);
  const [actualPage, saveActualPage] = useState(1);
  const [totalPages, saveTotalPages] = useState(1);

  useEffect(() => {
    if (search !== "") {
      const getAPI = async () => {
        const imagesPerPage = 30;
        const key = "17282706-59f2d5f87d589166713a94367";
        const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}&page=${actualPage}`;

        const response = await fetch(url);
        const result = await response.json();
        const totalPages = Math.ceil(result.totalHits / imagesPerPage);

        saveTotalPages(totalPages);
        saveImages(result.hits);

        const jumbotron = document.querySelector('.jumbotron');
        jumbotron.scrollIntoView({behavior : 'smooth'});
      };

      getAPI();
    }
  }, [search, actualPage]);

  const goToPage = (pos) => {
    const sum = actualPage + pos;
    if (sum >= 1 && sum <= totalPages) {
      saveActualPage(sum);
    }
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Image Searcher</p>
        <Form saveSearch={saveSearch}></Form>
      </div>
      <div className="row justify-content-center">
        <ListImages images={images}></ListImages>
        {actualPage > 1 ? (
          <button className="btn btn-info mr-1" onClick={() => goToPage(-1)}>
            &laquo; Back
          </button>
        ) : null}
        {actualPage < totalPages ? (
          <button className="btn btn-info" onClick={() => goToPage(1)}>
            Next &raquo;
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Main;
