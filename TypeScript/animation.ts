//Todas as telas.
const telaEntrada = document.querySelector("#TelaEntrada");
const telaPrinc = document.querySelector('#MenuPrincipal');
const telaCompra = document.querySelector('.AreaCompra');

//Elementos da tela login
const btnLogin = document.querySelector("#BtnEntrar");//Botão da tela de login
const btnCadastro = document.querySelector("#BtnCadastro");
const campLoginAtual = document.querySelector('.telaLogin');
const telaCadastro = document.querySelector('.telaCadastro');
const telaCadastroSaida = document.querySelector('.telaSaida');
const campCadastro = document.querySelector('.Cadastro-New');
const campLogin = document.querySelector('.Login-New');
const campCadastroSaida = document.querySelector('.SaidaCad');
const CampcadastroEntrada = document.querySelector('#CampCadastro');
const CampCadastroAnimacao = document.querySelector('.EntradaInCad');
const CampLoginAnimacao = document.querySelector('.EntradaInLogin');
const CampLoginSaida = document.querySelector(".CampLoginSaida");
const CampCadEntrada = document.querySelector(".TelaNewCad");

//Elementos da tela de cadastro
const btnLogin2 = document.querySelector('#BtnLoginCad');

//Botões da tela de compra
const btnComprar = document.querySelector('#BtnComprar');
const btnVoltar = document.querySelector("#BtnVoltar");


//Botões do menu principal
const BtnDog = document.querySelector('#DogBtn');
const BtnCat = document.querySelector('#GatoBtn');
const BtnHamster = document.querySelector('#Hamsterbtn');
const BtnLogoff = document.querySelector("#BtnSair");
const barNav01 = document.querySelector('#BarNav02');
const btnBuy = document.querySelector('#BotoesBuy');

//Ir para tela de compra
BtnDog.addEventListener('click', event => {

    event.preventDefault();
    telaPrinc.classList.add('tela-princ-hide')
    telaCompra.classList.add('tela-compra-show');
    barNav01.classList.add('barnav-saida');
});

BtnHamster.addEventListener('click', event => {

    event.preventDefault();
    telaPrinc.classList.add('tela-princ-hide')
    telaCompra.classList.add('tela-compra-show');
    barNav01.classList.add('barnav-saida');

});

BtnCat.addEventListener('click', event => {

    event.preventDefault();
    telaPrinc.classList.add('tela-princ-hide')
    telaCompra.classList.add('tela-compra-show');
    barNav01.classList.add('barnav-saida');

});/*Fim dos botões para tela compra*/

//Voltar da tela de compra para tela principal
btnVoltar.addEventListener("click", event => {

    event.preventDefault();
    telaCompra.classList.add("telaCompraHide");
    telaPrinc.classList.add("telanovoPrincipal");
    telaPrinc.classList.remove('tela-hide2');
    barNav01.classList.remove('barnav-saida');


});

btnCadastro.addEventListener('click', event => {//Animação de aparecer os campos de cadastro

    event.preventDefault();
    campLoginAtual.classList.remove('Inlogin');
    campLogin.classList.add('saidaTelaCad');
    campCadastroSaida.classList.add("cadSaida");
    campLoginAtual.classList.add('telaLoginSaida');
    telaCadastro.classList.add("animacao-Cadastro");
    CampCadastroAnimacao.classList.add('EntradaInCad');

})

btnLogin2.addEventListener('click', event => {

    event.preventDefault();
    telaCadastroSaida.classList.add('animacao-Login');//animacao-Login
    campLogin.classList.add('saidaTelaCad');
    CampcadastroEntrada.classList.add('saidaCampCad-TelaCad');
    CampCadEntrada.classList.add('entrada-Login2');
    campLoginAtual.classList.add('Inlogin');



})

btnLogin.addEventListener("click", event => {//Ir para tela principal

    event.preventDefault();
    telaEntrada.classList.add("tela-hide");
    telaPrinc.classList.add("telaMain-show");
    telaEntrada.classList.remove('tela-show1');
    barNav01.classList.remove('barnav-saida');
    telaPrinc.classList.remove('tela-hide2');
    


});



//Animações



telaEntrada.addEventListener('animationend', event => {//Volta para tela de login inicial

    if (event.animationName == 'moveright') {
        
        telaCadastro.classList.remove("animacao-Cadastro");
        campCadastroSaida.classList.remove("cadSaida");
        CampCadEntrada.classList.remove('entrada-Login2');
        telaCadastroSaida.classList.add('animacao-Login');
        CampCadEntrada.style.display = '-webkit-inline-box';
        campCadastro.style.display = 'block';
        campLoginAtual.style.display = 'block';
        CampLoginSaida.style.display = 'block';
        CampLoginAnimacao.style.display = 'none';
        CampcadastroEntrada.classList.add('saidaCampCad-TelaCad');
        campLogin.classList.add('saidaTelaCad');
        campLogin.style.display = 'none';
        // telaPrinc.style.display = 'none';
        
    }

})


telaCompra.addEventListener('animationend', event => {//Encerra animação anterior e volta para tela principal ou tela compra

    if (event.animationName == "down") {
        
        telaCompra.style.display = 'none';
        telaPrinc.style.display = 'flex';
        telaPrinc.classList.remove('tela-princ-hide');
        telaCompra.classList.remove('telaCompraHide');
        CampcadastroEntrada.classList.add('saidaCampCad-TelaCad');

    }
})

telaPrinc.addEventListener('animationend', event => {//Vai da tela principal para a compra

    if (event.animationName == "down") {

        telaPrinc.style.display = 'none';
        telaCompra.style.display = 'flex';

    }
})

telaEntrada.addEventListener('animationstart', event => {//Recupera a barra de rolagem
    if (event.animationName == 'moveright') {
        document.querySelector('body').style.overflow = 'hidden';
    }

    if (event.animationName == "down") {
        document.querySelector('body').style.overflow = 'hidden';
    }
})

telaEntrada.addEventListener("animationend", event => {//sai da tela  de login e vai pra principal
    //desativa barra de rolagem durante animação

    if (event.animationName == "down") {

        telaEntrada.style.display = 'none';
        telaPrinc.style.display = "flex";
        barNav01.style.display = 'list-item';
        btnBuy.style.display = '';
        document.querySelector('body').style.overflow = 'none';

    }

});

telaEntrada.addEventListener("animationend", event => {//sai da tela  de login e vai pra principal

    //desativa barra de rolagem durante animação
    if (event.animationName == "moveleft") {
        
        telaCadastroSaida.classList.remove('animacao-Login');
        CampcadastroEntrada.classList.remove('saidaCampCad-TelaCad');
        campLogin.classList.remove('saidaTelaCad');
        telaCadastro.classList.add("animacao-Cadastro");
        campCadastro.style.display = 'none';
        CampLoginSaida.style.display = 'none';
        CampcadastroEntrada.style.display = 'block';
        campLogin.style.display = 'block';
        CampCadastroAnimacao.style.display = 'block';
        CampLoginAnimacao.style.display = 'block';
        CampCadEntrada.style.display = 'none';
        campCadastro.style.display = 'none';
        campLoginAtual.style.display = 'none';
        CampLoginSaida.style.display = 'none';
        CampcadastroEntrada.classList.add('EntradaInCad');
        CampLoginAnimacao.classList.add('EntradaInLogin');
       

    }

});

BtnLogoff.addEventListener('click', event  => {//Botão para sair da tela principal e ir para tela login

    event.preventDefault();
    telaPrinc.classList.add('tela-hide2');
    telaEntrada.classList.add('tela-show1');
    barNav01.classList.add('barnav-saida');
    telaEntrada.classList.remove('tela-hide');
    telaPrinc.classList.remove('telaMain-show');
    telaPrinc.classList.remove("telanovoPrincipal");
    // telaPrinc.style.display = 'none;';

})

telaPrinc.addEventListener('animationend', event => {//Vai da tela principal para a tela de login

    if (event.animationName == "down2") {
        telaEntrada.style.display = 'flex';
        btnBuy.style.display = 'none';
        barNav01.style.display = 'none';
        telaPrinc.style.display = 'none';
        CampcadastroEntrada.style.display = 'none';
        telaCadastroSaida.classList.remove('animacao-Login');
        
       
       

    }
})

const ulSquares = document.querySelector("ul.squares");

for(let i = 0; i < 11; i++){
    
    const li = document.createElement("li");

    const random = (min, max) => Math.random() * (max - min) + min 
    
    const delay = random(3, 0.1);
    const size = Math.floor(random(10,120));
    const position = random(1, 99);

    //Tamanhos
    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;

    //Posições
    li.style.left = `${position}%`

    //Delay
    li.style.animationDelay = `${delay}s`

    ulSquares.appendChild(li);
    
}




//Funções


