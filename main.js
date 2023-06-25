const form = document.getElementById("form-test");


form.addEventListener('submit', function(e){
    e.preventDefault();

    const campo1 = document.getElementById("number1");
    const campo2 = document.getElementById("number2");

    if (campo1 > campo2){
        alert("O número do campo 01 é maior do que o número do campo 02");
    } else if (campo1 < campo2){
        alert("O número do campo 01 é menor do que o número do campo 02");
    } else {
        alert("O número do campo 01 é igual ao número do campo 02");
    }
});