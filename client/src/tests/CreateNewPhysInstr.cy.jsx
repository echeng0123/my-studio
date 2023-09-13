import React from "react";
import { BrowserRouter } from "react-router-dom";
import CreateNewPhysInstr from "../components/CreateNewPhysInstr";

describe("<CreateNewPhysInstr />", () => {
	it("renders", () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(
			<BrowserRouter>
				<CreateNewPhysInstr />
			</BrowserRouter>
		);
	});

	it("should autofocus on the first form container input", () => {
		cy.mount(
			<BrowserRouter>
				<CreateNewPhysInstr />
			</BrowserRouter>
		);

		// querySelect the correct html element
		cy.focused().should("have.id", "NP-input-box");
	});

	it("name input should accept typing", () => {
		cy.mount(
			<BrowserRouter>
				<CreateNewPhysInstr />
			</BrowserRouter>
		);
		const typedVal = "nameHere";
		cy.get("#NP-input-box").type(typedVal).should("have.value", typedVal);
	});
});
