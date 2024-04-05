var nota1h = document.getElementById("nota1h");
var nota2h = document.getElementById("nota2h");
var nota3h = document.getElementById("nota3h");
var promedioh = document.getElementById("promedioh");

var nota1ht =  prompt("ingrese primera nota [HTML]");
var nota2ht =  prompt("ingrese primera segunda [HTML]");
var nota3ht =  prompt("ingrese primera tercera [HTML]");

nota1h.innerHTML = nota1ht
nota2h.innerHTML = nota2ht
nota3h.innerHTML = nota3ht

promedioh.innerHTML = (parseInt(nota1ht) + parseInt(nota2ht) + parseInt(nota3ht)) / 3;

var nota1c = document.getElementById("nota1c");
var nota2c = document.getElementById("nota2c");
var nota3c = document.getElementById("nota3c");
var promedioc = document.getElementById("promedioc");

var nota1css =  prompt("ingrese primera nota [CSS]");
var nota2css =  prompt("ingrese primera segunda [CSS]");
var nota3css =  prompt("ingrese primera tercera [CSS]");

nota1c.innerHTML = nota1css
nota2c.innerHTML = nota2css
nota3c.innerHTML = nota3css

promedioc.innerHTML = (parseInt(nota1css) + parseInt(nota2css) + parseInt(nota3css)) / 3;

var nota1j = document.getElementById("nota1j");
var nota2j = document.getElementById("nota2j");
var nota3j = document.getElementById("nota3j");
var promedioj = document.getElementById("promedioj");

var nota1js  =  prompt("ingrese primera nota [JS]");
var nota2js =  prompt("ingrese primera segunda [JS]");
var nota3js  =  prompt("ingrese primera tercera [JS]");

nota1j.innerHTML = nota1js
nota2j.innerHTML = nota2js
nota3j.innerHTML = nota3js

promedioj.innerHTML = (parseInt(nota1js) + parseInt(nota2js) + parseInt(nota3js)) / 3;
