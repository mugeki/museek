import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../store/loginSlice";

export default function Navbar() {
	const id = useSelector((state) => state.auth.userId);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const onClick = () => {
		dispatch(logout());
		navigate("/");
	};
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-white">
			<div className="container-fluid px-4">
				<Link
					className="navbar-brand fw-bold"
					style={{ color: "#F2AF02" }}
					to="/"
				>
					MUSEEK
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto d-flex align-items-lg-center">
						<Link className="nav-link mx-2" to="/explore" replace>
							Explore
						</Link>
						<button
							className="nav-link mx-2 bg-white border-0"
							style={{ width: "fit-content" }}
							onClick={onClick}
						>
							Logout
						</button>
						<Link className={`nav-link mx-2`} to={`/profile/${id}`}>
							<Icon
								icon="healthicons:ui-user-profile"
								color="#ccc"
								width="45"
								height="45"
							/>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
