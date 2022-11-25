import React, { useEffect, useState } from "react";

const Vehicles = () => {
  const [spacecraf, setspacecraf] = useState([]);

  useEffect(() => {

    const getVehicle = () => {
      fetch("https://www.swapi.tech/api/starships/")
        .then((response) => response.json())
        .then((data) => setspacecraf(data.results))

    }
    getVehicle();

  }, []);

 return spacecrafs.map((spacecraf) => {
   return (  
        <div className="container-fluid d-flex mt-2 justify-content-center"
            key={nave.uid}>
                <div className="card card-info" style={{ width: 18 + "rem" }}>
                  <img src={"https://starwars-visualguide.com/assets/img/starship{nave.id}.jpg"}  className="card-img-top" alt="..." />
                  <div className="card-body border">
                    <h5 className="card-title fs-3">{nave.name} </h5>
                    <p>{nave.manufacturer} </p>
                    <div className="d-flex justufy-content-between">  
                    </div>
                  </div>
                </div>
        </div>
      );
    });
  };
  
export default Vehicles;