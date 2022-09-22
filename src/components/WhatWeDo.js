import { useEffect, useState } from "react";

export const WhatWeDo = () => {
	const changingText = ["business", "operations", "processes", "tasks"];
	const [text, setText] = useState(changingText[0]);
	const [count, setCount] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setCount(count + 1);

			changingText.length - 1 === count && setCount(0);

			setText(changingText[count]);
		}, 5000);
	}, [count]);

	return (
		<div className="grid grid-cols-2 grid-rows-4 h-52 md:h-72">
			<div className="col-start-1 col-end-3 md:col-end-2 row-start-1 row-end-4 text-gray-900 text-center md:text-left font-black text-3xl sm:text-4xl md:text-5xl p-1 md:p-3 m-auto">
				Work with our developers to enhance your {text}
			</div>
			<div className="col-start-1 col-end-3 md:col-end-2 row-start-4 row-end-5 p-1 md:p-3 m-auto md:mx-0 md:my-auto">
				<button className="bg-gray-100 hover:bg-gray-200 rounded-md shadow-lg w-28 h-10 border border-gray-400 text-gray-900 font-semibold mx-1 hover:cursor-pointer">
					<a href="#services">Learn more</a>
				</button>
				<button className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-md shadow-lg w-24 h-10 text-gray-50 font-semibold mx-1 hover:cursor-pointer">
					<a href="#contact-us">Let's talk</a>
				</button>
			</div>
			<div className="hidden md:flex md:justify-end md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-5 font-regular">
				{/* [gambar tani2 together or gambar our products] */}
				<img
					src={require("../images/development-center.png")}
					className="duration-300 hover:-translate-y-2 w-80"
					alt="dev"
				/>
			</div>
		</div>
	);
};
