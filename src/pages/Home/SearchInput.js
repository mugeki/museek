import { Icon } from "@iconify/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { passKeyword } from "../../store/keywordSlice";
import styles from "./SearchInput.module.css";

export default function SearchInput() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [keyword, setKeyword] = useState("");
	const onChange = (e) => {
		setKeyword(e.target.value);
	};
	const onClick = () => {
		dispatch(passKeyword(keyword));
		navigate("/explore");
	};
	return (
		<div className={`bg-white ps-2 rounded ${styles.searchbar}`}>
			<Icon icon="ant-design:keyword-outlined" color="#8f8d8d" />
			<input
				className={`${styles.input} ps-2 text-truncate`}
				value={keyword}
				name="keyword"
				placeholder="Cari lokasi / nama musisi"
				onChange={onChange}
			/>
			<button
				className={`border-0 text-white ${styles.button} rounded-end p-2 px-4`}
				onClick={onClick}
			>
				Cari
			</button>
		</div>
	);
}
