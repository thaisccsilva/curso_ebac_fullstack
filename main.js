const form = document.getElementById("form-test");
const campo1 = document.getElementById("number1");
const campo2 = document.getElementById("number2");

form.addEventListener('submit', function(e){
    e.preventDefault();

    const mensagem01 = "O número do campo 01 é maior do que o número do campo 02";
    const mensagem02 = "O número do campo 01 é menor do que o número do campo 02";
    const mensagem03 = "O número do campo 01 é igual ao número do campo 02";
    const mensagemErro = "A comparação não foi possível. Entre os dados novamente."

    if (campo1.value > campo2.value){
        const containerMensagem01 = document.querySelector(".mensagem01")
        containerMensagem01.innerHTML = mensagem01;
        containerMensagem01.style.display = "block";
    } else if (campo1.value < campo2.value){
        const containerMensagem01 = document.querySelector(".mensagem01")
        containerMensagem01.innerHTML = mensagem02;
        containerMensagem01.style.display = "block";
    } else if (campo1.value == campo2.value) {
        const containerMensagem01 = document.querySelector(".mensagem01")
        containerMensagem01.innerHTML = mensagem03;
        containerMensagem01.style.display = "block";;
    } 
});