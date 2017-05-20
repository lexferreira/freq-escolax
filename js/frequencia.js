
			function test(){
				var rfid = document.querySelector('#c_frequencia_rfid').value.length;
				if(rfid === 9 ){
					 if (!frequencia_situacao.value || !frequencia_data.value || !frequencia_horario.value || !frequencia_rfid.value) return null  

					  var id = hiddenId.value || Date.now()

					  db.ref('frequencia/' + id).set({
					  frequencia_situacao : frequencia_situacao.value,
					  frequencia_data : frequencia_data.value,
					  frequencia_horario : frequencia_horario.value,
					  frequencia_rfid : frequencia_rfid.value,
					  hiddenId : hiddenId.value
					  });
					  frequencia_situacao.value.value = '';
					  frequencia_data.value = '';
					  frequencia_horario.value = '';
					  frequencia_rfid.value = '';
					  hiddenId.value = '';
				}
				document.getElementById("c_frequencia_rfid").val("");
			}

			function displayDate(){
				document.x_frequencia_form.c_frequencia_rfid.focus();
				var today = new Date();
				var dia = today.getDate();
				var mes = today.getMonth() + 1;
				var ano = today.getFullYear();
				var data = dia + "/" + mes + "/" + ano;
				var hora = today.getHours();
				var minuto = today.getMinutes();
				var segundo = today.getSeconds();
				var horaImprimivel = hora + ":" + minuto + ":" + segundo;
				document.getElementById("c_frequencia_data").value = data;
				document.getElementById("c_frequencia_horario").value = horaImprimivel;
				setTimeout("displayDate()",1000);
			}
