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
		setOpenLogin(false);
		setOpenJoin(true);
	};

	useEffect(() => {
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
							<Link className="nav-link mx-2" to="">
								Explore
							</Link>
							<Link className="nav-link mx-2" onClick={onOpenLogin} to="">
								Sign In
							</Link>
							<Link
								className={`nav-link rounded mx-2 px-4 ${styles.button}`}
								onClick={onOpenJoin}
								to=""
							>
								Join
							</Link>
						</div>
					</div>
				</div>
			</nav>
			{openLogin && <Login openJoin={onOpenJoin} ref={ref} />}
			{openJoin && <Register openLogin={onOpenLogin} ref={ref} />}
		</div>
	);
}
