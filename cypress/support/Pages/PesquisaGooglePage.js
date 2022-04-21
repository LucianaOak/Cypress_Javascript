/// <reference types="Cypress"/>

import PesquisaGoogleElements from '../Elements/PesquisaGoogleElements'
const url = Cypress.config("baseUrl");
const pesquisaGoogleElements = new PesquisaGoogleElements; 


class PesquisaGooglePage{
    
    acessaSite(){
        cy.visit(url);
    }

    fazerBusca(){
        cy.get(pesquisaGoogleElements.botaoFazerBusca());
    }

    
    clicaElementoencontrado(){
        cy.get(pesquisaGoogleElements.encontraElemento());
        cy.get('encontraElemento').click();

    }


    
}

export default PesquisaGooglePage;