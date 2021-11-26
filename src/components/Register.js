import { forwardRef, useState } from "react";
import styles from "./Register.module.css";

const Register = forwardRef((props, ref) => {
	const [form, setForm] = useState({
		username: "",
		email: "",
		password: "",
		fullName: "",
		phone: "",
	});
	const onChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setForm({ ...form, [name]: value });
	};
	const onClick = (e) => {
		const value = e.target.value;
		props.onClick(value);
	};
	return (
		<div className={`${styles.background} modal d-flex justify-content-center`}>
			<div
				className={`${styles.container} bg-white my-auto pb-2 rounded`}
				ref={ref}
			>
				<svg
					aria-hidden="true"
					role="img"
					className="d-block ms-auto m-2"
					style={{ cursor: "pointer", verticalAlign: "-0.125em" }}
					width="24"
					height="24"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 1024 1024"
					onClick={onClick}
				>
					<path
						d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4l-66.1-.3c-4.4 0-8 3.5-8 8c0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4l66 .3c4.4 0 8-3.5 8-8c0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
						fill="#f2af02"
					/>
					<path
						d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448s448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
						fill="#f2af02"
					/>
				</svg>
				<h2 className="fw-bold text-center p-5 pb-4">Join to Museek</h2>
				<form className="px-4 px-md-5">
					<input
						className={`${styles.input} form-control px-3 py-2 mb-4`}
						value={form.username}
						name="username"
						placeholder="Username"
						onChange={onChange}
						type="text"
					/>
					<input
						className={`${styles.input} form-control px-3 py-2 mb-4`}
						value={form.email}
						name="email"
						placeholder="Email"
						onChange={onChange}
						type="email"
					/>
					<input
						className={`${styles.input} form-control px-3 py-2 mb-4`}
						value={form.password}
						name="password"
						placeholder="Password"
						onChange={onChange}
						type="password"
					/>
					<input
						className={`${styles.input} form-control px-3 py-2 mb-4`}
						value={form.fullName}
						name="fullName"
						placeholder="Nama Lengkap"
						onChange={onChange}
						type="text"
					/>
					<input
						className={`${styles.input} form-control px-3 py-2 mb-4`}
						value={form.phone}
						name="phone"
						placeholder="No. Handphone"
						onChange={onChange}
						type="number"
					/>
					<button
						className={`border-0 fw-bolder text-white ${styles.button} rounded p-2 w-100`}
						onSubmit
					>
						Join
					</button>
				</form>
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
