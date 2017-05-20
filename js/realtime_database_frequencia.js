var config = {
  apiKey: "AIzaSyASMpP82DnQRFLBNWsdrla_gzE4AtDBoG8",
    authDomain: "freq-escolax.firebaseapp.com",
    databaseURL: "https://freq-escolax.firebaseio.com",
    projectId: "freq-escolax",
    storageBucket: "freq-escolax.appspot.com",
    messagingSenderId: "515709662755"
};

firebase.initializeApp(config);
var db = firebase.database();

// CREATE REWIEW

var reviewForm = document.getElementById('frequencia_form');
var frequencia_situacao   = document.getElementById('c_frequencia_situacao');
var frequencia_data   = document.getElementById('c_frequencia_data');
var frequencia_horario   = document.getElementById('c_frequencia_horario');
var frequencia_rfid   = document.getElementById('c_frequencia_rfid');
var hiddenId    = document.getElementById('hiddenId');

reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();

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
});

// READ REVIEWS

var reviews = document.getElementById('reviews');
var reviewsRef = db.ref('/frequencia');

reviewsRef.on('child_added', (data) => {
  var li = document.createElement('li')
  li.id = data.key;
  li.innerHTML = reviewTemplate(data.val())
  reviews.appendChild(li);
});

reviewsRef.on('child_changed', (data) => {
  var reviewNode = document.getElementById(data.key);
  reviewNode.innerHTML = reviewTemplate(data.val());
});

reviewsRef.on('child_removed', (data) => {
  var reviewNode = document.getElementById(data.key);
  reviewNode.parentNode.removeChild(reviewNode);
});

reviews.addEventListener('click', (e) => {
  var reviewNode = e.target.parentNode

  // UPDATE REVEIW
  if (e.target.classList.contains('edit')) {
  	frequencia_situacao.value.value = reviewNode.querySelector('.frequencia_situacao').innerText;
  	frequencia_data.value = reviewNode.querySelector('.frequencia_data').innerText;
  	frequencia_horario.value = reviewNode.querySelector('.frequencia_horario').innerText;
  	frequencia_rfid.value = reviewNode.querySelector('.frequencia_rfid').innerText;
    hiddenId.value = reviewNode.id;
  }

  // DELETE REVEIW
  if (e.target.classList.contains('delete')) {
    var id = reviewNode.id;
    db.ref('frequencia/' + id).remove();
  }
});

function reviewTemplate({frequencia_situacao, frequencia_data, frequencia_horario, frequencia_rfid}) {
  return `
    <div class='frequencia_situacao'>${frequencia_situacao}</div>
    <div class='frequencia_data'>${frequencia_data}</div>
    <div class='frequencia_horario'>${frequencia_horario}</div>
    <div class='frequencia_rfid'>${frequencia_rfid}</div>
    <button class='delete'>Deletar</button>
    <button class='edit'>Editar</button>
  `
};
