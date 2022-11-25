
function triangulo(form) {
    var n1 = form.n1.value;
    var n2 = form.n2.value;
    var n3 = form.n3.value;
    if (n1==n2 && n2==n3)
          alert ("O Trinagulo é Equilatero");
        else
          if (n1==n2 || n2==n3 || n3==n1)
            alert ("O Trinagulo é Isosceles");
          else
            alert ("O Trinagulo é Escaleno");
}

function idade(form) 
{
    var d = new Date,
        ano_atual = d.getFullYear();

        ano_aniversario = form.datanasc.value;

        quantos_anos = ano_atual - ano_aniversario;

    alert(quantos_anos);
}

function calcnotas(form)
{
						var nota1=form.n1.value;
						var nota2=form.n2.value;
						var nota3=form.n3.value;
						var faltas=form.faltas.value;
						var media=nota1+nota2+nota3;
						var result= media / 3;
						if (result>=7 && faltas<10)
							alert("Aprovado")
						else
							alert("Reprovado")
				}



function vendas(form)
{
						var val1=form.val1.value;
						if (val1>=500 && val1<700)
							alert("Desconto: 15%")
						else if (val1>700)
							alert("Desconto: 20%")
						else
							alert("Desconto: 5%");
				}

				