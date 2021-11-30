export default function LoadingSmallOrange({ w = "24px", h = "24px" }) {
	return (
		<svg
			style={{
				margin: "auto",
				background: "none",
				display: "block",
				shapeRendering: "auto",
			}}
			width={w}
			height={h}
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid"
		>
			<circle
				cx={50}
				cy={50}
				fill="none"
				stroke="#f2af02"
				strokeWidth={10}
				r={35}
				strokeDasharray="164.93361431346415 56.97787143782138"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					repeatCount="indefinite"
					dur="1s"
					values="0 50 50;360 50 50"
					keyTimes="0;1"
				/>
			</circle>
		</svg>
	);
}
