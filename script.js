var checkbox = document.getElementById("CheckBoxTermos")
var submitbut = document.getElementsByName("enviar")

function prossiga() {
  if (checkbox.checked) {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  } else {
    
    alert("Você precisa confirmar os termos e condições para finalizar o formulário!")
    
  }
}