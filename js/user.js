var user = firebase.auth().currentUser;
document.querySelector('#displayName').innerText = 'Olá, '+ user.email;