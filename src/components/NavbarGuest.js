import { Link } from "react-router-dom";
import styles from "./NavbarGuest.module.css";

export default function NavbarGuest() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid px-4">
				<Link
					className="navbar-brand fw-bold"
					style={{ color: "#F2AF02" }}
					to=""
				>
					MUSEEK
				</Link>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto">
						<Link className="nav-link mx-2" to="">
							Explore
						</Link>
						<Link className="nav-link mx-2" id="login" to="">
							Sign In
						</Link>
						<Link
							className={`nav-link rounded mx-2 px-4 ${styles.button}`}
							to=""
						>
							Join
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
