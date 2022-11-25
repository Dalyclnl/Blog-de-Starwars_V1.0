import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Character = props => {
	const {store, actions} = useContext(Context)
	let params = useParams()
	
	return (

	
		<div className="container-fluid d-flex mt-2 ">
				<div className="col d-flex justify-content-center mb-3">
					<img src={`https://starwars-visualguide.com/assets/img/characters/${store.peopleList[params.index].uid}.jpg`} />
				</div>
				<div className="col d-inline justify-content-center">
					<h1>{store.peopleList[params.index].name}</h1>
					<p className="card text">Lnvjhvh óhcwóiówrcow </p>
				</div>
				<div>
					<hr></hr>
				</div>
				<div className="info">
					<div>
						<p><strong>Birth Year:</strong></p>
						<p>{store.peopleInfoList[params.index].birth_year}</p>
					</div>
					<div>
						<p><strong>Hair Colour:</strong></p>
						<p>{store.peopleInfoList[params.index].hair_color}</p>
					</div>
					<div>
						<p><strong>Height:</strong></p>
						<p>{store.peopleInfoList[params.index].height}</p>
					</div>
					<div>
						<p><strong>Eye Colour:</strong></p>
						<p>{store.peopleInfoList[params.index].eye_color}</p>
					</div>
					<div>
						<p><strong>Gender:</strong></p>
						<p>{store.peopleInfoList[params.index].gender}</p>
					</div>
								
					<hr></hr>
				</div>
					<a href="#" class="btn btn-primary">Go somewhere</a>
				</div>

	);
};

