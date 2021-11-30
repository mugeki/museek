export default function useValidateForm() {
	const validateForm = (name, value, formValue = undefined) => {
		const regexName = /^[a-zA-Z ]{3,}$/;
		const regexLocation = /^[A-Za-z0-9 ,.-]{4,}$/;
		const regexUsername = /^[A-Za-z0-9_]{6,}$/;
		const regexPassword = /\S{6,}$/;
		const regexEmail =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const regexPhone = /^[0-9]{10,15}$/;

		let messages = {};

		if (!formValue) {
			if (name === "phone" && !regexPhone.test(value)) {
				messages = { [name]: "Nomor tidak valid (10-15 digit)" };
			} else if (name === "phone" && regexPhone.test(value)) {
				messages = { [name]: "" };
			}
			if (name === "email" && !regexEmail.test(value)) {
				messages = { [name]: "Format email tidak valid" };
			} else if (name === "email" && regexEmail.test(value)) {
				messages = { [name]: "" };
			}
			if (name === "full_name" && !regexName.test(value)) {
				messages = { [name]: "Nama tidak valid (min. 3 char, tanpa simbol)" };
			} else if (name === "full_name" && regexName.test(value)) {
				messages = { [name]: "" };
			}
			if (name === "location" && !regexLocation.test(value)) {
				messages = { [name]: "Lokasi tidak valid (min. 4 char)" };
			} else if (name === "location" && regexLocation.test(value)) {
				messages = { [name]: "" };
			}
			if (name === "username" && !regexUsername.test(value)) {
				messages = { [name]: "Username tidak valid (min. 6 char)" };
			} else if (name === "username" && regexUsername.test(value)) {
				messages = { [name]: "" };
			}
			if (name === "password" && !regexPassword.test(value)) {
				messages = {
					[name]: "Password tidak valid (min. 6 char, tanpa spasi)",
				};
			} else if (name === "password" && regexPassword.test(value)) {
				messages = { [name]: "" };
			}
		} else if (formValue) {
			for (const key in formValue) {
				if (formValue[key] === "") {
					messages[key] = "Field tidak boleh kosong";
				}
			}
		}

		return messages;
	};

	return { validateForm };
}
