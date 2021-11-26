import { useQuery } from "@apollo/client";
import { GetMusicianByFilter } from "../graphql/query";

export default function useGetMusicianByFilter(filter) {
	const {
		data: dataFilter,
		loading: loadingFilter,
		error: errorFilter,
	} = useQuery(GetMusicianByFilter, { variables: filter });
	return { dataFilter, loadingFilter, errorFilter };
}
