import React, { useContext, useState } from "react";
import starWarsLogo from "../../img/star-wars-logo.png";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [search, setSearch] = useState("");

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<div className="w-100 d-flex flex-row justify-content-between">
					<Link className="navbar-brand" to="/">
						<img
							src={starWarsLogo}
							alt=""
							width="140"
							height="74"
							className="d-inline-block align-text-top"
						/>
					</Link>

					<div className="d-flex flex-row mt-5">
						{/* 
						<div className="form-outline">
							<input
								type="search"
								onChange={e => setSearch(e.target.value)}
								id="form1"
								className="form-control"
								placeholder="Search"
							/>
						</div>
						<button type="button" onClick={() => actions.loadSearchData(search)} className="btn btn-primary">
							<i className="fas fa-search" />
						</button>

						*/}
					</div>
					<div className="dropdown">
						<button
							className="btn btn-primary dropdown-toggle mt-5"
							type="button"
							id="dropdownMenuButton1"
							data-bs-toggle="dropdown"
							aria-expanded="false">
							Favorites {store.favoritos.length}
						</button>
						<ul
							className="dropdown-menu"
							style={{ width: 190 + "px" }}
							aria-labelledby="dropdownMenuButton1">
							{store.favoritos.map(element => {
								return (
									<li className="d-flex flex-row justify-content-between" key={element.id}>
										<span>{element.item}</span>
										<button
											type="button"
											onClick={() => actions.removeFavorito(element.id)}
											className="btn btn-light">
											<FontAwesomeIcon icon={faTrash} />
										</button>
									</li>
								);
							})}
							{store.favoritos.length ? "" : <span className="p-5">(Empty)</span>}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
