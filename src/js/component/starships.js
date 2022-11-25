import React, { useEffect, useState } from "react";

const Starships = () => {
  const [spaceship, setSpaceship] = useState([]);

  useEffect(() => {

    const getStarship = () => {
      fetch("https://www.swapi.tech/api/starships/")
        .then((response) => response.json())
        .then((data) => setSpaceship(data.results))

    }
    getStarship();

  }, []);

 return spaceship.map((spaceship) => {
   return (  
        <div className="container-fluid d-flex mt-2 justify-content-center"
            key={spaceship.uid}>
                <div className="card card-info" style={{ width: 18 + "rem" }}>
                  <img src={"https://starwars-visualguide.com/assets/img/starship{nave.id}.jpg"}  className="card-img-top" alt="..." />
                  <div className="card-body border">
                    <h5 className="card-title fs-3">{spaceship.name} </h5>
                    <div className="d-flex justufy-content-between">  
                    </div>
                  </div>
                </div>
        </div>
      );
    });
  };
  
export default Starships;