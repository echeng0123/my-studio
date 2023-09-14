import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";
import { useState } from "react";

function App() {
	const [token, setToken] = useState(null);
	const [currentUser, setCurrentUser] = useState([]);

	return (
		<>
			<div id="app-section">
				<Header />
				<NavBar token={token} setToken={setToken} />
				<MainSection
					token={token}
					setToken={setToken}
					currentUser={currentUser}
					setCurrentUser={setCurrentUser}
				/>
			</div>
			<button>
				<a href="#top">Back to Top</a>
			</button>
		</>
	);
}

export default App;
