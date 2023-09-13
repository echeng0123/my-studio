// This function allows a user to register for the site and create a new account

import { useState, useEffect } from "react";
import { fetchAllUsers } from "../../fetching";

const API_URL = `http://localhost:8080/api`;

export default function Register() {
	const [users, setUsers] = useState([]);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [successMessage, setSuccessMessage] = useState(null);
	const [error, setError] = useState(null);

	// const navigate = useNavigate();

	const userObj = {
		username: username,
		password: password,
	};

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			console.log("entering try in handleSubmit");
			if ({ username }.username.length >= 3) {
				const response = await fetch(`${API_URL}/users/register`, {
					method: "POST",
					body: JSON.stringify(userObj),
					headers: { "content-type": "application/json" },
				});
				const result = await response.json();
				console.log("result from handleSubmit", result);
				// setToken(result.data.token);
				setSuccessMessage("Sign up successful");
				// navigate("/login");
			} else {
				alert("Username too short. Please enter at least 3 characters.");
				setUsername("");
				setPassword("");
				// setToken("");
			}
		} catch (error) {
			setError(error.message);
		}
	}

	useEffect(() => {
		async function getAllUsers() {
			const APIResponse = await fetchAllUsers();
			// console.log("APIResponse in Register", APIResponse);
			if (APIResponse) {
				setUsers(APIResponse);
				console.log("users in GAU", users);
			} else {
				console.error("Problem fetching all users");
			}
		}
		getAllUsers();
	}, []);
	return (
		<div>
			<div>
				<h1>hello</h1>
				{users.map((user) => {
					return (
						<>
							<div>
								<p>username: {user.username}</p>
							</div>
						</>
					);
				})}
			</div>
			<div>
				<div id="signin-container">
					<h2 id="login-text">Sign up</h2>
					{/* {successMessage && <h2>{successMessage}</h2>} */}
					{/* {error && <p>{error}</p>} */}
					<form onSubmit={handleSubmit}>
						<div id="login-text">
							<label>
								Username:{" "}
								<input
									id="login-input"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</label>
							<br />
							<label>
								Password:{" "}
								<input
									id="login-input"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</label>
						</div>
						<br />
						<button id="login-button">Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
}
