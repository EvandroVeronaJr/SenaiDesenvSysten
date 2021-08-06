const btnLogin = document.querySelector("#BtnEntrar");

const telaEntrada = document.querySelector("#TelaEntrada");

const telaPrinc = document.querySelector('#MenuPrincipal');


btnLogin.addEventListener("click", event => {

    event.preventDefault();
    telaEntrada.classList.add("tela-hide");
    telaPrinc.classList.add("telaMain-show");
  

});

telaEntrada.addEventListener('animationstart', event => {
    if(event.animationName == "down"){
        document.querySelector('body').style.overflow = 'hidden';
    }
})

telaEntrada.addEventListener("animationend", event => {

    if(event.animationName == "down"){
        
        telaEntrada.style.display = 'none';
        telaPrinc.style.display = "flex";
        document.querySelector('body').style.overflow = 'none';

    }
    
        
 

});