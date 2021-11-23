import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import styles from "./NavbarGuest.module.css";

export default function NavbarGuest() {
	const ref = useRef();
	const [openLogin, setOpenLogin] = useState(false);
	const [openJoin, setOpenJoin] = useState(false);

	const onOpenLogin = () => {
		setOpenJoin(false);
		setOpenLogin(true);
	};

	const onOpenJoin = () => {
		console.log("openJoin dalam fungsi 1", openJoin);
		setOpenLogin(false);
		setOpenJoin(true);
		console.log("openJoin dalam fungsi 2", openJoin);
	};

	useEffect(() => {
		console.log("openLogin: ", openLogin);
		console.log("openJoin: ", openJoin);
		const handleClick = (e) => {
			if (openLogin && ref.current && !ref.current.contains(e.target)) {
				setOpenLogin(false);
			}
			if (openJoin && ref.current && !ref.current.contains(e.target)) {
				setOpenJoin(false);
			}
		};
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, [openLogin, openJoin]);

	return (
		<div>
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
						<div className="navbar-nav ms-auto">
							<Link className="nav-link mx-2" to="/explore" replace>
								Explore
							</Link>
							<button
								className="nav-link mx-2 bg-white border-0"
								style={{ width: "fit-content" }}
								onClick={onOpenLogin}
							>
								Sign In
							</button>
							<button
								className={`nav-link rounded mx-2 px-4 bg-white ${styles.button}`}
								onClick={onOpenJoin}
							>
								Join
							</button>
						</div>
					</div>
				</div>
			</nav>
			{openLogin && <Login openJoin={onOpenJoin} ref={ref} />}
			{openJoin && <Register openLogin={onOpenLogin} ref={ref} />}
		</div>
	);
}
