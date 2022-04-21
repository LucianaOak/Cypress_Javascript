class PesquisaGoogleElements{

    botaoFazerBusca = ()=> {
        cy.get('input[name="q"]')
            .type('Dell{enter}');
     }
    
    encontraElemento = ()=>{
        cy.get(':nth-child(3) > [data-text-ad="1"] > .cUezCb > .v5yQqb > .sVXRqc > .CCgQ5 > span');
    }
    
}

export default PesquisaGoogleElements;