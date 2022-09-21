import * as React from "react";

const SvgDropdownArrow = (props) => (
	<svg
		width={9}
		height={7}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M3.71 6a1 1 0 0 0 1.574 0l3.442-4.382A1 1 0 0 0 7.94 0H1.055a1 1 0 0 0-.787 1.618l3.443 4.381Z"
			fill="#86939E"
		/>
	</svg>
);

export default SvgDropdownArrow;
