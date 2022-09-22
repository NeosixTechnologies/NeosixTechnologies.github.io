import "./App.css";
import { ContactUs } from "./components/ContactUs";
import { Header } from "./components/Header";
import { Mission } from "./components/Mission";
import { Services } from "./components/Services";
import { TeamMembers } from "./components/TeamMembers";
import { WhatWeDo } from "./components/WhatWeDo";

function App() {
	return (
		<div id="home" className="App bg-white min-h-screen">
			<div className="max-w-7xl mx-auto grid gap-10 md:gap-14 p-8">
				<Header />
				<WhatWeDo />
				<Mission />
				<Services />
				<TeamMembers />
				<ContactUs />
			</div>
		</div>
	);
}

export default App;
