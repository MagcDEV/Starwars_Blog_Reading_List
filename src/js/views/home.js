import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Card } from "../component/Card";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>Characters</h1>
			<div className="d-flex flex-row fila">
				{store.personas.map(value => {
					return (
						<Card
							key={value._id}
							id={value._id}
							name={value.properties.name}
							gender={value.properties.gender}
							hair_color={value.properties.hair_color}
							eye_color={value.properties.eye_color}
						/>
					);
				})}
			</div>
			<h1>Planets</h1>
			<div className="d-flex flex-row fila">
				{store.planets.map(value => {
					return (
						<Card
							key={value._id}
							id={value._id}
							name={value.properties.name}
							population={value.properties.population}
							terrain={value.properties.terrain}
						/>
					);
				})}
			</div>
		</div>
	);
};
