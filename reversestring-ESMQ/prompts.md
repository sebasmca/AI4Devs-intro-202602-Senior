# Primer prompt

## Proyecto web para reverse string 
Toma el rol de un desarrolador full-stack experto 

### Contexto: 
Tengo las siguientes plantillas en como base de una página web: 
- index.html [adjunto] 
- scripts.js [vacío] 

### Objetivo: 
Debes crear una página web que invierta el orden de una cadena de texto introducida previamente por el usuario apoyándote en las plantillas proporcionadas.  

Agrega un input de texto libre que permita al usuario introducir una cadena de caracteres (máximo 100) y, debajo, un botón con el label "Invertir" inicialmente deshabilitado. 
El campo de texto libre sólo debe aceptar números y letras. Se valida y bloquea la introducción de caracteres especiales. 
Mientras el número de caracteres introducido en el input de texto sea menor que 2, el botón de "Invertir" permanecerá habilitado y se mostrará un texto placeholder diciendo "Introduce dos o más caracteres". 
Cuando el usuario introduce 2 o más caracteres, el botón "Invertir" debe habilitarse. 
Si el usuario clickea el botón "Invertir" mientras está habilitado, la aplicación debe invertir el texto introducido por el usuario en el campo de texto libre, por ejemplo: 
 - Si el usuario introdujo "Sebas", se debe invertir a "Sabes" 
 - Si el usuario introduce "mosca", se debe invertir a "Acsom" 
 
 El string invertido se mostrará en un campo de texto no editable debajo del botón "Invertir". 
 Por último, se mostrará el botón "Copiar" justo debajo que permitirá copiar el resultado al portapapeles 
 
 ### Estilo: 
 Hazlo en un estilo minimalista y moderno, considerando que el botón Invertir debe ser de color azul y el botón "Copiar" debe ser de color gris. 
 Incluye iconos representativos de la funcionalidad del botón al final del label de cada uno. 
 
 ### Salida: 
 Utiliza buenas prácticas de HTML y JavaSscript, adecuando el estilo y patrones a las convenciones endichos lenguajes. 
 Devuelve la solución en los ficheros index.html y script.js sin explicaciones

# Segundo prompt
Modifica los ficheros necesarios para solucionar los siguientes errores que ha encontrado el QA

### Errores
 - El botón invertir contiene dos iconos superpuestos:
     <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M7 7h10M7 12h7M7 17h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            <path d="M16 12l3 3m0 0l-3 3m3-3H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
     </svg>
   Creando incoherencia visual para el usuario. Remplazalos por un sólo icono que contenga dos flechas en la misma dirección pero sentidos opuestos.
- El botón invertir no se está habilitando después de que el usuario introduce 2 o más caracteres en el campo de texto libre. Posiblemente la raiz del error sea el siguiente error que se muestra por consola: GET file:///C:/Users/Hitosii/Downloads/AI4Devs-intro-202602-Senior-main/AI4Devs-intro-202602-Senior-main/reversestring-ESMQ/scripts.js net::ERR_FILE_NOT_FOUND, seguramente porque renombré el fichero scripts.js a script.js luego de que fue generado.

# Tercer prompt
Modifica los ficheros necesarios para solucionar los siguientes errores que ha encontrado el QA

### Errores
- El campo de texto libre debe permitir los caracteres especiales mínimos para la escritura convencional en español, como por ejemplo el espacio en blanco, signos de puntuación y acentos.
 
