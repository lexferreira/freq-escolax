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

var reviewForm = document.getElementById('responsavel_form');
var ra_aluno_responsavel   = document.getElementById('c_ra_aluno_responsavel');
var nome_responsavel   = document.getElementById('c_nome_responsavel');
var rg_responsavel   = document.getElementById('c_rg_responsavel');
var cpf_responsavel   = document.getElementById('c_cpf_responsavel');
var telefone_responsavel    = document.getElementById('c_telefone_responsavel');
var mail_responsavel    = document.getElementById('c_mail_responsavel');
var parentesco_responsavel    = document.getElementById('c_parentesco_responsavel');
var hiddenId   = document.getElementById('hiddenId');

reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!ra_aluno_responsavel.value || !nome_responsavel.value || !rg_responsavel.value || !cpf_responsavel.value || !telefone_responsavel.value || !mail_responsavel.value || !parentesco_responsavel.value) return null
  criarUserResp();
  var id = hiddenId.value || Date.now()

  db.ref('responsavel/' + id).set({
  ra_aluno_responsavel : ra_aluno_responsavel.value,
  nome_responsavel : nome_responsavel.value,
  rg_responsavel : rg_responsavel.value,
  cpf_responsavel : cpf_responsavel.value,
  telefone_responsavel : telefone_responsavel.value,
  mail_responsavel : mail_responsavel.value,
  parentesco_responsavel : parentesco_responsavel.value,
  hiddenId : hiddenId.value
  });
  ra_aluno_responsavel.value = '';
  nome_responsavel.value = '';
  rg_responsavel.value = '';
  cpf_responsavel.value = '';
  telefone_responsavel.value = '';
  mail_responsavel.value = '';
  parentesco_responsavel.value = '';
  hiddenId.value = '';
});

// READ REVIEWS

var reviews = document.getElementById('reviews');
var reviewsRef = db.ref('/responsavel');

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
    ra_aluno_responsavel.value = reviewNode.querySelector('.ra_aluno_responsavel').innerText;
    nome_responsavel.value = reviewNode.querySelector('.nome_responsavel').innerText;
    rg_responsavel.value = reviewNode.querySelector('.rg_responsavel').innerText;
    cpf_responsavel.value = reviewNode.querySelector('.cpf_responsavel').innerText;
    telefone_responsavel.value = reviewNode.querySelector('.telefone_responsavel').innerText;
    mail_responsavel.value = reviewNode.querySelector('.mail_responsavel').innerText;
    parentesco_responsavel.value = reviewNode.querySelector('.parentesco_responsavel').innerText;
    hiddenId.value = reviewNode.id;
  }

  // DELETE REVEIW
  if (e.target.classList.contains('delete')) {
    var id = reviewNode.id;
    db.ref('responsavel/' + id).remove();
  }
});

function reviewTemplate({ra_aluno_responsavel, nome_responsavel, rg_responsavel, cpf_responsavel, telefone_responsavel, mail_responsavel, parentesco_responsavel}) {
  return `
    <div class='ra_aluno_responsavel'>${ra_aluno_responsavel}</div>
    <div class='nome_responsavel'>${nome_responsavel}</div>
    <div class='rg_responsavel'>${rg_responsavel}</div>
    <div class='cpf_responsavel'>${cpf_responsavel}</div>
    <div class='telefone_responsavel'>${telefone_responsavel}</div>
    <div class='mail_responsavel'>${mail_responsavel}</div>
    <div class='parentesco_responsavel'>${parentesco_responsavel}</div>
    <button class='delete'>Deletar</button>
    <button class='edit'>Editar</button>
  `
};