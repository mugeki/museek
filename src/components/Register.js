import { forwardRef } from "react";
import styles from "./Register.module.css";

const Register = forwardRef((props, ref) => {
	return (
		<div className={`${styles.background} modal d-flex justify-content-center`}>
			<div
				className={`${styles.container} bg-white my-auto pb-2 rounded`}
				ref={ref}
			>
				<h2 className="fw-bold text-center p-5 pb-4">Join to Museek</h2>
				<div className="px-4 px-md-5">
					<input
						className={`${styles.input} form-control px-3 py-2 mb-4`}
						placeholder="Username"
						type="text"
					/>
					<input
						className={`${styles.input} form-control px-3 py-2 mb-4`}
						placeholder="Email"
						type="email"
					/>
					<input
						className={`${styles.input} form-control px-3 py-2 mb-4`}
						placeholder="Password"
						type="password"
					/>
					<input
						className={`${styles.input} form-control px-3 py-2 mb-4`}
						placeholder="Nama Lengkap"
						type="text"
					/>
					<input
						className={`${styles.input} form-control px-3 py-2 mb-4`}
						placeholder="No. Handphone"
						type="number"
					/>
					<button
						className={`border-0 fw-bolder text-white ${styles.button} rounded p-2 w-100`}
					>
						Join
					</button>
				</div>
				<div
					className="text-center pt-4 mt-5"
					style={{ borderTop: "1px solid #8f8d8d" }}
				>
					<p>
						Sudah memiliki akun?
						<button onClick={props.openLogin} className={styles.join}>
							Sign in
						</button>
					</p>
				</div>
			</div>
		</div>
	);
});

export default Register;
