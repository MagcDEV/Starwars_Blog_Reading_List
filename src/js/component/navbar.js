import React, { useContext } from "react";
import starWarsLogo from "../../img/star-wars-logo.png";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<img src={starWarsLogo} alt="" width="140" height="74" className="d-inline-block align-text-top" />
				</a>
				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favorites {store.favoritos.length}
					</button>
					<ul className="dropdown-menu" style={{ width: 190 + "px" }} aria-labelledby="dropdownMenuButton1">
						{store.favoritos.map(element => {
							return (
								<li className="d-flex flex-row justify-content-between" key={element.id}>
									<span>{element.item}</span>
									<button type="button" onClick={() => actions.removeFavorito(element.id)} className="btn btn-light">
										<FontAwesomeIcon icon={faTrash} />
									</button>
								</li>
							);
						})}
								{store.favoritos.length ? "" :
											<span className="p-5">(Empty)</span>
								}
					</ul>
				</div>
			</div>
		</nav>
	);
};
