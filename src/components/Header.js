export const Header = () => {
	return (
		<div className="grid grid-cols-2 grid-rows-2 text-gray-900 font-sans">
			<a
				href="#home"
				className="m-auto md:mx-0 text-center md:text-left col-start-1 col-end-3 md:col-end-2 row-start-1 row-end-2 md:row-start-1 md:row-end-3 text-3xl md:text-lg uppercase font-extrabold md:py-8 md:px-2"
			>
				Neosix Technologies
			</a>

			<div className="transition ease-in-out scroll-smooth m-auto md:mx-0 col-start-1 col-end-3 md:col-start-2 md:flex md:justify-end row-start-2 row-end-3 md:row-start-1 md:row-end-3 font-medium">
				<a
					href="#home"
					className="hover:-translate-y-2 duration-500 px-1 md:px-2"
				>
					Home
				</a>
				<a
					href="#services"
					className="hover:-translate-y-2 duration-500 px-1 md:px-2"
				>
					Services
				</a>
				<a
					href="#team-members"
					className="hover:-translate-y-2 duration-500 px-1 md:px-2"
				>
					Team
				</a>
				<a
					href="#contact"
					className="hover:-translate-y-2 duration-500 px-1 md:px-2"
				>
					Contact
				</a>
			</div>
		</div>
	);
};
