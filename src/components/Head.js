import React from 'react';

const Head = () => {
	return (
		<div className="grid grid-flow-col p-5  shadow-lg">
			<div className="flex col-span-1">
				<img className="h-8" alt="menu" src="https://cdn-icons-png.flaticon.com/512/7216/7216128.png"></img>

				<img
					className="h-8 ml-2"
					alt="youtube-logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/2560px-YouTube_Logo_%282013-2017%29.svg.png"
				></img>
			</div>
			<div className="col-span-10 px-10 text-center">
				<input className="w-1/2 border border-gray-400 rounded-l-full p-2" type="text"></input>
				<button className="border border-gray-400 rounded-r-full p-2 bg-gray-100 px-4">🔍</button>
			</div>

			<div className="col-span-1">
				<img
					className="h-8"
					alt="user"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMYSQ3I5N_1wrsEKTZ4W1P4TNJnUSnThL1sGveSUI&s"
				></img>
			</div>
		</div>
	);
};

export default Head;
