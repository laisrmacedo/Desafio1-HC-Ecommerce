let getLocalStorage = Object.values(window.localStorage).map(value=>JSON.parse(value));
let calcId = window.localStorage.length;

// let a = typeof localStorage.key(1); 
// let anyNumber = 0;
// console.log(typeof localStorage.key(2))
console.log(getLocalStorage)


// //for(a = 0; a <= window.localStorage.length; a++){
// if(typeof localStorage.key(0) === typeof anyNumber){

//         console.log("typeof a")
    
// }


if(getLocalStorage.length >= 2){
    let carrinhoVazio = document.querySelector('.vazio');
    carrinhoVazio.classList.add("apagar");
   
    let txtCarrinho = document.querySelector('.show-txt')
    txtCarrinho.classList.remove("apagar");
    
    for(calcId = 1; calcId <= 11; calcId++) {
        let show = document.querySelector(`#c${getLocalStorage[calcId].id}`);
        let putName = document.querySelector(`#c-nome${getLocalStorage[calcId].id}`);
        let putPrice = document.querySelector(`#c-preco${getLocalStorage[calcId].id}`);

        show.classList.remove("apagar");
        putName.innerHTML = `${getLocalStorage[calcId].nome}`
        putPrice.innerHTML = `${getLocalStorage[calcId].preco}`
    
        
    }
}
