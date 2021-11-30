import { useQuery } from "@apollo/client";
import { GetComments } from "../graphql/query";

export default function useGetComments(id) {
	const { data: dataComments, loading: loadingComments } = useQuery(
		GetComments,
		{
			variables: { musician_id: id },
			fetchPolicy: "network-only",
		}
	);
	return { dataComments, loadingComments };
}
