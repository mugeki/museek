import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useGetUserProfile from "../../hooks/useGetUserProfile";
import MusicianCardExplore from "./MusicianCardExplore";

export default function MusicianList(props) {
	const { entries } = props;
	const userId = useSelector((state) => state.auth.userId);
	const { dataProfile, loadingProfile } = useGetUserProfile(userId);
	const [likedMusician, setLikedMusician] = useState([]);

	useEffect(() => {
		let mounted = true;
		const onMount = () => {
			if (!loadingProfile && userId !== -1) {
				if (dataProfile.user_by_pk) {
					setLikedMusician(dataProfile.user_by_pk.liked_musician);
				} else {
					setLikedMusician([]);
				}
			}
		};
		if (mounted) onMount();
		return () => {
			mounted = false;
		};
	}, [loadingProfile, dataProfile, likedMusician, userId]);

	return (
		<div className="d-flex flex-wrap py-3">
			{entries.map((item) => (
				<MusicianCardExplore
					key={item.id}
					id={item.id}
					profile={item.img_link}
					fullName={item.full_name}
					instrument={item.instrument}
					location={item.location}
					likes={item.likes}
					userLikedMusician={likedMusician}
				/>
			))}
		</div>
	);
}
