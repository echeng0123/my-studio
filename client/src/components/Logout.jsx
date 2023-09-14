// This component handles user logoff.

import { useEffect } from "react";
import { logout } from "../../fetching";
import { useNavigate } from "react-router-dom";

export default function Logout({ token, setToken }) {
	const nav = useNavigate();

	useEffect(() => {
		logout();
		setToken(null);
		nav("/home");
	}, []);
}
