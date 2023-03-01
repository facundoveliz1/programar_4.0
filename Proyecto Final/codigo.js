let arriba = document.getElementById("funo");
let abajo = document.getElementById("fdos");
let primera_pagina = document.getElementById("puno");
let segunda_pagina = document.getElementById("pdos");
let tercera_pagina = document.getElementById("ptres");
let big_one = document.getElementById("big_one");
let big_two = document.getElementById("big_two");
let big_three = document.getElementById("big_three");
let numero_pagina = "1";
let pestana_uno = document.getElementById("pestana_uno");
let pestana_dos = document.getElementById("pestana_dos");
let pestana_tres = document.getElementById("pestana_tres");
let pestana_cuatro = document.getElementById("pestana_cuatro");
let texto_uno = document.getElementById("doce");
let texto_dos = document.getElementById("trece");
let texto_tres = document.getElementById("catorce");
let texto_cuatro = document.getElementById("quince");
let cambiar_fondo = document.getElementById("once")
 

primera_pagina.addEventListener("click",ir_a_primera_pagina);
segunda_pagina.addEventListener("click",ir_a_segunda_pagina);
tercera_pagina.addEventListener("click",ir_a_tercera_pagina);
arriba.addEventListener("click",ir_a_pagina_arriba);
abajo.addEventListener("click",ir_a_pagina_abajo);
pestana_uno.addEventListener("click",cambiar_a_pestana_uno)
pestana_dos.addEventListener("click",cambiar_a_pestana_dos)
pestana_tres.addEventListener("click",cambiar_a_pestana_tres)
pestana_cuatro.addEventListener("click",cambiar_a_pestana_cuatro)


function ir_a_primera_pagina() {
    if (numero_pagina == "2" || numero_pagina == "3") {
        big_one.style.display = 'block';
        big_two.style.display = 'none';
        big_three.style.display = 'none';
        numero_pagina = "1";
    }
}

function ir_a_segunda_pagina() {
    if (numero_pagina == "1" || numero_pagina == "3") {
        big_one.style.display = 'none';
        big_two.style.display = 'block';
        big_three.style.display = 'none';
        numero_pagina = "2";
    }
}

function ir_a_tercera_pagina() {
    if (numero_pagina == "1" || numero_pagina == "2") {
        big_one.style.display = 'none';
        big_two.style.display = 'none';
        big_three.style.display = 'block';
        numero_pagina = "3";
    }
}

function ir_a_pagina_arriba() {
    if (numero_pagina == "3") {
        big_one.style.display = 'none';
        big_two.style.display = 'block';
        big_three.style.display = 'none';
        numero_pagina = "2";
    }
    else if (numero_pagina == "2") {
        big_one.style.display = 'block';
        big_two.style.display = 'none';
        big_three.style.display = 'none';
        numero_pagina = "1";
    }
    else if (numero_pagina == "1") {
        big_one.style.display = 'none';
        big_two.style.display = 'none';
        big_three.style.display = 'block';
        numero_pagina = "3";
    }
}

function ir_a_pagina_abajo() {
    if (numero_pagina == "1") {
        big_one.style.display = 'none';
        big_two.style.display = 'block';
        big_three.style.display = 'none';
        numero_pagina = "2";
    }
    else if (numero_pagina == "2") {
        big_one.style.display = 'none';
        big_two.style.display = 'none';
        big_three.style.display = 'block';
        numero_pagina = "3";
    }
    else if (numero_pagina == "3") {
        big_one.style.display = 'block';
        big_two.style.display = 'none';
        big_three.style.display = 'none';
        numero_pagina = "1";
    }
}

function cambiar_a_pestana_uno() {
    texto_uno.style.display = 'flex';
    texto_dos.style.display = 'none';
    texto_tres.style.display = 'none';
    texto_cuatro.style.display = 'none';
    pestana_uno.style.boxShadow = 'none';
    pestana_dos.style.boxShadow = '2px 3px 4px 4px';
    pestana_tres.style.boxShadow = '2px 3px 4px 4px';
    pestana_cuatro.style.boxShadow = '2px 3px 4px 4px';
    cambiar_fondo.style.backgroundImage = 'url(/imagenes/libro_estudio1.jpg)';
}

function cambiar_a_pestana_dos() {
    texto_uno.style.display = 'none';
    texto_dos.style.display = 'flex';
    texto_tres.style.display = 'none';
    texto_cuatro.style.display = 'none';
    pestana_dos.style.boxShadow = 'none';
    pestana_uno.style.boxShadow = '2px 3px 4px 4px';
    pestana_tres.style.boxShadow = '2px 3px 4px 4px';
    pestana_cuatro.style.boxShadow = '2px 3px 4px 4px';
    cambiar_fondo.style.backgroundImage = 'url(/imagenes/maquina_de_escribirmod.jpg)';
}

function cambiar_a_pestana_tres() {
    texto_uno.style.display = 'none';
    texto_dos.style.display = 'none';
    texto_tres.style.display = 'flex';
    texto_cuatro.style.display = 'none';
    pestana_tres.style.boxShadow = 'none';
    pestana_uno.style.boxShadow = '2px 3px 4px 4px';
    pestana_dos.style.boxShadow = '2px 3px 4px 4px';
    pestana_cuatro.style.boxShadow = '2px 3px 4px 4px';
    cambiar_fondo.style.backgroundImage = 'url(/imagenes/img1mod.jpg)';
}

function cambiar_a_pestana_cuatro() {
    texto_uno.style.display = 'none';
    texto_dos.style.display = 'none';
    texto_tres.style.display = 'none';
    texto_cuatro.style.display = 'flex';
    pestana_cuatro.style.boxShadow = 'none';
    pestana_uno.style.boxShadow = '2px 3px 4px 4px';
    pestana_dos.style.boxShadow = '2px 3px 4px 4px';
    pestana_tres.style.boxShadow = '2px 3px 4px 4px';
    cambiar_fondo.style.backgroundImage = 'url(/imagenes/claquetamod.jpg)';
}