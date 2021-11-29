import { useSubscription } from "@apollo/client";
import { SubscribeLikes } from "../graphql/subscription";

export default function useSubscribeLikes(id) {
	const { data: dataSubs, loading: loadingSubs } = useSubscription(
		SubscribeLikes,
		{ variables: { id } }
	);
	return { dataSubs, loadingSubs };
}
