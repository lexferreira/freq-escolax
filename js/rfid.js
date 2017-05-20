function validaRFID() {
			  if(this.value.length === 10 ){
			  	feedback.innerHTML = "Cartão válido"
			    feedback.classList = "sucesso"
			    // Rode qualquer função para o cartão válido
			  } else {
			  	feedback.innerHTML = "Cartão inválido"
			    feedback.classList = "erro"
			    // Rode qualquer função para o cartão inválido
			  }
			}
const input = document.querySelector("#rfid")
const feedback = document.querySelector("#feedback")

// Esse listener só é ativado quando o cursor deixa de focar o input
input.addEventListener("change", validaRFID)
// Esse listener é ativado sempre que um caracter é digitado
input.addEventListener("keydown", validaRFID)