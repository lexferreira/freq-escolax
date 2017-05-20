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

var reviewForm = document.getElementById('turma_form');
var sala_turma   = document.getElementById('c_sala_turma');
var lotacao_turma   = document.getElementById('c_lotacao_turma');
var matriculas_turma   = document.getElementById('c_matriculas_turma');
var grau_turma   = document.getElementById('c_grau_turma');
var serie_turma    = document.getElementById('c_serie_turma');
var turma_turma    = document.getElementById('c_turma_turma');
var periodo_turma    = document.getElementById('c_periodo_turma');
var hiddenId    = document.getElementById('hiddenId');

reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!sala_turma.value || !lotacao_turma.value || !matriculas_turma.value || !grau_turma.value || !serie_turma.value || !turma_turma.value || !periodo_turma.value ) return null  

  var id = hiddenId.value || Date.now()

  db.ref('turma/' + id).set({
  sala_turma : sala_turma.value,
  lotacao_turma : lotacao_turma.value,
  matriculas_turma : matriculas_turma.value,
  grau_turma : grau_turma.value,
  serie_turma : serie_turma.value,
  turma_turma : turma_turma.value,
  periodo_turma : periodo_turma.value,
  hiddenId : hiddenId.value
  });
  sala_turma.value = '';
  lotacao_turma.value = '';
  matriculas_turma.value = '';
  grau_turma.value = '';
  serie_turma.value = '';
  turma_turma.value = '';
  periodo_turma.value = '';
  hiddenId.value = '';
});

// READ REVIEWS

var reviews = document.getElementById('reviews');
var reviewsRef = db.ref('/turma');

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
    sala_turma.value = reviewNode.querySelector('.sala_turma').innerText;
    lotacao_turma.value = reviewNode.querySelector('.lotacao_turma').innerText;
    matriculas_turma.value = reviewNode.querySelector('.matriculas_turma').innerText;
    grau_turma.value = reviewNode.querySelector('.grau_turma').innerText;
    serie_turma.value = reviewNode.querySelector('.serie_turma').innerText;
    turma_turma.value = reviewNode.querySelector('.turma_turma').innerText;
    periodo_turma.value = reviewNode.querySelector('.periodo_turma').innerText;
    hiddenId.value = reviewNode.id;
  }

  // DELETE REVEIW
  if (e.target.classList.contains('delete')) {
    var id = reviewNode.id;
    db.ref('turma/' + id).remove();
  }
});

function reviewTemplate({sala_turma, lotacao_turma, matriculas_turma, grau_turma, serie_turma, turma_turma, periodo_turma}) {
  return `
    <div class='sala_turma'>${sala_turma}</div>
    <div class='lotacao_turma'>${lotacao_turma}</div>
    <div class='matriculas_turma'>${matriculas_turma}</div>
    <div class='grau_turma'>${grau_turma}</div>
    <div class='serie_turma'>${serie_turma}</div>
    <div class='turma_turma'>${turma_turma}</div>
    <div class='periodo_turma'>${periodo_turma}</div>
    <button class='delete'>Deletar</button>
    <button class='edit'>Editar</button>
  `
};
