import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";

function App() {
	return (
		<>
			<div id="app-section">
				<Header />
				<NavBar />
				<MainSection />
			</div>
			<button>
				<a href="#top">Back to Top</a>
			</button>
		</>
	);
}

export default App;
