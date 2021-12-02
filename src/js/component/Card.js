import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Card = props => {
	return (
		<div className="card-group col-4 m-4">
			<div className="card ">
				<img className="card-img-top" src="https://via.placeholder.com/400x200" alt="Card image cap" />
				<div className="card-body d-flex flex-column justify-content-between">
					<h4 className="card-title">{props.name}</h4>
					{props.population ? (
						<>
							<h5>Population: {props.population}</h5>
							<h5>Terrain: {props.terrain}</h5>
						</>
					) : (
						<>
							<h5>Gender: {props.gender}</h5>
							<h5>Hair-Color: {props.hair_color}</h5>
							<h5>Eye-Color: {props.eye_color}</h5>
						</>
					)}
					<div className="d-flex justify-content-between">
						<a href="#" className="btn btn-primary">
							Learn more!
						</a>
						<button type="button" className="btn btn-secondary">
							<FontAwesomeIcon  icon={faHeart} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	hair_color: PropTypes.string,
	eye_color: PropTypes.string,
	terrain: PropTypes.string,
	population: PropTypes.string
};
