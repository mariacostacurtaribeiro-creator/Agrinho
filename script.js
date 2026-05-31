function mostrarMensagem() {
    alert(
        "A tecnologia e a sustentabilidade caminham juntas para garantir um agronegócio mais eficiente e responsável."
    );
}

function resposta(valor){

    const resultado =
        document.getElementById("resultado");

    if(valor === "certo"){
        resultado.innerHTML =
        "✅ Correto! Os drones são amplamente utilizados no agronegócio moderno.";
    }else{
        resultado.innerHTML =
        "❌ Resposta incorreta. Tente novamente.";
    }
}