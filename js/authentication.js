
//function createUser(){
//	firebase
//	.auth()
//	.createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
//	.then(function () {
//		alert('Bem vindo ' + emailInput.value);
//	})
//	.catch(function (error){
//		console.error(error.code);
//		console.error(error.message);
//		alert('Falha ao cadastrar, verifique os possíveis erros')
//	});
		//document.querySelector('#displayName').innerText = 'Olá, '+ document.querySelector('#emailInput').value;
//};

function logIn(){
	firebase
	.auth()
	.signInWithEmailAndPassword(document.querySelector('#emailInput').value, document.querySelector('#passwordInput').value)
	.then(function () {
		alert('Autenticado ' + document.querySelector('#emailInput').value);
		window.location.href = 'menu_principal.html';
	})
	.catch(function (error){
		console.error(error.code);
		console.error(error.message);
		alert('Falha ao autenticar, verifique os possíveis erros')
	});
};

function logInResp(){
	firebase
	.auth()
	.signInWithEmailAndPassword(document.querySelector('#emailInput').value, document.querySelector('#passwordInput').value)
	.then(function () {
		alert('Autenticado ' + document.querySelector('#emailInput').value);
		var email = document.querySelector('#emailInput').value;
		window.location.href = 'dados_aluno_x.html';
	})
	.catch(function (error){
		console.error(error.code);
		console.error(error.message);
		alert('Falha ao autenticar, verifique os possíveis erros')
	});
};

function logOut(){
	firebase
	.auth()
	.signOut()
	.then(function () {
		document.querySelector('#displayName').innerText = 'Você não está autenticado';
		alert('Você saiu!');
		window.location.href = 'index.html';
	}, function (error){
		console.error(error);
	});
};

function carregar(){
	document.form_auth.emailInput.focus();
}

function criarUserResp(){
  	firebase
	.auth()
	.createUserWithEmailAndPassword(document.querySelector('#c_mail_responsavel').value, document.querySelector('#c_rg_responsavel').value)
	.then(function () {
		alert('Usuário criado ' + document.querySelector('#c_mail_responsavel').value);
		window.location.href = 'menu_principal.html';
	})
	.catch(function (error){
		console.error(error.code);
		console.error(error.message);
		alert('Falha ao autenticar, verifique os possíveis erros')
	});
};

function criarUser(){
  	firebase
	.auth()
	.createUserWithEmailAndPassword(document.querySelector('#c_mail_usuario').value, document.querySelector('#c_rg_usuario').value)
	.then(function () {
		alert('Usuário criado ' + document.querySelector('#c_mail_usuario').value);
		window.location.href = 'menu_principal.html';
	})
	.catch(function (error){
		console.error(error.code);
		console.error(error.message);
		alert('Falha ao autenticar, verifique os possíveis erros')
	});
};