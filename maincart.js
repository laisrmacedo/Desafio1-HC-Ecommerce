let getLocalStorage = Object.values(window.localStorage).map(value=>JSON.parse(value));
let calcId = window.localStorage.length;

console.log(getLocalStorage)


    
    if(getLocalStorage[0, 1].id !== undefined){
        let carrinhoVazio = document.querySelector('.vazio');
        carrinhoVazio.classList.add("apagar");
       
        let txtCarrinho = document.querySelector('.show-txt')
        txtCarrinho.classList.remove("apagar");
    
        console.log("if");

        for(calcId = 0; calcId <= 11; calcId++) {
        
            let show = document.querySelector(`#c${getLocalStorage[calcId].id}`);
            let putName = document.querySelector(`#c-nome${getLocalStorage[calcId].id}`);
            let putPrice = document.querySelector(`#c-preco${getLocalStorage[calcId].id}`);
        
            show.classList.remove("apagar");
            putName.innerHTML = `${getLocalStorage[calcId].nome}`
            putPrice.innerHTML = `${getLocalStorage[calcId].preco}`
 
        }
       
    }   else{
        let carrinhoVazio = document.querySelector('.vazio');
        carrinhoVazio.classList.add("apagar");
       
        let txtCarrinho = document.querySelector('.show-txt')
        txtCarrinho.classList.remove("apagar");
    
        console.log("else")
    
        for(calcId = 1; calcId <= 11; calcId++) {
            let show = document.querySelector(`#c${getLocalStorage[calcId].id}`);
            let putName = document.querySelector(`#c-nome${getLocalStorage[calcId].id}`);
            let putPrice = document.querySelector(`#c-preco${getLocalStorage[calcId].id}`);
    
            show.classList.remove("apagar");
            putName.innerHTML = `${getLocalStorage[calcId].nome}`
            putPrice.innerHTML = `${getLocalStorage[calcId].preco}`
    
            console.log(getLocalStorage[calcId].id)
        }
        
    }
    

