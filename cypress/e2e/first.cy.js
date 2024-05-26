/// <reference types="cypress" />

describe("pierwszy test automatyczny", () =>{
    it("otwarcie strony google.com", () => {
        cy.visit("https://google.com");
    })
})