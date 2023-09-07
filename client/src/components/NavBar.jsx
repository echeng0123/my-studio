// This component is the navigation bar for the page

import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<div id="nav-bar-section">
			<h1>NAVIGATION BAR HERE</h1>
			<Link to="/home">Home</Link>
			<Link to="/physical">Physical Instruments</Link>
			<Link to="/virtual">Virtual Instruments</Link>
			<Link to="/genres">Genres</Link>
			{/* <Link to="/login">Login</Link>
			<Link to="/logout">Logout</Link> */}
		</div>
	);
}
