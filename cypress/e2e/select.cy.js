/// <reference types="cypress" />

describe("Test związany z selectem", () => {
    it("Kliknięcie w zakładkę women", () => {
        cy.visit("/");
        cy.get(`a[title="Women"]`).click();
        cy.url().should("include", "id_category=3&controller=category")

    })

    it("wybranie filtra instock", () => {
        cy.get("#selectProductSort").select("In stock")
        cy.get("#selectProductSort").select("In stock").should("have.value", "quantity:desc")
    })

})