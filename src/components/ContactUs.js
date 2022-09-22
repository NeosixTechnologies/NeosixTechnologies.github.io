export const ContactUs = () => {
	return (
		<div
			id="contact-us"
			className="grid grid-rows-4 bg-gradient-to-r from-emerald-500 to-cyan-500 h-52 rounded-3xl shadow-2xl"
		>
			<div className="row-start-1 row-end-3 text-gray-50 font-bold text-xl sm:text-2xl md:text-3xl m-auto py-8 md:py-16 px-8">
				Grow your business with NeoDev Technologies 👩🏻‍💻
			</div>
			<div className="row-start-3 row-end-5 m-auto">
				<button className="bg-gray-100 hover:bg-gray-200 rounded-md w-28 h-10 border border-gray-400 text-gray-900 font-semibold mx-1 hover:cursor-pointer">
					<a href="#services">Learn more</a>
				</button>
				<button className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-md w-24 h-10 text-gray-50 font-semibold mx-1 hover:cursor-pointer">
					<a href="#contact-us">Let's talk</a>
				</button>
			</div>
		</div>
	);
};
