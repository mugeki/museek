import { useQuery } from "@apollo/client";
import { GetPopularMusicianList } from "../graphql/query";

export default function useGetPopularMusicianList() {
	const {
		data: dataPopular,
		loading: loadingPopular,
		error: errorPopular,
	} = useQuery(GetPopularMusicianList, { fetchPolicy: "network-only" });
	return { dataPopular, loadingPopular, errorPopular };
}
