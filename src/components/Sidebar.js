import React from 'react';
import { useSelector } from 'react-redux';
function Sidebar() {
	const isMenuOpen = useSelector(state => state?.app?.isMenuOpen);

	//Early Return
	if (!isMenuOpen) {
		return null;
	}
	return (
		<div className="p-5 w-48 shadow-lg">
			<ul className="mt-1">
				<li>Home</li>
				<li>Shorts</li>
				<li>Videos</li>
				<li>Live</li>
			</ul>
			<h1 className="font-bold mt-2">Subscription</h1>
			<ul>
				<li>Music</li>
				<li>Sports</li>
				<li>Gaming</li>
				<li>Movies</li>
			</ul>

			<h1 className="font-bold mt-2">Watch Later</h1>
			<ul>
				<li>Music</li>
				<li>Sports</li>
				<li>Gaming</li>
				<li>Movies</li>
			</ul>
		</div>
	);
}

export default Sidebar;
