import { Icon } from "@iconify/react";
import styles from "./SearchInput.module.css";

export default function SearchInput() {
	return (
		<div className={`bg-white ps-2 rounded ${styles.searchbar}`}>
			<Icon icon="ant-design:search-outlined" color="#8f8d8d" />
			<input className={`${styles.input} ps-2`} placeholder="Cari musisi" />
			<button
				className={`border-0 text-white ${styles.button} rounded-end p-2`}
			>
				Cari
			</button>
		</div>
	);
}
