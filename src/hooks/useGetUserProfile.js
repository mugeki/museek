import { useQuery } from "@apollo/client";
import { GetUserProfile } from "../graphql/query";

export default function useGetUserProfile(id) {
	const {
		data: dataProfile,
		loading: loadingProfile,
		error: errorProfile,
	} = useQuery(GetUserProfile, { variables: { id } });
	return { dataProfile, loadingProfile, errorProfile };
}
