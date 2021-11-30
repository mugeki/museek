import { useQuery } from "@apollo/client";
import { GetMusicianByFilter } from "../graphql/query";

export default function useGetMusicianByFilter(filter) {
	const {
		data: dataFilter,
		loading: loadingFilter,
		error: errorFilter,
	} = useQuery(GetMusicianByFilter, {
		variables: filter,
		fetchPolicy: "network-only",
	});
	return { dataFilter, loadingFilter, errorFilter };
}
