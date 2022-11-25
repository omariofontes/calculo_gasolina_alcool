function calcular(event){ // função calcular, que tb foi definida no index.html no form. Junto com o evento, que seria o valor digitado pelo usuario
    event.preventDefault(); // o valor digitado sera previnido, mantendo-se visivel no input

    let alcoolInput = document.getElementById("alcool").value; // variavel criada para pegar o valor digitado pelo usuario atraves do ID. Com o comando document.getElementById. Value para pegar o valor do elemento digitado no input alcool.
    let gasolinaInput = document.getElementById("gasolina").value;
    let contentResult = document.getElementById("content-result");
    let textResult = document.getElementById("result");


    let alcoolResult = document.getElementById("alcool-result");
    let gasolineResult = document.getElementById("gasolina-result");

    /* Calulo: alcool / gasolina
       Se o resultado for menor que 0.7 compensa usar alcool, se não compensa gasolina */
    
    let calculo = (alcoolInput / gasolinaInput);
    
    if(calculo < 0.7){
      textResult.innerHTML = "Compensa usar Álcool";
    }else{
      textResult.innerHTML = "Compensa usar Gasolina";
    }

    alcoolResult.innerHTML = "Álcool R$ " + alcoolInput;
    gasolineResult.innerHTML = "Gasolina R$ " + gasolinaInput;

    contentResult.classList.remove("hide")
}