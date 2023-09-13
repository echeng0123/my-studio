import React from "react";
import { BrowserRouter } from "react-router-dom";
import EditPhysInstr from "../components/EditPhysInstr";

describe("<EditPhysInstr />", () => {
	it("renders", () => {
		cy.mount(
			<BrowserRouter>
				<EditPhysInstr />
			</BrowserRouter>
		);
	});

	it("checks that there is an h2 with text Edit Physical Instrument", () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(
			<BrowserRouter>
				<EditPhysInstr />
			</BrowserRouter>
		);

		// getting the h1 with a "querySelector"
		// checking that it says EditPhysInstr
		cy.get("button").contains("Edit Physical Instrument");
	});
});
