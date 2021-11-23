import { useState, useEffect, useRef } from "react";

export default function SortDropdown() {
	const ref = useRef();
	const [open, setOpen] = useState(false);
	const [sort, setSort] = useState("newest");

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

	const onClickSort = (e) => {
		setSort(e.target.innerText.toLowerCase());
	};

	const onClick = () => {
		setOpen(!open);
	};

	return (
		<div>
			<button
				className="btn btn-secondary dropdown-toggle ms-3 bg-white text-black h-100"
				style={{ border: "1px solid #8F8D8D" }}
				type="button"
				onClick={() => onClick()}
			>
				Sort By
			</button>
			{open && (
				<div
					className="position-absolute bg-white rounded p-3 pb-1 ms-3"
					style={{ border: "1px solid #8F8D8D", width: "150px" }}
					ref={ref}
				>
					<p
						className={sort === "newest" ? "fw-bolder" : ""}
						style={{ cursor: "pointer" }}
						onClick={onClickSort}
					>
						Newest
					</p>
					<p
						className={sort === "most liked" ? "fw-bolder" : ""}
						style={{ cursor: "pointer" }}
						onClick={onClickSort}
					>
						Most Liked
					</p>
				</div>
			)}
		</div>
	);
}
