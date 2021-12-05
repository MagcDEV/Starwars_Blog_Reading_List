import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Detail = props => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();

	let entry = {};
	for (const key in store) {
		store[key].forEach(element => {
			if (element._id == id) {
				entry = { ...element.properties };
			}
		});
	}

	return (
		<div className="container">
			<div className="container d-flex flex-row justify-content-bet">
				<img className="" src="https://via.placeholder.com/800x600" alt="Card image cap" />
				<div className="m-5 text-center">
					<h2>{entry.name}</h2>
					<p>
						Adipisicing molestiae porro necessitatibus quibusdam earum. Ipsum facilis non obcaecati minus et
						Quidem ipsam itaque recusandae porro ex illo Quos a labore laboriosam delectus laborum?
						Excepturi quod dolores asperiores pariatur nesciunt? Facilis perferendis possimus quos aperiam
						voluptas Quam ad eveniet.
					</p>
				</div>
			</div>
			{/* 
				<h1 className="display-4">This will show the demo element: {params.theid} </h1>
			*/}
			<hr className="my-4 raya" />
			{entry.eye_color ? (
				<div className="container d-flex flex-row justify-content-around">
					<div>
						<h3>Name</h3>
						<h4>{entry.name}</h4>
					</div>
					<div>
						<h3>Birth Year</h3>
						<h4>{entry.birth_year}</h4>
					</div>
					<div>
						<h3>Gender</h3>
						<h4>{entry.gender}</h4>
					</div>
					<div>
						<h3>Height</h3>
						<h4>{entry.height}</h4>
					</div>
					<div>
						<h3>Skin Color</h3>
						<h4>{entry.skin_color}</h4>
					</div>
					<div>
						<h3>Eye Color</h3>
						<h4>{entry.eye_color}</h4>
					</div>
				</div>
			) : (
				<div className="container d-flex flex-row justify-content-around">
					<div>
						<h3>Name</h3>
						<h4>{entry.name}</h4>
					</div>
					<div>
						<h3>Climate</h3>
						<h4>{entry.climate}</h4>
					</div>
					<div>
						<h3>Population</h3>
						<h4>{entry.population}</h4>
					</div>
					<div>
						<h3>Orbital Period</h3>
						<h4>{entry.orbital_period}</h4>
					</div>
					<div>
						<h3>Rotation Period</h3>
						<h4>{entry.rotation_period}</h4>
					</div>
					<div>
						<h3>Diameter</h3>
						<h4>{entry.diameter}</h4>
					</div>
				</div>
			)}
		</div>
	);
};

Detail.propTypes = {
	match: PropTypes.object
};
