import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllVSTInstr from "../components/AllVSTInstr";

describe("<AllVSTInstr />", () => {
	it("renders", () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(
			<BrowserRouter>
				<AllVSTInstr />
			</BrowserRouter>
		);
	});

	it("should autofocus on the search input", () => {
		cy.mount(
			<BrowserRouter>
				<AllVSTInstr />
			</BrowserRouter>
		);

		// querySelect the correct html element
		cy.focused().should("have.id", "search-instr-bar");
	});

	it("search input should accept typing", () => {
		cy.mount(
			<BrowserRouter>
				<AllVSTInstr />
			</BrowserRouter>
		);
		const typedVal = "searching";
		cy.get("#search-instr-bar").type(typedVal).should("have.value", typedVal);
	});
});
