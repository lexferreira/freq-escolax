function enviar_dados_aluno(){
 
if (document.aluno_form.c_rfid_aluno.value.length < 10 )
{
alert("Aproxime a tag do leitor ou digite seus 10 dígitos");
document.aluno_form.c_rfid_aluno.focus();
return false;
}	
 
if(document.aluno_form.c_nome_aluno.value=="" || document.aluno_form.c_nome_aluno.value.length < 8)
{
alert("O nome do aluno precisa de pelo menos 8 caracteres!");
document.aluno_form.c_nome_aluno.focus();
return false;
}

if (document.aluno_form.c_ra_aluno.value.length < 10 )
{
alert("Digite os 10 dígitos do RA. Sem traços, somente os números!");
document.aluno_form.c_ra_aluno.focus();
return false;
}	

if(document.aluno_form.c_nome_mae_aluno.value=="" || document.aluno_form.c_nome_mae_aluno.value.length < 8)
{
alert("O nome da mãe do aluno precisa de pelo menos 8 caracteres!");
document.aluno_form.c_nome_mae_aluno.focus();
return false;
}
if(document.aluno_form.c_nome_pai_aluno.value=="" || document.aluno_form.c_nome_pai_aluno.value.length < 8)
{
alert("O nome do pai do aluno precisa de pelo menos 8 caracteres!");
document.aluno_form.c_nome_pai_aluno.focus();
return false;
}

if (document.aluno_form.c_datanasc_aluno.value.length < 10 )
{
alert("Digite a data de nascimento com as barras para separar mês, dia e ano.");
document.aluno_form.c_datanasc_aluno.focus();
return false;
}	

if(document.aluno_form.c_endereco_aluno.value=="" || document.aluno_form.c_endereco_aluno.value.length < 8)
{
alert("O endereço do aluno precisa de pelo menos 8 caracteres! Lembre-se de colocar número e bairro.");
document.aluno_form.c_endereco_aluno.focus();
return false;
}

if (document.aluno_form.c_telefone1_aluno.value.length < 11 )
{
alert("O telefone do aluno precisa de DDD e os demais números. Sâo ao menos 11 caracteres, somente números! Não utilize traços ou pontos.");
document.aluno_form.c_telefone1_aluno.focus();
return false;
}

if(document.aluno_form.c_armario_aluno.value=="" || document.aluno_form.c_armario_aluno.value.length < 4)
{
alert("O armário do aluno precisa de pelo menos 4 caracteres!");
document.aluno_form.c_armario_aluno.focus();
return false;
}
 
if( document.aluno_form.c_mail_aluno.value=="" || document.aluno_form.c_mail_aluno.value.indexOf('@')==-1 || document.aluno_form.c_mail_aluno.value.indexOf('.')==-1 )
{
alert("Digite um e-mail válido! Caso o aluno não possua pode-se utilizar o do responsável!");
document.aluno_form.c_mail_aluno.focus();
return false;
}
 
if(document.aluno_form.t_serie_aluno.value=="" || document.aluno_form.t_serie_aluno.value.length < 4)
{
alert("Selecione a série!");
document.aluno_form.t_serie_aluno.focus();
return false;
}

return create();
}