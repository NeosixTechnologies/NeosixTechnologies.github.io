export const TeamMembers = () => {
	const teamMembers = [
		{
			name: "Zakwan Shahrum",
			role: "Chief Executive Officer",
		},
		{
			name: "Haziq Z. Ariffin",
			role: "Chief Marketing Officer",
		},
		{
			name: "Harith Pg. Sufri",
			role: "Chief Technology Officer",
		},
		{
			name: "Ghassani Yakub",
			role: "Chief Information Officer",
		},
		{
			name: "Rasyid Abdullmalek",
			role: "Chief Security Officer",
		},
		{
			name: "Razin Zunidi",
			role: "Chief Development Officer",
		},
	];

	return (
		<div
			id="team-members"
			className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
		>
			<div className="m-auto col-start-1 col-end-2 sm:col-end-3 lg:col-end-4">
				<span className="text-gray-900 font-bold text-2xl sm:text-3xl md:text-4xl">
					Team members ✨
				</span>
			</div>
			{teamMembers.map((member, key) => {
				return (
					<div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl hover:shadow-2xl hover:scale-110 duration-500 hover:cursor-pointer h-24 p-5 text-center">
						<p className="text-gray-50 text-xl font-semibold">{member.name}</p>
						<p className="text-gray-400 text-l font-medium">{member.role}</p>
					</div>
				);
			})}
		</div>
	);
};
