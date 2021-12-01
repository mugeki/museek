import Navbar from "../../components/Navbar";
import NavbarGuest from "../../components/NavbarGuest";
import SearchInput from "./SearchInput";
import MusicianCard from "./MusicianCard";
import useGetNewestMusicianList from "../../hooks/useGetNewestMusicianList";
import useGetPopularMusicianList from "../../hooks/useGetPopularMusicianList";
import styles from "./Home.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import client from "../../apollo-client";

export default function Home() {
	const isLoggedIn = useSelector((state) => state.auth.login);
	const { dataNewest, loadingNewest } = useGetNewestMusicianList();
	const { dataPopular, loadingPopular } = useGetPopularMusicianList();

	useEffect(() => {
		return () => {
			client.resetStore();
		};
	}, []);

	return (
		<div className="pb-3">
			{!isLoggedIn ? <NavbarGuest /> : <Navbar />}
			<div className={styles.hero}>
				<div className={`${styles.overlay} p-2 p-md-5`}>
					<div className="container mt-4">
						<div className="fw-bold fs-1 text-white">
							<p className="mb-0">Cari musisi yang pas</p>
							<p>buat keperluanmu</p>
						</div>
						<SearchInput />
					</div>
				</div>
			</div>
			<div className="container my-5">
				<h2 className="fw-bold">Musisi popular</h2>
				<div className="d-flex flex-wrap justify-content-between py-3">
					{loadingPopular ? (
						<Loading />
					) : (
						dataPopular?.user.map((item) => (
							<MusicianCard
								key={item.id}
								id={item.id}
								profile={item.img_link}
								fullName={item.full_name}
								instrument={item.instrument}
							/>
						))
					)}
				</div>
			</div>
			<div className="container my-5">
				<h2 className="fw-bold">Musisi terbaru</h2>
				<div className="d-flex flex-wrap justify-content-between py-3">
					{loadingNewest ? (
						<Loading />
					) : (
						dataNewest?.user.map((item) => (
							<MusicianCard
								key={item.id}
								id={item.id}
								profile={item.img_link}
								fullName={item.full_name}
								instrument={item.instrument}
							/>
						))
					)}
				</div>
			</div>
		</div>
	);
}
