import React from 'react';

const Sidebar = () => {
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
};

export default Sidebar;
