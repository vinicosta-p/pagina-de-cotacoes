export class HG_BRASIL_API {
    constructor(key = null){
        const $key = null;
        let $error = false;
        if(key != null) this.$key = key;

    }
    
    async request(endpoint = '') {
        const $url = "https://api.hgbrasil.com/" + endpoint + "?format=json-cors"  + "&key=" + this.$key;
        const response = await fetch($url).then((response) => response.json());
        
        return response;
    }

    async internationalQuotes() {
        const $data = this.request("finance/quotations"); 
        return $data;
    }


}



/*
const $linha_da_table = document.querySelector(".linha-1");
$linha_da_table.textContent = 

console.log(cotas);
*/


