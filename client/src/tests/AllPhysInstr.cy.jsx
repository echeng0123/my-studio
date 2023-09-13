import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllPhysInstr from "../components/AllPhysInstr";

describe("<AllPhysInstr />", () => {
	it("renders", () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(
			<BrowserRouter>
				<AllPhysInstr />
			</BrowserRouter>
		);
	});

	it("should autofocus on the search input", () => {
		cy.mount(
			<BrowserRouter>
				<AllPhysInstr />
			</BrowserRouter>
		);

		// querySelect the correct html element
		cy.focused().should("have.id", "search-instr-bar");
	});

	it("search input should accept typing", () => {
		cy.mount(
			<BrowserRouter>
				<AllPhysInstr />
			</BrowserRouter>
		);
		const typedVal = "searching";
		cy.get("#search-instr-bar").type(typedVal).should("have.value", typedVal);
	});
});
