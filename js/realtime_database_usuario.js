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

var reviewForm = document.getElementById('usuario_form');
var rfid_usuario   = document.getElementById('c_rfid_usuario');
var nome_usuario   = document.getElementById('c_nome_usuario');
var rg_usuario   = document.getElementById('c_rg_usuario');
var cpf_usuario   = document.getElementById('c_cpf_usuario');
var endereco_usuario    = document.getElementById('c_endereco_usuario');
var telefone_usuario    = document.getElementById('c_telefone_usuario');
var mail_usuario    = document.getElementById('c_mail_usuario');
var funcao_usuario    = document.getElementById('c_funcao_usuario');
var registro_usuario    = document.getElementById('c_registro_usuario');
var hiddenId   = document.getElementById('hiddenId');

reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (!rfid_usuario.value || !nome_usuario.value || !rg_usuario.value || !cpf_usuario.value || !endereco_usuario.value || !telefone_usuario.value ||!mail_usuario.value || !funcao_usuario.value || !registro_usuario.value ) return null
  criarUser();
  var id = hiddenId.value || Date.now()

  db.ref('usuario/' + id).set({
  rfid_usuario : rfid_usuario.value,
  nome_usuario : nome_usuario.value,
  rg_usuario : rg_usuario.value,
  cpf_usuario : cpf_usuario.value,
  endereco_usuario : endereco_usuario.value,
  telefone_usuario : telefone_usuario.value,
  mail_usuario : mail_usuario.value,
  funcao_usuario : funcao_usuario.value,
  registro_usuario : registro_usuario.value,
  hiddenId : hiddenId.value
  });
  rfid_usuario.value = '';
  nome_usuario.value = '';
  rg_usuario.value = '';
  cpf_usuario.value = '';
  endereco_usuario.value = '';
  telefone_usuario.value = '';
  mail_usuario.value = '';
  funcao_usuario.value = '';
  registro_usuario.value = '';
  hiddenId.value = '';
});

// READ REVIEWS

var reviews = document.getElementById('reviews');
var reviewsRef = db.ref('/usuario');

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
    rfid_usuario.value = reviewNode.querySelector('.rfid_usuario').innerText;
    nome_usuario.value = reviewNode.querySelector('.nome_usuario').innerText;
    rg_usuario.value = reviewNode.querySelector('.rg_usuario').innerText;
    cpf_usuario.value = reviewNode.querySelector('.cpf_usuario').innerText;
    endereco_usuario.value = reviewNode.querySelector('.endereco_usuario').innerText;
    telefone_usuario.value = reviewNode.querySelector('.telefone_usuario').innerText;
    mail_usuario.value = reviewNode.querySelector('.mail_usuario').innerText;
    funcao_usuario.value = reviewNode.querySelector('.funcao_usuario').innerText;
    registro_usuario.value = reviewNode.querySelector('.registro_usuario').innerText;
    hiddenId.value = reviewNode.id;
  }

  // DELETE REVEIW
  if (e.target.classList.contains('delete')) {
    var id = reviewNode.id;
    db.ref('usuario/' + id).remove();
  }
});

function reviewTemplate({rfid_usuario, nome_usuario, rg_usuario, cpf_usuario, endereco_usuario, telefone_usuario, mail_usuario, funcao_usuario, registro_usuario}) {
  return `
    <div class='rfid_usuario'>${rfid_usuario}</div>
    <div class='nome_usuario'>${nome_usuario}</div>
    <div class='rg_usuario'>${rg_usuario}</div>
    <div class='cpf_usuario'>${cpf_usuario}</div>
    <div class='endereco_usuario'>${endereco_usuario}</div>
    <div class='telefone_usuario'>${telefone_usuario}</div>
    <div class='mail_usuario'>${mail_usuario}</div>
    <div class='funcao_usuario'>${funcao_usuario}</div>
    <div class='registro_usuario'>${registro_usuario}</div>
    <button class='delete'>Deletar</button>
    <button class='edit'>Editar</button>
  `
};

var table = new Firebase('https://freq-escolax.firebaseio.com/turma');

table.on('value', function(snapshot) {
   var count = 0;
   snapshot.forEach(function() {
       count++;
   });
   //count is now safe to use.
});