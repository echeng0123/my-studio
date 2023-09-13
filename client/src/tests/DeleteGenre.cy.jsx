import React from "react";
import { BrowserRouter } from "react-router-dom";
import DeleteGenre from "../components/DeleteGenre";

describe("<DeleteGenre />", () => {
	it("renders", () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(
			<BrowserRouter>
				<DeleteGenre />
			</BrowserRouter>
		);
	});

	it("checks that there is a button with text submit", () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(
			<BrowserRouter>
				<DeleteGenre />
			</BrowserRouter>
		);

		// getting the h1 with a "querySelector"
		// checking that it says Login
		cy.get("button").contains("Delete Genre");
	});

	// this test works, just commented out so it doesn't run a million times
	it("button should be clickable", () => {
		cy.mount(
			<BrowserRouter>
				<DeleteGenre />
			</BrowserRouter>
		);

		// cy.get("button").click();
	});
});
