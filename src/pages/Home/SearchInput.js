import { Icon } from "@iconify/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { passLocation } from "../../store/locationSlice";
import styles from "./SearchInput.module.css";

export default function SearchInput() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [location, setLocation] = useState("");
	const onChange = (e) => {
		setLocation(e.target.value);
	};
	return (
		<div className={`bg-white ps-2 rounded ${styles.searchbar}`}>
			<Icon icon="ant-design:search-outlined" color="#8f8d8d" />
			<input
				className={`${styles.input} ps-2`}
				value={location}
				name="location"
				placeholder="Cari musisi berdasar lokasi"
				onChange={onChange}
			/>
			<button
				className={`border-0 text-white ${styles.button} rounded-end p-2`}
				onClick={() => {
					dispatch(passLocation(location));
					navigate("/explore");
				}}
			>
				Cari
			</button>
		</div>
	);
}
