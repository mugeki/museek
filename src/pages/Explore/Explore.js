import Navbar from "../../components/Navbar";
import NavbarGuest from "../../components/NavbarGuest";
import SearchLokasiInput from "./SearchLokasiInput";
import CategoryDropdown from "./CategoryDropdown";
import SortDropdown from "./SortDropdown";
import useGetMusicianByFilter from "../../hooks/useGetMusicianByFilter";
import Loading from "../../components/Loading";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MusicianList from "./MusicianList";
import { deleteKeyword } from "../../store/keywordSlice";
import client from "../../apollo-client";
import styles from "./Explore.module.css";
import LoadingSmallOrange from "../../components/LoadingSmallOrange";

export default function Explore() {
	const isLoggedIn = useSelector((state) => state.auth.login);
	const keyword = useSelector((state) => state.keyword.keyword);
	const dispatch = useDispatch();
	const [loadingMore, setLoadingMore] = useState(false);
	const [allDataCount, setAllDataCount] = useState(0);
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
	});

	const handleFilter = (value) => {
		setFilter({ ...filter, ...value });
	};
	const { dataFilter, loadingFilter, errorFilter, fetchMore } =
		useGetMusicianByFilter(filter);

	const onLoadMore = async () => {
		setLoadingMore(true);
		await fetchMore({
			variables: {
				...filter,
				offset: dataFilter.user.length,
			},
		});

		setLoadingMore(false);
	};

	useEffect(() => {
		if (!loadingFilter && dataFilter) {
			setAllDataCount(dataFilter.user_aggregate.aggregate.count);
		}
	}, [loadingFilter, dataFilter]);

	useEffect(() => {
		client.resetStore();
	}, [filter]);

	useEffect(() => {
		return () => {
			client.resetStore();
		};
	}, []);

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
			<div className="container my-3 d-flex flex-column">
				{!loadingFilter ? (
					dataFilter?.user.length === 0 ? (
						<p className="text-center">Tidak ditemukan hasil yang cocok.</p>
					) : (
						<>
							<MusicianList entries={dataFilter?.user} />
							{loadingFilter ? (
								""
							) : loadingMore ? (
								<LoadingSmallOrange w="34" h="34" />
							) : dataFilter.user.length === allDataCount ? (
								<p className="text-center">Semua data telah ditampilkan.</p>
							) : (
								<button
									className={`${styles.button} py-1 px-3 rounded align-self-center`}
									style={{ cursor: "pointer" }}
									onClick={onLoadMore}
								>
									Lihat lainnya
								</button>
							)}
						</>
					)
				) : (
					<Loading />
				)}
			</div>
		</div>
	);
}
