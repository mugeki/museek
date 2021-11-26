import React from "react";
import MusicianCardExplore from "./MusicianCardExplore";

export default function MusicianList(props) {
	const { entries } = props;
	// const handleScroll = (e, onLoadMore) => {
	// 	if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
	// 		onLoadMore();
	// 	}
	// };
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
				/>
			))}
		</div>
	);
}
