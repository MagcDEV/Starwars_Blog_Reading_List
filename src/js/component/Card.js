import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Card = props => {
	const { store, actions } = useContext(Context);

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
						<Link to={"/detail/" + props.id} className="btn btn-primary">
							Learn more!
						</Link>
						<button
							type="button"
							onClick={() => actions.addFavorito(props.id, props.name)}
							className={`btn ${
								store.favoritos.find(element => element.id == props.id)
									? "btn-warning"
									: "btn-secondary"
							}`}>
							<FontAwesomeIcon icon={faHeart} />
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
	population: PropTypes.string,
	id: PropTypes.string
};
