import { forwardRef } from "react";
import styles from "./Login.module.css";

const Login = forwardRef((props, ref) => {
	return (
		<div className={`${styles.background} modal d-flex justify-content-center`}>
			<div
				className="bg-white my-auto pb-2 rounded"
				style={{ border: "1px solid #8f8d8d", width: "35%" }}
				ref={ref}
			>
				<h1 className="fw-bold text-center p-5 pb-4">Sign In to Museek</h1>
				<div className="px-5">
					<input
						className={`${styles.input} form-control px-3 py-2 mb-4`}
						placeholder="Username"
					/>
					<input
						className={`${styles.input} form-control px-3 py-2 mb-4`}
						placeholder="Password"
					/>
					<button
						className={`border-0 fw-bolder text-white ${styles.button} rounded p-2 w-100`}
					>
						Sign In
					</button>
				</div>
				<div
					className="text-center pt-4 mt-5"
					style={{ borderTop: "1px solid #8f8d8d" }}
				>
					<p>
						Belum memiliki akun?
						<button onClick={props.openJoin} className={styles.join}>
							Join sekarang
						</button>
					</p>
				</div>
			</div>
		</div>
	);
});

export default Login;
