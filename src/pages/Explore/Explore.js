import Navbar from "../../components/Navbar";
import NavbarGuest from "../../components/NavbarGuest";
import SearchLokasiInput from "./SearchLokasiInput";
import CategoryDropdown from "./CategoryDropdown";
import SortDropdown from "./SortDropdown";
import useGetMusicianByFilter from "../../hooks/useGetMusicianByFilter";
import Loading from "../../components/Loading";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MusicianList from "./MusicianList";
import { deleteKeyword } from "../../store/keywordSlice";

export default function Explore() {
	const isLoggedIn = useSelector((state) => state.auth.login);
	const keyword = useSelector((state) => state.keyword.keyword);
	const dispatch = useDispatch();

	const [filter, setFilter] = useState({
		date_published: "desc",
		keyword: keyword,
		instrument: [
			"Vokal",
			"Gitar",
			"Bass",
			"Brass",
			"Perkusi",
			"Piano",
			"Strings",
		],
		offset: 0,
	});

	const handleFilter = (value) => {
		setFilter({ ...filter, ...value });
	};
	const { dataFilter, loadingFilter, errorFilter } =
		useGetMusicianByFilter(filter);

	if (errorFilter) console.log(errorFilter);
	if (!loadingFilter) dispatch(deleteKeyword());

	return (
		<div className="pb-3">
			{!isLoggedIn ? <NavbarGuest /> : <Navbar />}
			<div className="container mt-4">
				<h1 className="fw-bold">Cari musisi</h1>
			</div>
			<div
				className="container mt-4 d-flex flex-column flex-md-row sticky-top bg-white w-100 py-4"
				style={{ zIndex: 1 }}
			>
				<SearchLokasiInput onChange={handleFilter} keyword={filter.keyword} />
				<div className="d-flex flex-row mt-3 mt-md-0">
					<CategoryDropdown onClick={handleFilter} />
					<SortDropdown onClick={handleFilter} />
				</div>
			</div>
			<div className="container my-3">
				{!loadingFilter ? (
					dataFilter.user.length === 0 ? (
						<div>
							<p>Tidak ditemukan hasil yang cocok.</p>
						</div>
					) : (
						<MusicianList entries={dataFilter.user} />
					)
				) : (
					<Loading />
				)}
			</div>
		</div>
	);
}
