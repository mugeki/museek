import { Icon } from "@iconify/react";
import Navbar from "../../components/Navbar";
import NavbarGuest from "../../components/NavbarGuest";
import CommentList from "./CommentList";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import useGetMusicianDetailByID from "../../hooks/useGetMusicianDetailByID";
import styles from "./Detail.module.css";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

export default function Detail() {
	const { id } = useParams();
	const isLoggedIn = useSelector((state) => state.auth.login);
	const { dataDetail, loadingDetail, errorDetail } =
		useGetMusicianDetailByID(id);

	if (loadingDetail)
		return (
			<div className="position-absolute top-50 start-50 translate-middle">
				<Loading />
			</div>
		);

	if (errorDetail || dataDetail.user.length === 0)
		return <Error code={404} message={"Not Found"} />;

	return (
		<div>
			{!isLoggedIn ? <NavbarGuest /> : <Navbar />}
			<div className="container d-flex flex-column flex-md-row justify-content-between py-4">
				<div className="d-flex flex-column">
					<div className="d-flex flex-column flex-md-row">
						<img
							src={dataDetail.user[0].img_link}
							alt="musician"
							className={`${styles.profile} rounded`}
						/>
						<div className="ms-md-4 mt-4 mt-md-0">
							<h2 className="fw-bolder mb-1">{dataDetail.user[0].full_name}</h2>
							<h5>{dataDetail.user[0].instrument}</h5>
							<div className="d-flex my-2">
								<Icon
									icon="ant-design:heart-outlined"
									color="#ea2323"
									width="24"
									height="24"
									style={{ cursor: "pointer" }}
								/>
								<p className="ms-1 my-0">{dataDetail.user[0].likes}</p>
							</div>
							<p style={{ color: "#8F8D8D" }}>{dataDetail.user[0].location}</p>
							<div>
								<h5 className="fw-bolder mt-5">Tentang</h5>
								<p>{dataDetail.user[0].about}</p>
							</div>
							<div className={`d-md-none p-md-4 rounded ms-md-4 mt-5`}>
								<h5 className="fw-bolder mb-4">Kontak</h5>
								<div className="d-flex">
									<Icon
										icon="akar-icons:whatsapp-fill"
										color="#8f8d8d"
										width="20"
										height="20"
									/>
									<p className="ms-2" style={{ color: "#8F8D8D" }}>
										{dataDetail.user[0].email}
									</p>
								</div>
								<div className="d-flex">
									<Icon
										icon="carbon:email"
										color="#8f8d8d"
										width="20"
										height="20"
									/>
									<p className="ms-2" style={{ color: "#8F8D8D" }}>
										{dataDetail.user[0].phone}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="py-5">
						<CommentList musicianId={id} />
					</div>
				</div>
				<div
					className={`d-none d-md-block p-md-4 rounded ms-md-4 mt-3 mt-md-0 ${styles.sticky}`}
				>
					<h5 className="fw-bolder mb-4">Kontak</h5>
					<div className="d-flex">
						<Icon
							icon="akar-icons:whatsapp-fill"
							color="#8f8d8d"
							width="20"
							height="20"
						/>
						<p className="ms-2" style={{ color: "#8F8D8D" }}>
							{dataDetail.user[0].email}
						</p>
					</div>
					<div className="d-flex">
						<Icon icon="carbon:email" color="#8f8d8d" width="20" height="20" />
						<p className="ms-2" style={{ color: "#8F8D8D" }}>
							{dataDetail.user[0].phone}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
