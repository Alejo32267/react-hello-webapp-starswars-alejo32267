import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Dropdown } from 'react-bootstrap';


export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img
						src="src/assets/img/star_wars_logo.png"
						alt="Star Wars Logo"
						width="60"
						height="40"
						className="d-inline-block align-text-top"
					/>
				</Link>


				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Favoritos
					</button>
					<ul className="dropdown-menu">
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</div>


			</div>
		</nav>
	);
};