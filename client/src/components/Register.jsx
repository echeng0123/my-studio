// This function allows a user to register for the site and create a new account

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllUsers } from "../../fetching";

const API_URL = `http://localhost:8080/api`;

export default function Register() {
	const [users, setUsers] = useState([]);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [successMessage, setSuccessMessage] = useState(null);
	const [error, setError] = useState(null);

	const navigate = useNavigate();

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
				await response.json();
				setSuccessMessage("Sign up successful");
				alert("Sign up successful!");
				navigate("/profile");
			} else {
				alert("Username too short. Please enter at least 3 characters.");
				setUsername("");
				setPassword("");
			}
		} catch (error) {
			setError(error.message);
		}
	}

	useEffect(() => {
		async function getAllUsers() {
			const APIResponse = await fetchAllUsers();
			if (APIResponse) {
				setUsers(APIResponse);
			} else {
				console.error("Problem fetching all users");
			}
		}
		getAllUsers();
	}, []);
	return (
		<div>
			<div>
				<div id="create-user-container">
					<h1>Sign Up</h1>
					<form onSubmit={handleSubmit}>
						<div id="login-text">
							<label>
								Username:{" "}
								<input
									id="login-input"
									placeholder="enter username"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</label>
							<br />
							<label>
								Password:{" "}
								<input
									id="login-input"
									type="password"
									placeholder="enter password"
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

// old code rendering users list
// {users.map((user) => {
//     return (
//         <>
//             <div>
//                 <p>username: {user.username}</p>
//             </div>
//         </>
//     );
// })}
