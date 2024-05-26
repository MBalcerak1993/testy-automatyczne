/// <reference types="cypress" />

describe("klnięcie w element na stronie", () => {
    it ("kliknięcie w zakładkę Contact us", ()=>{
        cy.visit("/");
        cy.get('a[title="Contact us"]').click();
    })
})