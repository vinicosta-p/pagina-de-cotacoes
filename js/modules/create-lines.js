import {HG_KEY} from "../config/config.js"
import { HG_BRASIL_API } from "./HG-api.js";

function componenteLinhasDaTabela($corpo_da_tabela, cotas, valores){
    const numCotacoes = valores.length;
    const maxColunas = 3;
    const values = ["name", "buy", "variation"]
    for(let index = 0; index < numCotacoes; index++){
        
        let nova_linha = document.createElement("tr");
        let $nova_linha = $corpo_da_tabela.appendChild(nova_linha);
        
        for(let inicioColunas = 0; inicioColunas < maxColunas; inicioColunas++){
            let elemetoColuna = document.createElement("td");
            let results = $nova_linha.appendChild(elemetoColuna);
            results.textContent = cotas[valores[index]][values[inicioColunas]];
        }
    }
}

const listaDeMoedas = ["ARS", "AUD", "BTC", "CAD", "CNY", "EUR", "GBP", "JPY","USD"]

const requestApi = new HG_BRASIL_API(HG_KEY);
let value = await requestApi.internationalQuotes();
let cotas = value.results.currencies



const $corpo_da_tabela = document.querySelector("#raiz-tbody");

componenteLinhasDaTabela($corpo_da_tabela, cotas, listaDeMoedas);





