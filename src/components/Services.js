export const Services = () => {
	const services = [
		"Web app development",
		"Mobile app development",
		"Technology Consulting",
		"Digital transformation",
		"Big data development",
		"AI development",
		"Blockchain development",
	];

	return (
		<div id="services" className="grid grid-cols-2 grid-rows-4 h-72">
			<div className="col-start-1 sm:col-start-2 col-end-3 row-start-1 row-end-2 sm:row-end-5 text-gray-900 font-bold text-2xl sm:text-3xl md:text-4xl m-auto">
				Services we offer
			</div>
			<div className="col-start-1 col-end-3 sm:col-end-2 row-start-2 row-end-5 sm:row-start-1 sm:row-end-5 text-gray-900 font-medium text-lg md:text-2xl m-auto">
				{services.map((service, key) => {
					return (
						<div>
							⚡
							<a href="/" className="hover:underline">
								{service}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
};
