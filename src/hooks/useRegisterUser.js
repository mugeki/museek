import { useMutation } from "@apollo/client";
import { RegisterUser } from "../graphql/mutation";

export default function useRegisterUser() {
	const [
		registerUser,
		{ data: dataRegister, loading: loadingRegister, error: errorRegister },
	] = useMutation(RegisterUser, { errorPolicy: "all" });
	return { registerUser, dataRegister, loadingRegister, errorRegister };
}
