const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
function diminuiTamanho(){
    if (tamanhoSenha > 1){
       // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha
    geraSenha();
}
function aumentaTamanho(){
    if (tamanhoSenha<50){
       // tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
 const campoSenha =document.querySelector('#campo-Senha');
const checkbox = document.querySelectorAll('.checkbox');


const LetrasMaiusculas =('ABCDEFGHIJKLMNOPQRSTUVXYWZ')
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?$';

 function geraSenha(){  
    let alfabeto = '';
if (checkbox[0].checked){
    alfabeto = alfabeto + LetrasMaiusculas;
}
console.log(alfabeto);
    let senha ='';
    for(let i = 0; i <tamanhoSenha;i++){
        let NumeroAleatorio = Math.random()*LetrasMaiusculas.length
        NumeroAleatorio = Math.floor(LetrasMaiusculas[NumeroAleatorio]);
        senha = senha + LetrasMaiusculas[NumeroAleatorio];
    }
    campoSenha.value =senha;
 }
