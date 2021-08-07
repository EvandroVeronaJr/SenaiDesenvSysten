//Todas as telas.
const telaEntrada = document.querySelector("#TelaEntrada");
const telaPrinc = document.querySelector('#MenuPrincipal');
const telaCompra = document.querySelector('.AreaCompra');

//Botões da tela principal 
const DogSelect = document.querySelector('#CachorroId');
const CatSelect = document.querySelector('#GatoId');
const HamstSelect = document.querySelector('#HamsterId');

//Botões da tela login
const btnLogin = document.querySelector("#BtnEntrar");//Botão da tela de login
const btnCadastro = document.querySelector("#BtnEntrar");

//Botões da tela de compra
const btnComprar = document.querySelector('#BtnComprar');
const btnVoltar = document.querySelector("#BtnVoltar");


//Botões do menu principal
const BtnDog = document.querySelector('#DogBtn');
const BtnCat = document.querySelector('#GatoBtn');
const BtnHamster = document.querySelector('#Hamsterbtn');

//Ir para tela de compra
BtnDog.addEventListener('click', event => {

    DogSelect.setAttribute( "Cachorro","cachorro");
    event.preventDefault();
    telaPrinc.classList.add('tela-princ-hide')
    telaCompra.classList.add('tela-compra-show');
    
});

BtnHamster.addEventListener('click', event => {
    
    event.preventDefault();
    telaPrinc.classList.add('tela-princ-hide')
    telaCompra.classList.add('tela-compra-show');
    
    
});

BtnCat.addEventListener('click', event => {
    
    event.preventDefault();
    telaPrinc.classList.add('tela-princ-hide')
    telaCompra.classList.add('tela-compra-show');
    
    
});/*Fim dos botões para tela compra*/ 

//Voltar da tela de compra para tela principal
btnVoltar.addEventListener("click", event => {

    event.preventDefault();
    telaCompra.classList.add("telaCompraHide");
    telaPrinc.classList.add("telanovoPrincipal");
   


});

btnCadastro.addEventListener('click', event => {

    event.preventDefault();
    telaEntrada.classList.add("");
})


btnLogin.addEventListener("click", event => {//Ir para tela principal

    event.preventDefault();
    telaEntrada.classList.add("tela-hide");
    telaPrinc.classList.add("telaMain-show");
    

});



//Animações
telaCompra.addEventListener('animationend', event => {//Encerra animação anterior e volta para tela principal ou tela compra

     if(event.animationName == "down"){

         telaCompra.style.display = 'none';
         telaPrinc.style.display = 'flex';
         telaPrinc.classList.remove('tela-princ-hide');
        telaCompra.classList.remove('telaCompraHide')
     }
})

telaPrinc.addEventListener('animationend', event =>{//Vai da tela principal para a compra

    if(event.animationName == "down"){

        telaPrinc.style.display = 'none';
        telaCompra.style.display = 'flex';

    }
})

telaEntrada.addEventListener('animationstart', event => {//Recupera a barra de rolagem
    if(event.animationName == "down"){
        document.querySelector('body').style.overflow = 'hidden';
    }
})

telaEntrada.addEventListener("animationend", event => {//sai da tela  de login e vai pra principal
                                                       //desativa barra de rolagem durante animação
    if(event.animationName == "down"){
        
        telaEntrada.style.display = 'none';
        telaPrinc.style.display = "flex";
        document.querySelector('body').style.overflow = 'none';

    }
    
});



