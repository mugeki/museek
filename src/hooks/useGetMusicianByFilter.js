import { useQuery } from "@apollo/client";
import { GetMusicianByFilter } from "../graphql/query";

export default function useGetMusicianByFilter(filter) {
	const {
		data: dataFilter,
		loading: loadingFilter,
		error: errorFilter,
		fetchMore,
	} = useQuery(GetMusicianByFilter, {
		variables: { ...filter, offset: 0 },
		fetchPolicy: "network-only",
	});
	return { dataFilter, loadingFilter, errorFilter, fetchMore };
}
