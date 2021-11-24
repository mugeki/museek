import { useState } from "react";
import { Icon } from "@iconify/react";
import Navbar from "../../components/Navbar";
import NavbarGuest from "../../components/NavbarGuest";
import ConfirmationModal from "../../components/ConfirmationModal";
import profile from "../../daniel-angele-2gu4hKuFhi0-unsplash.jpg";
import styles from "./Profile.module.css";

export default function Profile() {
	const [openModal, setOpenModal] = useState({ type: "", status: false });
	const handleConfirmation = (value) => {
		setOpenModal(value);
	};
	return (
		<div>
			<NavbarGuest />
			<div className="container py-4 ">
				<h2 className="fw-bolder">Profile Detail</h2>
				<div className="d-flex flex-column flex-md-row mt-5 justify-content-center">
					<img
						src={profile}
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
									className="border-0 bg-white fs-6"
									type="text"
									value="John Doe"
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
									className="border-0 bg-white fs-6"
									type="text"
									value="Bandung, Jawa Barat"
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
									className="border-0 bg-white fs-6"
									style={{ appearance: "none" }}
									disabled
								>
									<option value="-">-</option>
									<option value="vokal">Vokal</option>
									<option value="gitar">Gitar</option>
									<option value="bass">Bass</option>
									<option value="brass">Brass</option>
									<option value="perkusi">Perkusi</option>
									<option value="piano">Piano</option>
									<option value="strings">Strings</option>
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
									className="border-0 bg-white fs-6"
									type="number"
									value="08123456789"
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
									className="border-0 bg-white fs-6"
									type="email"
									value="example@gmail.com"
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
									className="border-0 bg-white fs-6"
									type="textarea"
									value="lorem loremloremloremloremloremloremloremloremloremlorem lorem loremlorem lorem lorem"
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
					<button className={`${styles.buttonDisabled} rounded p-2 px-3 me-3`}>
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
				</div>
			</div>
			{openModal && (
				<ConfirmationModal onClick={handleConfirmation} type={openModal.type} />
			)}
		</div>
	);
}
