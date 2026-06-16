const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const LetrasMaiusculas =('ABCDEFGHIJKLMNOPQRSTUVXYWZ')
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?$';
 const campoSenha =document.querySelector('#campo-Senha');
const checkbox = document.querySelectorAll('.checkbox');
const botoes = document.querySelectorAll('.parametro-senha__botao');
const forcaSenha =document.querySelector('.forca')

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
for (i=0; i < checkbox.length;i++){
    checkbox[i].onclick = geraSenha;
}

 function geraSenha(){
    let alfabeto = '';
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked){
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked){
        alfabeto = alfabeto + simbolos;
    }
    let senha = '';
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }

    campoSenha.value = senha;
    classificaSenha(alfabeto.length);
}
 
function classificaSenha(tamanhoAlfabeto){
    let entropia = tamanhoSenha * Math.log2(alfabeto.length);
    console.log(entropia);
    forcaSenha.classList.remove('fraca','media','forte');
        if (entropia > 57){
           forcaSenha.classList.add('forte');
        } else if (entropia > 32 && entropia < 57) {
            forcaSenha.classList.add('media');
        } else if (entropia <= 32){
            forcaSenha.classList.add('fraca');
        }
const valorEntropia = document.querySelector('.entropia');
valorEntropia.textContent = "Um computador pode levar até " + Math.floor(2**entropia/(100e6*60*60*24)) + " dias para descobrir essa senha.";


}   


