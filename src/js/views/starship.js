import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const Starship = props => {
	const {store, actions} = useContext(Context)
	let params = useParams()

	return (

	
		<div className="container-fluid d-flex mt-2 ">
				<div className="col d-flex justify-content-center mb-3">
				<img src={`https://starwars-visualguide.com/assets/img/starships/${store.starshipList[params.index].uid}.jpg`} />
				</div>
				<div className="col d-inline justify-content-center">
					<h1>{store.starshipList[params.index].name}</h1>
					<p className="desc pe-3 me-3 justify-content-center">en una galaxia muy muy lejanaaaa...............................................................</p>
				</div>
				<div>
					<hr></hr>
				</div>
				<div className="info mx-auto">
					<div>
						<p><strong>Crew:</strong></p>
						<p className="">{store.starshipInfoList[params.index].crew}</p>
					</div>
					<div>
					<p><strong>Passengers:</strong></p>
						<p>{store.starshipInfoList[params.index].passengers}</p>
					</div>
					<div>
					<p><strong>Length:</strong></p>
						<p>{store.starshipInfoList[params.index].length}</p>
					</div>
					<div>
					<p><strong>Model:</strong></p>
						<p>{store.startshipInfoList[params.index].model}</p>
					</div>
					<div>
						<p><strong>Cargo Capacity:</strong></p>
						<p>{store.starshipInfoList[params.index].cargo_capacity}</p>
					</div>			
					<hr></hr>
				</div>

				<div className="d-flex justify-content-center">
					<Link to="/">
						<button className="btn btn-primary" href="#" role="button">
							Back home
						</button>
					</Link>
				</div>
		</div>	

	);
};