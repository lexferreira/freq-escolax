function enviar_dados_usuario(){

if (document.usuario_form.c_rfid_usuario.value.length < 10 )
{
alert("Aproxime a tag do leitor ou digite seus 10 dígitos");
document.usuario_form.c_rfid_usuario.focus();
return false;
}	
 
if(document.usuario_form.c_nome_usuario.value=="" || document.usuario_form.c_nome_usuario.value.length < 8)
{
alert("O nome do usuário precisa de pelo menos 8 caracteres!");
document.usuario_form.c_nome_usuario.focus();
return false;
}

if (document.usuario_form.c_rg_usuario.value.length < 7 )
{
alert("O RG do usuário precisa de pelo menos 7 caracteres!");
document.usuario_form.c_rg_usuario.focus();
return false;
}	

if (document.usuario_form.c_cpf_usuario.value.length < 11 )
{
alert("O CPF do usuário precisa de pelo menos 11 caracteres!");
document.usuario_form.c_cpf_usuario.focus();
return false;
}	

if(document.usuario_form.c_endereco_usuario.value=="" || document.usuario_form.c_endereco_usuario.value.length < 8)
{
alert("O endereço do usuário precisa de pelo menos 8 caracteres! Lembre-se de colocar número e bairro.");
document.usuario_form.c_endereco_usuario.focus();
return false;
}
 
 
if( document.usuario_form.c_mail_usuario.value=="" || document.usuario_form.c_mail_usuario.value.indexOf('@')==-1 || document.usuario_form.c_mail_usuario.value.indexOf('.')==-1 )
{
alert("Digite um e-mail válido!");
document.usuario_form.c_mail_usuario.focus();
return false;
}
 
if (document.usuario_form.c_registro_usuario.value.length < 5 )
{
alert("O Registro do Servidor precisa de pelo menos 5 caracteres!");
document.usuario_form.c_registro_usuario.focus();
return false;
}	

}