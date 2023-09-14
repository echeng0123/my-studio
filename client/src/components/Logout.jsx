// This component handles user logoff.

import { useEffect } from "react";
import { logout } from "../../fetching";
import { useNavigate } from "react-router-dom";

export default function Logout({ token, setToken }) {
	const nav = useNavigate();

	useEffect(() => {
		// async function logoutFunction() {
		// 	await

		// }
		// logoutFunction();
		logout();
		localStorage.removeItem("token");
		setToken(null);
		nav("/home");
	}, []);
}
