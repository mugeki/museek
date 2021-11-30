import { useLazyQuery } from "@apollo/client";
import { GetUserCredential } from "../graphql/query";

export default function useGetUserCredential() {
	const [getUserCredential, { data, loading, error }] =
		useLazyQuery(GetUserCredential);
	return { getUserCredential, data, loading, error };
}
