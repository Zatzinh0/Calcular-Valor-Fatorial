function calcular() {
    let numero = parseInt(document.getElementById("inputNumero").value);
    let i = numero - 1;
    

    if(numero == 1 || numero == 0) {
        return 1
    }

    while(i != 1){
            numero = numero * i;
            i--;
    }

    let Resultado = document.getElementById("txtResultado");
    Resultado.innerHTML = `O valor do fatorial é ${numero}`;
    
    return numero;
}