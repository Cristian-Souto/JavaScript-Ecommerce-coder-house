
const input1 = document.getElementById("name");
const input2 = document.getElementById("num");
const miForm = document.getElementById("form");

miForm.addEventListener("submit",validarFormulario)

function validarFormulario(e){
    e.preventDefault();
    let inputs = e.target.children;
    console.log(e);
    if(!inputs[0].value.includes("@")){
        input1.className = "bg-rojo"
    }
}

/* input1.addEventListener("change",()=>{
    input1.className = "border-box"
}) */