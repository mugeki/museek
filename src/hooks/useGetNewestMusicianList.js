import { useQuery } from "@apollo/client";
import { GetNewestMusicianList } from "../graphql/query";

export default function useGetNewestMusicianList() {
	const { data: dataNewest, loading: loadingNewest } = useQuery(
		GetNewestMusicianList,
		{ fetchPolicy: "no-cache" }
	);
	return { dataNewest, loadingNewest };
}
