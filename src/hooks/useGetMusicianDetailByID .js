import { useQuery } from "@apollo/client";
import { GetMusicianDetailByID } from "../graphql/query";

export default function useGetMusicianDetailByID(id) {
	const {
		data: dataDetail,
		loading: loadingDetail,
		error: errorDetail,
	} = useQuery(GetMusicianDetailByID, { variables: { id } });
	return { dataDetail, loadingDetail, errorDetail };
}
