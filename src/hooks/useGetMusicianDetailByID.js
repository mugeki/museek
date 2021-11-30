import { useQuery } from "@apollo/client";
import { GetMusicianDetailByID } from "../graphql/query";
import { SubscribeLikes } from "../graphql/subscription";

export default function useGetMusicianDetailByID(id) {
	const {
		data: dataDetail,
		loading: loadingDetail,
		error: errorDetail,
		subscribeToMore,
	} = useQuery(GetMusicianDetailByID, {
		variables: { id },
		fetchPolicy: "network-only",
	});

	const subscribeLikes = () => {
		subscribeToMore({
			document: SubscribeLikes,
			variables: { id },
			updateQuery: (prev, { subscriptionData }) => {
				if (Object.keys(prev).length === 0 && prev.constructor === Object) {
					return;
				}
				return Object.assign({}, prev, {
					likes: subscriptionData.data.user_by_pk.likes,
				});
			},
		});
	};

	return { dataDetail, loadingDetail, errorDetail, subscribeLikes };
}
