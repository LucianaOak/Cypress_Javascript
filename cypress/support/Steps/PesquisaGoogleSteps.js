/* global Given, When, Then */

import PesquisaGooglePage from '../Pages/PesquisaGooglePage'
const pesquisaGooglePage = new PesquisaGooglePage


Given ('estou no site do Google', ()=> {
    pesquisaGooglePage.acessaSite();
  })


When ('fizer uma busca por Dell', ()=> {
  pesquisaGooglePage.fazerBusca();
  })
  


Then ('poderei ir para a pagina da Dell', ()=>{
pesquisaGooglePage.clicaElementoencontrado();
})