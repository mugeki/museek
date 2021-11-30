import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import NavbarGuest from "../../components/NavbarGuest";
import ConfirmationModal from "../../components/ConfirmationModal";
import styles from "./Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import useGetUserProfile from "../../hooks/useGetUserProfile";
import useUpdateUser from "../../hooks/useUpdateUser";
import Loading from "../../components/Loading";
import { useNavigate, useParams } from "react-router-dom";
import Error from "../../components/Error";
import useUpdateUserStatus from "../../hooks/useUpdateUserStatus";
import TextareaAutosize from "react-textarea-autosize";
import { app } from "../../firebase/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { login } from "../../store/loginSlice";
import useValidateForm from "../../hooks/useValidateForm";

export default function Profile() {
	const navigate = useNavigate();
	const reduxData = useSelector((state) => state.auth);
	const isLoggedIn = useSelector((state) => state.auth.login);
	const username = useSelector((state) => state.auth.username);
	const userId = useSelector((state) => state.auth.userId);
	const dispatch = useDispatch();
	const { id } = useParams();
	const { validateForm } = useValidateForm();

	const [openModal, setOpenModal] = useState(false);
	const [editField, setEditField] = useState(false);
	const [loadingUpload, setLoadingUpload] = useState(false);
	const [errorMsg, setErrorMsg] = useState({
		full_name: "",
		location: "",
		phone: "",
		email: "",
	});
	const [form, setForm] = useState({
		img_link: "",
		full_name: "",
		location: "",
		instrument: "",
		phone: "",
		email: "",
		about: "",
		published: false,
	});

	const { dataProfile, loadingProfile, errorProfile } =
		useGetUserProfile(userId);
	const { updateUser, loadingUpdate } = useUpdateUser();
	const { updateUserStatus, loadingUpdateStatus } = useUpdateUserStatus();

	if (errorProfile) console.log(errorProfile);

	useEffect(() => {
		let mounted = true;
		const onMount = () => {
			if (
				!loadingProfile &&
				!loadingUpdate &&
				!loadingUpdateStatus &&
				dataProfile
			) {
				setForm({ ...dataProfile.user_by_pk });
			}
		};
		if (mounted) onMount();
		return () => {
			mounted = false;
		};
	}, [loadingUpdateStatus, loadingUpdate, loadingProfile, dataProfile]);

	const handleModal = (value) => {
		if (value.hasOwnProperty("published")) {
			updateUserStatus({ variables: { id: id, ...value } });
			setOpenModal(false);
		} else {
			setOpenModal(value);
		}
	};

	const onChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setForm({ ...form, [name]: value });
	};

	const onBlur = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		const messages = validateForm(name, value);
		setErrorMsg({ ...errorMsg, ...messages });
	};

	const onChangeImage = (e) => {
		if (app) {
			const file = e.target.files[0];
			const storageRef = getStorage();
			const fileRef = ref(storageRef, file.name);
			setLoadingUpload(true);
			uploadBytes(fileRef, file).then(() => {
				getDownloadURL(fileRef)
					.then((url) => {
						setForm({ ...form, img_link: url });
					})
					.then(() => {
						setLoadingUpload(false);
					});
			});
		}
	};

	const onClickEdit = (e) => {
		e.preventDefault();
		setEditField(!editField);
	};

	const onClickSave = (e) => {
		e.preventDefault();
		const messages = validateForm(undefined, undefined, form);
		setErrorMsg({ ...errorMsg, ...messages });
		const invalidFields = Object.keys(messages).filter(
			(key) => messages[key] !== "" && key !== "about"
		);
		console.log(invalidFields);
		if (invalidFields.length === 0) {
			updateUser({
				variables: {
					...form,
					id,
					username,
					commenter_img: form.img_link,
				},
			});
			dispatch(login({ ...reduxData, imgLink: form.img_link }));
			setEditField(!editField);
		}
	};

	if (userId === -1 || userId !== parseInt(id)) {
		return <Error code={401} message={"Unauthorized"} />;
	}

	return (
		<div>
			{!isLoggedIn ? <NavbarGuest /> : <Navbar />}
			<div className="container py-4 ">
				<h2 className="fw-bolder">Profile Detail</h2>
				{loadingProfile || loadingUpdate || loadingUpdateStatus ? (
					<div className="position-absolute top-50 start-50 translate-middle">
						<Loading />
					</div>
				) : !loadingProfile &&
				  !loadingUpdate &&
				  !loadingUpdateStatus &&
				  dataProfile ? (
					<>
						<form
							className="d-flex flex-column flex-md-row mt-5 justify-content-center"
							onSubmit={onClickSave}
						>
							<label className="pe-md-4" htmlFor="img-input">
								{loadingUpload ? (
									<div className="d-block m-auto" style={{ width: "360px" }}>
										<Loading />
										<p className="text-center" style={{ color: "#f2af02" }}>
											Uploading image...
										</p>
									</div>
								) : (
									<img
										src={form.img_link}
										alt="profile"
										className={`${styles.profile} rounded`}
										style={
											!editField ? { cursor: "default" } : { cursor: "pointer" }
										}
									/>
								)}

								<input
									className="d-none"
									type="file"
									id="img-input"
									disabled={!editField}
									onChange={onChangeImage}
								/>
							</label>

							<div className={`${styles.form} d-flex flex-column mt-4 mt-md-0`}>
								<label className="fw-bolder fs-5">
									Nama Lengkap
									<div
										className={
											(errorMsg.full_name !== "" ? styles.error : "mb-4") +
											" rounded d-flex justify-content-between"
										}
										style={{ borderBottom: "1px solid #C4C4C4" }}
									>
										<input
											className={`${styles.input} rounded border-0 bg-white fs-6 w-100 ps-1`}
											type="text"
											name="full_name"
											value={form.full_name}
											disabled={!editField}
											onChange={onChange}
											onBlur={onBlur}
										/>
									</div>
									<p className="fw-normal fs-6 text-danger">
										{errorMsg.full_name}
									</p>
								</label>
								<label className="fw-bolder fs-5">
									Lokasi
									<div
										className={
											(errorMsg.location !== "" ? styles.error : "mb-4") +
											" rounded d-flex justify-content-between"
										}
										style={{ borderBottom: "1px solid #C4C4C4" }}
									>
										<input
											className={`${styles.input} rounded border-0 bg-white fs-6 w-100 ps-1`}
											type="text"
											name="location"
											value={form.location}
											disabled={!editField}
											onChange={onChange}
											onBlur={onBlur}
										/>
									</div>
									<p className="fw-normal fs-6 text-danger">
										{errorMsg.location}
									</p>
								</label>
								<label className="fw-bolder fs-5">
									Instrumen
									<div
										className="rounded d-flex justify-content-between mb-4"
										style={{ borderBottom: "1px solid #C4C4C4" }}
									>
										<select
											className={`${styles.input} rounded border-0 bg-white fs-6 w-100 ps-1`}
											style={{ appearance: "none" }}
											name="instrument"
											value={form.instrument}
											disabled={!editField}
											onChange={onChange}
											onBlur={onBlur}
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
									</div>
								</label>
								<label className="fw-bolder fs-5">
									No. Handphone
									<div
										className={
											(errorMsg.phone !== "" ? styles.error : "mb-4") +
											" rounded d-flex justify-content-between"
										}
										style={{ borderBottom: "1px solid #C4C4C4" }}
									>
										<input
											className={`${styles.input} rounded border-0 bg-white fs-6 w-100 ps-1`}
											type="number"
											name="phone"
											value={form.phone}
											disabled={!editField}
											onChange={onChange}
											onBlur={onBlur}
										/>
									</div>
									<p className="fw-normal fs-6 text-danger">{errorMsg.phone}</p>
								</label>
								<label className="fw-bolder fs-5">
									Email
									<div
										className={
											(errorMsg.email !== "" ? styles.error : "mb-4") +
											" rounded d-flex justify-content-between"
										}
										style={{ borderBottom: "1px solid #C4C4C4" }}
									>
										<input
											className={`${styles.input} rounded border-0 bg-white fs-6 w-100 ps-1`}
											type="email"
											name="email"
											value={form.email}
											disabled={!editField}
											onChange={onChange}
											onBlur={onBlur}
										/>
									</div>
									<p className="fw-normal fs-6 text-danger">{errorMsg.email}</p>
								</label>
								<label className="fw-bolder fs-5">
									Tentang
									<div
										className="rounded d-flex justify-content-between mb-4"
										style={{ borderBottom: "1px solid #C4C4C4" }}
									>
										<TextareaAutosize
											className={`${styles.input} rounded border-0 bg-white fs-6 w-100 ps-1`}
											style={{ resize: "none" }}
											name="about"
											value={form.about}
											disabled={!editField}
											onChange={onChange}
											onBlur={onBlur}
										/>
									</div>
								</label>
								{!editField ? (
									<button
										className={`${styles.button2} rounded p-2 px-3 ms-auto`}
										onClick={onClickEdit}
									>
										Edit
									</button>
								) : (
									<button
										className={`${styles.button1} rounded p-2 px-3 ms-auto`}
										type="submit"
									>
										Save
									</button>
								)}
							</div>
						</form>
						<div className="d-flex justify-content-center py-4">
							<button
								className={`${
									!form.published
										? `${styles.buttonDisabled}`
										: `${styles.button1}`
								} rounded p-2 px-3 me-3`}
								onClick={() => {
									navigate(`/musician/${userId}`);
								}}
								disabled={!form.published}
							>
								View Page
							</button>
							{!form.published ? (
								<button
									className={`${styles.button1} rounded p-2 px-3`}
									onClick={() => {
										handleModal(!openModal);
									}}
								>
									Publish Profile
								</button>
							) : (
								<button
									className={`${styles.button2} rounded p-2 px-3`}
									onClick={() => {
										handleModal(!openModal);
									}}
								>
									Unpublish Profile
								</button>
							)}
						</div>
					</>
				) : (
					""
				)}
			</div>
			{openModal && (
				<ConfirmationModal onClick={handleModal} published={form.published} />
			)}
		</div>
	);
}
