// This component is the login function

import { useState } from "react";
import { login } from "../../fetching";
import { useNavigate } from "react-router-dom";

export default function Login({
	token,
	setToken,
	currentUser,
	setCurrentUser,
}) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const nav = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("entering handle submit");
		// console.log(username, password);
		try {
			const register = await login(username, password);
			setToken(register.token);
			setCurrentUser(register.user.username);
			console.log("register in handle submit", register);
			nav("/profile");
		} catch (error) {
			console.error("can't login", error);
		}
	};

	return (
		<div id="login-container">
			<div id="signin-container">
				<h1>Login</h1>
				{/* <h3>Your token is: {token}</h3> */}
				<form onSubmit={handleSubmit}>
					<div id="login-text">
						<label>Username: {""}</label>
						<input
							id="username"
							placeholder="enter username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<br />
						<label>Password: {""}</label>
						<input
							id="password"
							type="password"
							placeholder="enter password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
}
