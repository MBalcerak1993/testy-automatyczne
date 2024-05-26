class Search{
    get searchBox (){
        return cy.get("#search_query_top")
    }

    typeSerchFraz(){
        this.searchBox.type("Test")
    }
}

export default new Search();