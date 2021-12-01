import { useQuery } from "@apollo/client";
import { GetPopularMusicianList } from "../graphql/query";

export default function useGetPopularMusicianList() {
	const { data: dataPopular, loading: loadingPopular } = useQuery(
		GetPopularMusicianList,
		{ fetchPolicy: "no-cache" }
	);
	return { dataPopular, loadingPopular };
}
