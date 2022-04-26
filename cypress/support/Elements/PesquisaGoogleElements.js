class PesquisaGoogleElements{

    botaoFazerBusca = ()=> {
        cy.get('input[name="q"]')
            .type('Dell{enter}');
     }
    
    encontraElemento = ()=>{
        cy.get('[href="https://www.dell.com/pt-br"] > .LC20lb').click();
        cy.url().should('eq', 'https://www.google.com.br/search?q=Dell&source=hp&ei=3kpnYvi_Ce695OUPlNSzgAI&iflsig=AHkkrS4AAAAAYmdY7pPrchesCddgqDUT2Nn8ROAjTIgJ&ved=0ahUKEwj4ppHxybD3AhXuHrkGHRTqDCAQ4dUDCAc&uact=5&oq=Dell&gs_lcp=Cgdnd3Mtd2l6EAMyCwgAEIAEELEDEIMBMhEILhCABBCxAxCDARDHARDRAzILCAAQgAQQsQMQgwEyCAgAELEDEIMBMggIABCxAxCDATIICAAQsQMQgwEyCwguEIAEEMcBEKMCMgUIABCABDIICAAQsQMQgwEyCAgAELEDEIMBOggILhCxAxCDAVBPWMYBYIsCaAFwAHgAgAGNAYgBlQKSAQMwLjKYAQCgAQGwAQA&sclient=gws-wiz');
    }
    
}

export default PesquisaGoogleElements;