import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, image, status } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>

        <img className="img-fluid" src={image} alt="" />
        {(() => {
          if (status === "Dead") {
            return <div className="badge bg-danger fs-5">{status}</div>;
          } else if (status === "Alive") {
            return <div className=" badge bg-success fs-5">{status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{status}</div>;
          }
        })()}
      </div>
    </div>
  );
};

export default CardDetails;
