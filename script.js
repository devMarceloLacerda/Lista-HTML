
// Exercicio 1
function triangulo(form) {
    var n1 = form.n1.value;
    var n2 = form.n2.value;
    var n3 = form.n3.value;
    if (n1==n2 && n2==n3)
          alert ("O Triangulo é Equilatero");
        else
          if (n1==n2 || n2==n3 || n3==n1)
            alert ("O Triangulo é Isosceles");
          else
            alert ("O Triangulo é Escaleno");
}


// Exercicio 2
function idade(form) 
{
    var d = new Date,
        ano_atual = d.getFullYear();

        ano_aniversario = form.datanasc.value;

        quantos_anos = ano_atual - ano_aniversario;

    alert(quantos_anos);
}

//Exercicio 3
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

				
// Exercicio 4
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


// Exercicio 5

function tabuada(){
	var num = parseInt(document.getElementById("num").value);
	var resposta = document.getElementById('resposta');
	var tabuada='';
  
	for(var count=1; count<=10 ; count++)
	 tabuada += num+" x "+count+" = "+
				 num*count+"<br />";
	
	resposta.innerHTML = tabuada;
  }

// Exercicio 5 maneira diferente para a Ana Clara (Utilizando o document.write)

function tabuada_2(form){
        
	var multiplicador = form.v1.value;
var limite = 10;
var count = 0
while(count <= limite){
var resultado = multiplicador * count; 
document.write(multiplicador + " x " + count + " = " + resultado + "<br>") 
count ++ 

}
}

// Exercicio 6

function maiormenordezoito(form){
let maior = 0;
let menor = 0;
while(true){
    let entrada = prompt();
    if(entrada=="0"){
        break;
    }
    entrada = parseFloat(entrada);
    if(entrada>=18){
        maior++;
    }else{
        menor++;
    }
}

alert(`${maior} maiores e ${menor} menores de 18 anos`);
}

// Exercício 7

function elevado(form)
{
						var num1=form.n1.value;
						var num2=form.n2.value;
							var result= num1 * num2;
							alert(result)
				} 


// Exercicio 8

function mesDigitado(mes) {
	switch (mes) {
		case 1:
			return ("Janeiro");
			break;
		case 2:
			return ("Fevereiro");
			break;
		case 3:
			return ("Março");
			break;
		case 4:
			return ("Abril");
			break;
		case 5:
			return ("Maio");
			break;
		case 6:
			return ("Junho");
			break;
		case 7:
			return ("Julho");
			break;
		case 8:
			return ("Agosto");
			break;
		case 9:
			return ("Setembro");
			break;
		case 10:
			return ("Outubro");
			break;
		case 11:
			return ("Novembro");
			break;
		case 12:
			return ("Dezembro");
			break;

		default:
			break;
	}
}

// Exercicio 9

function fatorial(form)
{
						var num1=form.n1.value;
							var result= num1 * num1;
							alert(result)
				} 


// Exercicio 10

function validacaoEmail(field) {
	usuario = field.value.substring(0, field.value.indexOf("@"));
	dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
	
	if ((usuario.length >=1) &&
		(dominio.length >=3) &&
		(usuario.search("@")==-1) &&
		(dominio.search("@")==-1) &&
		(usuario.search(" ")==-1) &&
		(dominio.search(" ")==-1) &&
		(dominio.search(".")!=-1) &&
		(dominio.indexOf(".") >=1)&&
		(dominio.lastIndexOf(".") < dominio.length - 1)) {
	document.getElementById("msgemail").innerHTML="E-mail válido";
	alert("E-mail valido");
	}
	else{
	document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
	alert("E-mail invalido");
	}
	}

// Exercicio 11

function bemvindo(){
	var num = document.getElementById("num1").value;
	var resposta = document.getElementById('resposta');
	var tabuada='';
  
	document.write(num + " seja muito bem vindo")
	
	resposta.innerHTML = tabuada;
  }

// Exercicio 12

function analisarnum(){
	var num = parseInt(document.getElementById("num1").value);
	var resposta = document.getElementById('resposta');
	var tabuada='';
	var raizquadrada= (num / 2.0);
	var raizcubica= (num / 3.0);
	var x2= (num * num);
	var x3= (num * num * num);
  
	document.write("Seu valor absoluto é: " +num +"<br />")
	document.write("Sua parte inteira é: " +num+ "<br />")
	document.write("Sua raiz quadrada é: " +raizquadrada +"<br />")
	document.write("Sua raiz cubica é: " +raizcubica +"<br />")
	document.write("O valor de "+num+"x2 é " +x2 +"<br />")
	document.write("O valor de "+num+"x3 é " +x3 +"<br />")
	
	resposta.innerHTML = tabuada;
  }

  var count = 0;
  
  function acrescentar() { 
    count++;
    carrinhoIndex.innerHTML = count
  }

// Exercicio 13

function ex13() {
	var count = 0;
	var btn = document.getElementById("btn");
	var disp = document.getElementById("display");
	var reset = document.getElementById("reset");

	btn.onclick = function () {
		count++;
		disp.innerHTML = count;
	}

	reset.onclick = function () {
		count= 0;
		disp.innerHTML = count;

	}
}
// @MarceloHilario 