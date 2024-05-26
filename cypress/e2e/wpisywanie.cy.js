/// <reference types="cypress" />
import Base from "../pages/base"
import search from "../pages/search";


describe("Wpisywanie tekstu w wyszukiwarkę", () => {
    it("wpisywanie tekstu", () =>{
        Base.openHomePage();
        search.typeSerchFraz();
        cy.get("#search_query_top").should("have.value", "Test")
        
        cy.wait(3000)
        cy.get("#search_query_top").clear();
        cy.wait(3000)
        cy.get("#search_query_top").type("Test{Enter}")
        cy.get("p.alert").should("be.visible").and("include.text", "No result")
    })
})
    