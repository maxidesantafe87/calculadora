let pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll("#botones a");


for (const button of botones) {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        if (e.target.dataset.key == 'igual') {
            pantalla.textContent = eval(pantalla.textContent);
            if (pantalla.textContent.length > 8) {
                pantalla.textContent = eval(pantalla.textContent).toFixed(8);
            }
        } else if (e.target.dataset.key == 'clear') {
            pantalla.textContent = '';
        } else {
            pantalla.textContent = pantalla.textContent + e.target.dataset.key;
        }
    });
}


let pantalla2 = document.getElementById('pantalla2');
const botones2 = document.querySelectorAll("#botones2 a");

for (const button2 of botones2) {
    button2.addEventListener('click', function (e) {
        e.preventDefault();

         
        if (e.target.dataset.key == '%') {
            
            var P = pantalla2.textContent;
            console.log(P);

                
            
        } else if (e.target.dataset.key == 'igual') {
            pantalla2.textContent = eval(pantalla2.textContent);

            if (pantalla2.textContent.length > 8) {
                pantalla2.textContent = eval(pantalla2.textContent).toFixed(8);
            }

        } else if (e.target.dataset.key == 'clear') {
            pantalla2.textContent = '';

        } else {
            pantalla2.textContent = pantalla2.textContent + e.target.dataset.key;
        }
    });
}





var modal = document.getElementById("ventanaModal");

// Botón que abre el modal  
var boton = document.getElementById("abrirModal");

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var span = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace click en el botón, se abre la ventana
boton.addEventListener("click",function() {
  modal.style.display = "block";
});

// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click",function() {
  modal.style.display = "none";
});

// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});


let pantalla3 = document.getElementById('pantalla3');
var porcentaje = null;


function calculaPorcentajes(){
    porcentaje = document.getElementsByName("porcentaje")[0].value;
    total = document.getElementsByName("total")[0].value;
    pantalla3.textContent = Math.floor(total*porcentaje)/100;
};

