import { Fragment, useState } from "react";
import { Icon } from "@iconify/react";
import Navbar from "../../components/Navbar";
import NavbarGuest from "../../components/NavbarGuest";
import ConfirmationModal from "../../components/ConfirmationModal";
import styles from "./Profile.module.css";
import { useSelector } from "react-redux";
import useGetUserProfile from "../../hooks/useGetUserProfile";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router";

export default function Profile() {
	const navigate = useNavigate();
	const isLoggedIn = useSelector((state) => state.auth.login);
	const id = useSelector((state) => state.auth.userId);

	const [openModal, setOpenModal] = useState({ type: "", status: false });

	const { dataProfile, loadingProfile, errorProfile } = useGetUserProfile(id);

	if (errorProfile) console.log(errorProfile);

	if (!loadingProfile && dataProfile) console.log(dataProfile);

	const handleConfirmation = (value) => {
		setOpenModal(value);
	};
	return (
		<div>
			{!isLoggedIn ? <NavbarGuest /> : <Navbar />}
			<div className="container py-4 ">
				<h2 className="fw-bolder">Profile Detail</h2>
				{loadingProfile ? (
					<Loading />
				) : !loadingProfile && dataProfile ? (
					<Fragment>
						<div className="d-flex flex-column flex-md-row mt-5 justify-content-center">
							<img
								src={dataProfile?.user_by_pk.img_link}
								alt="musician"
								className={`${styles.profile} rounded me-md-4`}
							/>
							<div className={`${styles.form} d-flex flex-column mt-4 mt-md-0`}>
								<label className="fw-bolder fs-5">
									Nama Lengkap
									<div
										className={`d-flex mb-4 justify-content-between`}
										style={{ borderBottom: "1px solid #C4C4C4" }}
									>
										<input
											className="border-0 bg-white fs-6 w-100"
											type="text"
											value={dataProfile?.user_by_pk.full_name}
											disabled
										/>
										<Icon
											icon="ant-design:edit-filled"
											color="#c4c4c4"
											width="16"
											height="16"
											style={{ cursor: "pointer" }}
										/>
									</div>
								</label>
								<label className="fw-bolder fs-5">
									Lokasi
									<div
										className={`d-flex mb-4 justify-content-between`}
										style={{ borderBottom: "1px solid #C4C4C4" }}
									>
										<input
											className="border-0 bg-white fs-6 w-100"
											type="text"
											value={dataProfile?.user_by_pk.location}
											disabled
										/>
										<Icon
											icon="ant-design:edit-filled"
											color="#c4c4c4"
											width="16"
											height="16"
											style={{ cursor: "pointer" }}
										/>
									</div>
								</label>
								<label className="fw-bolder fs-5">
									Instrumen
									<div
										className={`d-flex mb-4 justify-content-between`}
										style={{ borderBottom: "1px solid #C4C4C4" }}
									>
										<select
											className="border-0 bg-white fs-6 w-100"
											style={{ appearance: "none" }}
											value={dataProfile?.user_by_pk.instrument}
											disabled
										>
											<option value="-">-</option>
											<option value="Vokal">Vokal</option>
											<option value="Gitar">Gitar</option>
											<option value="Bass">Bass</option>
											<option value="Brass">Brass</option>
											<option value="Perkusi">Perkusi</option>
											<option value="Piano">Piano</option>
											<option value="Strings">Strings</option>
										</select>
										<Icon
											icon="ant-design:edit-filled"
											color="#c4c4c4"
											width="16"
											height="16"
											style={{ cursor: "pointer" }}
										/>
									</div>
								</label>
								<label className="fw-bolder fs-5">
									No. Handphone
									<div
										className={`d-flex mb-4 justify-content-between`}
										style={{ borderBottom: "1px solid #C4C4C4" }}
									>
										<input
											className="border-0 bg-white fs-6 w-100"
											type="number"
											value={dataProfile?.user_by_pk.phone}
											disabled
										/>
										<Icon
											icon="ant-design:edit-filled"
											color="#c4c4c4"
											width="16"
											height="16"
											style={{ cursor: "pointer" }}
										/>
									</div>
								</label>
								<label className="fw-bolder fs-5">
									Email
									<div
										className={`d-flex mb-4 justify-content-between`}
										style={{ borderBottom: "1px solid #C4C4C4" }}
									>
										<input
											className="border-0 bg-white fs-6 w-100"
											type="email"
											value={dataProfile?.user_by_pk.email}
											disabled
										/>
										<Icon
											icon="ant-design:edit-filled"
											color="#c4c4c4"
											width="16"
											height="16"
											style={{ cursor: "pointer" }}
										/>
									</div>
								</label>
								<label className="fw-bolder fs-5">
									Tentang
									<div
										className={`d-flex mb-4 justify-content-between`}
										style={{ borderBottom: "1px solid #C4C4C4" }}
									>
										<input
											className="border-0 bg-white fs-6 w-100"
											type="textarea"
											value={dataProfile?.user_by_pk.about}
											disabled
										/>
										<Icon
											icon="ant-design:edit-filled"
											color="#c4c4c4"
											width="16"
											height="16"
											style={{ cursor: "pointer" }}
										/>
									</div>
								</label>
							</div>
						</div>
						<div className="d-flex justify-content-center py-4">
							<button
								className={`${styles.buttonDisabled} rounded p-2 px-3 me-3`}
								onClick={() => {
									navigate(`/detail/${id}`);
								}}
							>
								View Page
							</button>
							<button
								className={`${styles.button1} rounded p-2 px-3`}
								onClick={() => {
									handleConfirmation({ type: "publish", status: true });
								}}
							>
								Publish Profile
							</button>
							<button
								className={`${styles.button2} rounded p-2 px-3 d-none`}
								onClick={() => {
									handleConfirmation({ type: "unpublish", status: true });
								}}
							>
								Unpublish Profile
							</button>
						</div>
					</Fragment>
				) : (
					""
				)}
			</div>
			{openModal.status && (
				<ConfirmationModal onClick={handleConfirmation} type={openModal.type} />
			)}
		</div>
	);
}
