/// <reference types="cypress" />

import Base from "../pages/base";
import Home from "../pages/Home"; 
import women from "../pages/women";

describe("Test związany z checkboxem", () => {
    it("Kliknięcie w zakładkę women", () => {
        Base.openHomePage();
        Home.clickOnWomenTab();
        cy.url().should("include", "id_category=3&controller=category")
    })

    it("zaznaczenie checkboxa w zakładce women", () => {
        women.checkTops();
        women.checkdresses();
        women.checkSize();

    })
})