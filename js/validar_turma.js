function enviar_dados_turma(){
 
if (document.turma_form.c_sala.value.length < 2 )
{
alert("Digite a sala (letras ou números)");
document.turma_form.c_sala.focus();
return false;
}

if (document.turma_form.c_lotacao.value < 1 || document.turma_form.c_lotacao.value > 50)
{
alert("A precisa ser maior que zero e menor que 50!");
document.turma_form.c_lotacao.focus();
return false;
}

if (document.turma_form.c_matriculas.value < 1 || document.turma_form.c_matriculas.value.length > 50)
{
alert("A precisa ser maior que zero e menor que 50!");
document.turma_form.c_matriculas.focus();
return false;
}

if (document.turma_form.c_matriculas.value > document.turma_form.c_lotacao.value)
{
alert("Quantidade de matrículas maior que vagas! Observar lotação!");
document.turma_form.c_matriculas.focus();
return false;
}

if (document.turma_form.c_grau.value.length=="" )
{
alert("Selecione alguma informação válida na caixa!");
document.turma_form.c_grau.focus();
return false;
}	

if (document.turma_form.c_serie.value.length=="" )
{
alert("Selecione alguma informação válida na caixa!");
document.turma_form.c_serie.focus();
return false;
}	

if (document.turma_form.c_turma.value.length=="" )
{
alert("Selecione alguma informação válida na caixa!");
document.turma_form.c_turma.focus();
return false;
}	

if (document.turma_form.c_periodo.value.length=="" )
{
alert("Selecione alguma informação válida na caixa!");
document.turma_form.c_periodo.focus();
return false;
}	

return create();
}