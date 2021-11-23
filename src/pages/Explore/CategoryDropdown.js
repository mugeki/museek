import { useState, useEffect, useRef } from "react";
import styles from "./CategoryDropdown.module.css";

export default function CategoryDropdown() {
	const ref = useRef();
	const [open, setOpen] = useState(false);

	const categories = {
		0: "vokal",
		1: "gitar",
		2: "bass",
		3: "brass",
		4: "perkusi",
		5: "piano",
		6: "strings",
	};

	useEffect(() => {
		const handleClick = (e) => {
			if (open && ref.current && !ref.current.contains(e.target)) {
				setOpen(false);
			}
		};
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, [open]);

	const [checked, setChecked] = useState(
		new Array(Object.keys(categories).length).fill(false)
	);

	const onChange = (idx) => {
		const updatedChecked = checked.map((item, index) =>
			index == idx ? !item : item
		);
		setChecked(updatedChecked);
	};

	const onClear = () => {
		const updatedChecked = new Array(Object.keys(categories).length).fill(
			false
		);
		setChecked(updatedChecked);
	};

	const onClick = () => {
		setOpen(!open);
	};

	return (
		<div>
			<button
				className="btn btn-secondary dropdown-toggle ms-md-3 bg-white text-black h-100"
				style={{ border: "1px solid #8F8D8D" }}
				type="button"
				onClick={() => onClick()}
			>
				Category
			</button>
			{open && (
				<div
					className="position-absolute bg-white rounded ms-md-3"
					style={{ border: "1px solid #8F8D8D", width: "300px" }}
					ref={ref}
				>
					<div className="row p-2 px-3">
						<div className="col">
							{Object.keys(categories)
								.filter((_, index) => index < 4)
								.map((key) => {
									return (
										<div key={key} className="my-2">
											<input
												id={categories[key]}
												value={categories[key]}
												name={categories[key]}
												checked={checked[key]}
												onChange={() => onChange(key)}
												style={{ cursor: "pointer" }}
												type="checkbox"
											/>
											<label
												className="ms-2"
												htmlFor={categories[key]}
												style={{ cursor: "pointer" }}
											>
												{categories[key].charAt(0).toUpperCase() +
													categories[key].slice(1)}
											</label>
										</div>
									);
								})}
						</div>
						<div className="col">
							{Object.keys(categories)
								.filter((_, index) => index >= 4)
								.map((key) => {
									return (
										<div key={key} className="my-2">
											<input
												id={categories[key]}
												value={categories[key]}
												name={categories[key]}
												checked={checked[key]}
												onChange={() => onChange(key)}
												style={{ cursor: "pointer" }}
												type="checkbox"
											/>
											<label
												className="ms-2"
												htmlFor={categories[key]}
												style={{ cursor: "pointer" }}
											>
												{categories[key].charAt(0).toUpperCase() +
													categories[key].slice(1)}
											</label>
										</div>
									);
								})}
						</div>
					</div>
					<div
						className="d-flex justify-content-between p-3 mt-2"
						style={{ borderTop: "1px solid #8f8d8d" }}
					>
						<button
							className={`${styles.clear} border-0 fw-bolder`}
							onClick={() => onClear()}
						>
							Clear All
						</button>
						<button className={`${styles.apply} border-0 rounded px-3 py-1`}>
							Apply
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
