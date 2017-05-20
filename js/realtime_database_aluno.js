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

var reviewForm = document.getElementById('aluno_form');
var rfid_aluno   = document.getElementById('c_rfid_aluno');
var nome_aluno   = document.getElementById('c_nome_aluno');
var ra_aluno   = document.getElementById('c_ra_aluno');
var nome_mae_aluno   = document.getElementById('c_nome_mae_aluno');
var nome_pai_aluno    = document.getElementById('c_nome_pai_aluno');
var datanasc_aluno    = document.getElementById('c_datanasc_aluno');
var endereco_aluno    = document.getElementById('c_endereco_aluno');
var telefone1_aluno    = document.getElementById('c_telefone1_aluno');
var telefone2_aluno    = document.getElementById('c_telefone2_aluno');
var armario_aluno    = document.getElementById('c_armario_aluno');
var mail_aluno    = document.getElementById('c_mail_aluno');
var serie_aluno    = document.getElementById('c_serie_aluno');
var hiddenId   = document.getElementById('hiddenId');

reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!rfid_aluno.value || !nome_aluno.value || !ra_aluno.value || !nome_mae_aluno.value || !nome_pai_aluno.value || 
    !datanasc_aluno.value ||!endereco_aluno.value || !telefone1_aluno.value || !telefone2_aluno.value || !armario_aluno.value ||
     !mail_aluno.value || !serie_aluno.value) return null

  var id = hiddenId.value || Date.now()

  db.ref('aluno/' + id).set({
  rfid_aluno : rfid_aluno.value,
  nome_aluno : nome_aluno.value,
  ra_aluno : ra_aluno.value,
  nome_mae_aluno : nome_mae_aluno.value,
  nome_pai_aluno : nome_pai_aluno.value,
  datanasc_aluno : datanasc_aluno.value,
  endereco_aluno : endereco_aluno.value,
  telefone1_aluno : telefone1_aluno.value,
  telefone2_aluno : telefone2_aluno.value,
  armario_aluno : armario_aluno.value,
  mail_aluno : mail_aluno.value,
  serie_aluno : serie_aluno.value,
  hiddenId : hiddenId.value
  });
  rfid_aluno.value = '';
  nome_aluno.value = '';
  ra_aluno.value = '';
  nome_mae_aluno.value = '';
  nome_pai_aluno.value = '';
  datanasc_aluno.value = '';
  endereco_aluno.value = '';
  telefone1_aluno.value = '';
  telefone2_aluno.value = '';
  armario_aluno.value = '';
  mail_aluno.value = '';
  serie_aluno.value = '';
  hiddenId.value = '';
});

// READ REVIEWS

var reviews = document.getElementById('reviews');
var reviewsRef = db.ref('/aluno');

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
    rfid_aluno.value = reviewNode.querySelector('.rfid_aluno').innerText;
    nome_aluno.value = reviewNode.querySelector('.nome_aluno').innerText;
    ra_aluno.value = reviewNode.querySelector('.ra_aluno').innerText;
    nome_mae_aluno.value = reviewNode.querySelector('.nome_mae_aluno').innerText;
    nome_pai_aluno.value = reviewNode.querySelector('.nome_pai_aluno').innerText;
    datanasc_aluno.value = reviewNode.querySelector('.datanasc_aluno').innerText;
    endereco_aluno.value = reviewNode.querySelector('.endereco_aluno').innerText;
    telefone1_aluno.value = reviewNode.querySelector('.telefone1_aluno').innerText;
    telefone2_aluno.value = reviewNode.querySelector('.telefone2_aluno').innerText;
    armario_aluno.value  = reviewNode.querySelector('.armario_aluno').innerText;
    mail_aluno.value = reviewNode.querySelector('.mail_aluno').innerText;
    serie_aluno.value = reviewNode.querySelector('.serie_aluno').innerText;
    hiddenId.value = reviewNode.id;
  }

  // DELETE REVEIW
  if (e.target.classList.contains('delete')) {
    var id = reviewNode.id;
    db.ref('aluno/' + id).remove();
  }
});

function reviewTemplate({rfid_aluno, nome_aluno, ra_aluno, nome_mae_aluno, nome_pai_aluno, datanasc_aluno, endereco_aluno, telefone1_aluno, telefone2_aluno, armario_aluno, mail_aluno, serie_aluno}) {
  return `
    <div class='rfid_aluno'>${rfid_aluno}</div>
    <div class='nome_aluno'>${nome_aluno}</div>
    <div class='ra_aluno'>${ra_aluno}</div>
    <div class='nome_mae_aluno'>${nome_mae_aluno}</div>
    <div class='nome_pai_aluno'>${nome_pai_aluno}</div>
    <div class='datanasc_aluno'>${datanasc_aluno}</div>
    <div class='endereco_aluno'>${endereco_aluno}</div>
    <div class='telefone1_aluno'>${telefone1_aluno}</div>
    <div class='telefone2_aluno'>${telefone2_aluno}</div>
    <div class='armario_aluno'>${armario_aluno}</div>
    <div class='mail_aluno'>${mail_aluno}</div>
    <div class='serie_aluno'>${serie_aluno}</div>
    <button class='delete'>Deletar</button>
    <button class='edit'>Editar</button>
  `
};

    function listar_turmas(){
            firebase.database().ref('turma/').on('value', function (snapshot){
                listar_turmas.innerHTML = '';
                snapshot.forEach(function(item){
                  var op0 = document.createElement("option");
                  op0.appendChild(document.createTextNode(item.val().serie_turma + ': ' 
                    + item.val().turma_turma));
                  c_serie_aluno.appendChild(op0);
                });
              });
          }
