[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=9604509)

# PRÁCTICA - NETX.JS

- [PRÁCTICA - NETX.JS](#práctica---netxjs)
  - [1. Generador de nombres](#1-generador-de-nombres)
  - [2. Generador de imágenes](#2-generador-de-imágenes)
  - [3. Separación código en varios ficheros](#3-separación-código-en-varios-ficheros)
  - [4. Ejercicios REST](#4-ejercicios-rest)

## 1. Generador de nombres
Para el generador de nombres debemos mdodifcar el código de index.js. Para hacer la petición a la API de OpenAI y escribir con POST a espera de una respuesta necesitamos el siguiente código:

![codigonombre](img/codigo_nombre.png)

Primero completamos el código para la página generadora de nombres de index.js. 
Un ejemplo del funcionamiento es el siguiente:

![ejemplofetch](img/name_pet.png)

## 2. Generador de imágenes
Para el generador de imágenes debemos modificar el código de index.js y crear en la carpeta /pages/api/ otro fichero para acceder a la generación de imágenes. Para hacer la petición a la API de OpenAI y escribir con POST a espera de una respuesta necesitamos este código en /pages/pai/images.js:


Luego para adaptar el índice a la salida esperada cambiamos el texto para solicitar qué imagen quiere el cliente y finalmente la imprimimos por pantalla.

![codigoimagen](img/codigo_imagen.png)

Un ejemplo del funcionamiento es el siguiente:

![ejemplofetch](img/photo_generator.png)
![resultadoejemplo](img/caballo.png)

## 3. Separación código en varios ficheros
Primero creamos el índice en index.js:

Los enlaces dentro del índice nos llevan a siguientes páginas: **/image**, **/pet**, **/404** que son los generadores de imagen y nombres y la página de error. 

La página *image* contiene el código realizado anteriormente para la creación de imágenes, mientras que la página *pet* contiene el código realizado anteriormente para la creación de nombres. La página 404 contiene el siguiente código:
![codigo404](img/codigo_404.png)

Además, se les ha incluido a las páginas *image* y *pet* un enlace para volver a la página de inicio:
![volverinicio](img/volver_inicio.png)

Visualización de los nombres en las pestañas de las ventanas:

![ejemplonombre](img/name_pet_arriba.png)

![ejemploimagen](img/photo_generator_arriba.png)

Finalmente mostramos el despliegue:

![ejemplodespliegue](img/separacion_codigo.png)

## 4. Ejercicios REST
1. Todos los modelos:
![modelo](img/modelo.png)

2. Información sobre un modelo:
![da_vinci](img/modelo_da_vinci.png)

3. Generador de una imagen:
![generadorimagen](img/generador_imagen.png)

La imagen generada es la siguiente:
![imagengenerada](img/gatito.png)

4. Completar una frase:
![imagencompletion](img/completion.png)

5. Moderación (clasifica si el texto viola el OpenAI's Content Policy):
![imagenmoderation](img/moderation.png)
