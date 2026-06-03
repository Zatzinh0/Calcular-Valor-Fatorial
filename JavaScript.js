function calcular() {
    //aqui criamos a variavel que irá armazenar o numero que o usuário digitar.
    let numero = parseInt(document.getElementById("inputNumero").value);
    //a variavel i ela vai ser a incógnita fixa diminuindo de 1 em 1.
    let i = numero - 1;
    
    //caso o numero seja 1 ou 0, o valor sempre será 1.
    if(numero == 1 || numero == 0) {
        return 1
    }

    //enquanto o valor de i for diferente de 1 o while vai continuar rodando.
    while(i != 1){
            // aqui o numero que o usuario digitou multiplica com o multiplicador(i).
            // a variavel guarda o valor nela mesma e se multiplica de novo com a variavel i sendo que o i foi subtraindo por 1 a cada multiplicação.
            numero = numero * i;
            i--;
    }
    //aqui revela o resultado para o HTMl.
    let Resultado = document.getElementById("txtResultado");
    Resultado.innerHTML = `O valor do fatorial é ${numero}`;

    //retorna o numero quando a função é guardada ou chamada.
    return numero;
}
