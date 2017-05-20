function enviar_dados_responsavel(){

if (document.responsavel_form.c_ra_aluno_responsavel.value.length < 7 )
{
alert("O RA do aluno precisa de pelo menos 7 caracteres!");
document.responsavel_form.c_ra_aluno_responsavel.focus();
return false;
}	
 
if(document.responsavel_form.c_nome_responsavel.value=="" || document.responsavel_form.c_nome_responsavel.value.length < 8)
{
alert("O nome do usuário precisa de pelo menos 8 caracteres!");
document.responsavel_form.c_nome_responsavel.focus();
return false;
}

if (document.responsavel_form.c_rg_responsavel.value.length < 7 )
{
alert("O RG do usuário precisa de pelo menos 7 caracteres!");
document.responsavel_form.c_rg_responsavel.focus();
return false;
}	

if (document.responsavel_form.c_cpf_responsavel.value.length < 11 )
{
alert("O CPF do usuário precisa de pelo menos 11 caracteres!");
document.responsavel_form.c_cpf_responsavel.focus();
return false;
}	

if (document.responsavel_form.c_telefone_responsavel.value.length < 11 )
{
alert("O telefone do aluno precisa de DDD e os demais números. Sâo ao menos 11 caracteres, somente números! Não utilize traços ou pontos.");
document.responsavel_form.c_telefone_responsavel.focus();
return false;
}
 
if( document.responsavel_form.c_mail_responsavel.value=="" || document.responsavel_form.c_mail_responsavel.value.indexOf('@')==-1 || document.responsavel_form.c_mail_responsavel.value.indexOf('.')==-1 )
{
alert("Digite um e-mail válido!");
document.responsavel_form.c_mail_responsavel.focus();
return false;
}
 
if (document.responsavel_form.c_parentesco_responsavel.value.length =="" )
{
alert("Selecione o grau de parentesco com o aluno!");
document.responsavel_form.c_parentesco_responsavel.focus();
return false;
}	

return create();
}