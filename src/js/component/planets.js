import React, { useEffect, useState } from "react";

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {

    const getOrigin = () => {
      fetch("https://www.swapi.tech/api/planets/")
        .then((response) => response.json())
        .then((data) => setPlanets(data.results))

    }
    getOrigin();

  }, []);

  return planets.map((planet) => {
    return (
        <div className="container-fluid d-flex mt-2 "
            key={planet.uid}>
            <div className="card card-info" style={{ width: 18 + "rem" }}>
            <img src={"https://starwars-visualguide.com/assets/img/planets{planet.id}.jpg"}  className="card-img-top" alt="..." />
            <div className="card-body border">
                <h5 className="card-title fs-3">{planet.name} </h5>
                <div className="d-flex justufy-content-between">  
                </div>
            </div>
            </div>
        </div>
    );
  });
};

export default Planets;