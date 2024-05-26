class women {
    get topBox(){
        return cy.get("#layered_category_4")
    }

    get dressesBox (){
        return cy.get("#layered_category_8")
    }

    get sizeBox(){
        return cy.get(`#ul_layered_id_attribute_group_1 input`).check();
    }
    checkTops(){
        this.topBox.check();
    }
    checkdresses(){
        this.dressesBox.check();
    }

    checkSize(){
        this.sizeBox.check();
    }
    

}

export default new women();