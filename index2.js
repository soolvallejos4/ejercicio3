'use strict'

/*Se recogen los siguientes datos para una encuesta: ciudad, sexo (H o M) y edad (0 a 110)

Calcule e informe los siguientes datos:

<p>-        Promedio de edad general.</p>
      <p>- Promedio de edad de las mujeres.</p>
      <p>- Promedio de edad de los hombres.</p>
      <p>- Porcentaje de mujeres menores a 21 años.</p>
      <p>- Porcentaje de hombres mayores a 21 años.</p>
      <p>- La mayor edad ingresada de las mujeres.</p>
      <p>- La menor edad ingresada de los hombres.</p>
      <p>Los tres valores ingresados deben ser validados según corresponda.</p>
    </div>*/


/*CONTADORES*/

let contadorGeneral = 0;
let contadorMujeres = 0;
let contadorHombres = 0;
let contadorPorMujeres = 0;
let contadorPorHombres = 0;


/*ACUMULADOR*/

let acumGeneral = 0;
let acumMujeres = 0;
let acumHombres  = 0;

let mayor = Number.NEGATIVE_INFINITY;
let menor = Number.POSITIVE_INFINITY;


do {
    
    //do while para validar los datos.

    do {
        var ciudad = prompt('Ingrese la ciudad de donde es ');
    } while (!(isNaN(ciudad)));

    do {
        var sexo = prompt('Ingrese el sexo, M o H').toLowerCase();
    } while (!(sexo == 'm'|| sexo == 'h' ));

    do {
        var edad = parseInt(prompt('Ingrese su edad'));
    } while (!(edad >= 0 && edad <= 100));

    contadorGeneral++;
    acumGeneral += edad;

        if(sexo == 'm' ){
            contadorMujeres++;
            acumMujeres += edad;

            if(edad < 21) {
                contadorPorMujeres++;
            }

        }else{
            contadorHombres++;
            acumHombres += edad;
            if( edad > 21) {
                contadorPorHombres;
            }
        }

        if (edad > mayor) {
            mayor = edad
        }
        if (edad < menor){
            menor = edad;
        }

} while (confirm('Desea ingresar data nuevamente?'));

let promedioGeneral = contadorGeneral / acumGeneral ;
let promedioEdadMujeres = contadorMujeres / acumMujeres ;
let promedioEdadHombres = contadorHombres / acumHombres ;

let porcentajeFinalMujeres = contadorPorMujeres / contadorMujeres * 100;
let porcentajeFinalHombres = contadorPorHombres / contadorHombres * 100;

document.write(`El promedio general es ${promedioGeneral} , el promedio de las mujeres es ${promedioEdadMujeres} , el promedio de edad de los hombres es ${promedioEdadHombres} . El porcentaje final de mujeres es ${porcentajeFinalMujeres} , el porcentaje final de hombres es ${porcentajeFinalHombres} .
La mayor edad ingresada es ${mayor} y la menor edad ingresada es ${menor}` )