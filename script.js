(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function cantRango() {

  let cant = document.getElementById("cant").value

  document.getElementById("seleccion").innerHTML = cant
}

function calcTotal() {

  const precio = 1000;

  let cant = document.getElementById("cant").value

  let total = cant * precio

  let desc = document.getElementById("desc").value
  total = total - (total * desc / 100)

  document.getElementById("total").innerHTML = total

}

function sel(descuento) {

  document.getElementById("desc").value = descuento

}


function colorSelec() {

  if (document.getElementById("desc").value == 80) {
    document.getElementById("cardEstudiante").style.borderColor = "lightskyblue";
    document.getElementById("cardTrainee").style.borderColor = "lightgray";
    document.getElementById("cardJunior").style.borderColor = "lightgray";
  }

  if (document.getElementById("desc").value == 50) {
    document.getElementById("cardEstudiante").style.borderColor = "lightgray";
    document.getElementById("cardTrainee").style.borderColor = "lightgreen";
    document.getElementById("cardJunior").style.borderColor = "lightgray";
  }

  if (document.getElementById("desc").value == 15) {
    document.getElementById("cardEstudiante").style.borderColor = "lightgray";
    document.getElementById("cardTrainee").style.borderColor = "lightgray";
    document.getElementById("cardJunior").style.borderColor = "orange";
  }

}