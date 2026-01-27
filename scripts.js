const form = document.querySelector(".form-fale-conosco");
const mascara = document.querySelector(".mascara-form");
const linkFaleConosco = document.getElementById("link-fale-conosco");

linkFaleConosco.addEventListener("click", function(event) {
    event.preventDefault();
    mostrarForm();
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        fecharFormulario();
    }
});

function mostrarForm() {
    form.style.left = "50%";
    form.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
}

function fecharFormulario() {
    form.style.left = "-335px";
    form.style.transform = "translateX(0)";
    mascara.style.visibility = "hidden";
}

