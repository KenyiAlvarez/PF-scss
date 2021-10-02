/* boton de menu de navegacion */

document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});

/* formulario */

var inputs = document.getElementsByClassName("formulario__input");
for (var i  = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add("fijar");
        } else {
            this.nextElementSibling.classList.remove("fijar");
        }
    })
}