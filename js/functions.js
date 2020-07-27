function calcular(){
    let altura = document.getElementById('put1').value;
    let peso = document.getElementById('put2').value;
    let result = document.getElementById('result');

    let resultado = peso/(altura*altura)
    result.value = resultado;

}