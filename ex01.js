var idade = document.getElementById('idade')
var resultado = document.getElementById('maioridade')
    

    function calcular(){
        if(idade.value < 18){
            resultado.innerHTML = 'Você é de menor'
        }else{
            resultado.innerHTML = 'Você é de maior'
        }
    }

