import { useQuery } from "@apollo/client";
import { GetNewestMusicianList } from "../graphql/query";

export default function useGetNewestMusicianList() {
	const {
		data: dataNewest,
		loading: loadingNewest,
		error: errorNewest,
	} = useQuery(GetNewestMusicianList, { fetchPolicy: "network-only" });
	return { dataNewest, loadingNewest, errorNewest };
}
