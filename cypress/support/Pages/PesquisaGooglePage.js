/// <reference types="Cypress"/>

import PesquisaGoogleElements from '../Elements/PesquisaGoogleElements'
const url = Cypress.config("baseUrl");
const pesquisaGoogleElements = new PesquisaGoogleElements; 


class PesquisaGooglePage{
    
    acessaSite(){
        cy.visit(url);
    }

    fazerBusca(){
        pesquisaGoogleElements.botaoFazerBusca();
    }

    
    clicaElementoencontrado(){
        pesquisaGoogleElements.encontraElemento();

    }


    
}

export default PesquisaGooglePage;