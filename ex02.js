function verificar(){
    var letra = document.getElementById('letra')
    var resultado = document.getElementById('resultado')

    if(letra.value == "a" || "e" || "i" || "o" || "u" ){
        resultado.innerHTML = 'É uma vogal'
    }else{
        resultado.innerHTML = 'Não é uma vogal'
    }
}
