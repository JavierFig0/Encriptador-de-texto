# :shield: Encriptador de texto

Encriptador y desencriptador de texto con estilo **8 bits inspirado en The Legend of Zelda de NES**, desarrollado para el Challenge ONE Principiante en Programación.

:point_right: [**Ver el proyecto en línea**](https://javierfig0.github.io/Encriptador-de-texto/)

<p align="center">
  <img src="img/captura-escritorio.png" alt="Encriptador en escritorio: campo de texto verde con marco pixelado, botones Encriptar y Desencriptar, y panel azul con el resultado sobre un fondo de arena con rupias" width="68%">
  &nbsp;
  <img src="img/captura-movil.png" alt="Encriptador en celular: los mismos elementos apilados en una columna" width="24%">
</p>

## :sparkles: Funcionalidades

- :lock: **Encriptar** y :unlock: **desencriptar** texto con las llaves del challenge.
- :clipboard: **Copiar** el resultado al portapapeles con un solo clic.
- :x: **Borrar** el texto y empezar de nuevo.
- :warning: **Validación**: avisa si el texto tiene acentos, `ñ`, números o caracteres especiales, y si el campo está vacío.
- :capital_abcd: **Mayúsculas**: se convierten automáticamente a minúsculas.
- :iphone: **Responsive**: se adapta a escritorio, tablet y celular.
- :wheelchair: **Accesible**: se puede usar con teclado y con lector de pantalla.

## :key: Llaves de encriptación

| Letra | Se convierte en |
| :---: | :---: |
| `e` | `enter` |
| `i` | `imes` |
| `a` | `ai` |
| `o` | `ober` |
| `u` | `ufat` |

Por ejemplo:

```
"gato"     =>  "gaitober"
"gaitober" =>  "gato"
```

El reemplazo se hace en **una sola pasada**, así el resultado de una llave nunca se confunde con otra y desencriptar siempre devuelve el texto original.

## :pushpin: Requisitos del challenge

- Debe funcionar solo con letras minúsculas (las mayúsculas se convierten automáticamente a minúsculas).
- No deben ser utilizados letras con acentos ni caracteres especiales (si se ingresan, se muestra un aviso de error).
- Debe ser posible convertir una palabra para la versión encriptada y también devolver una palabra encriptada para su versión original.
- La página debe tener campos para inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre las dos opciones.
- El resultado debe ser mostrado en la pantalla.

## :art: Diseño

Todo el diseño está hecho a mano con CSS, sin frameworks:

- **Paleta de colores de la NES**: verde bosque, azul, rojo y café, con el contraste necesario para que todo se lea bien.
- **Fondo de arena del overworld** con pasto, piedras y rupias, en una baldosa pixel art que se repite sin deformarse.
- **Marcos y botones pixelados** con esquinas recortadas, relieve de luz y sombra, y animación al apretarlos.
- **Fuente [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)** en tamaños múltiplos de 8 para que las letras se vean nítidas.
- **Avisos estilo caja de diálogo** del juego.

## :rocket: Cómo usarlo

No necesita instalación ni dependencias: descarga o clona el repositorio y abre `index.html` en tu navegador.

```bash
git clone https://github.com/JavierFig0/Encriptador-de-texto.git
```

## :file_folder: Estructura

```
├── index.html   # estructura de la página
├── style.css    # diseño y responsive
├── reset.css    # reseteo de estilos del navegador
├── main.js      # lógica de encriptar, validar, copiar y avisos
└── img/         # imágenes y sprites
```

## :hammer_and_wrench: Construido con

* ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
* ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

Íconos de [Font Awesome](https://fontawesome.com/) y fuente de [Google Fonts](https://fonts.google.com/).

> The Legend of Zelda es una marca de Nintendo. Este es un proyecto de práctica sin fines de lucro, hecho como homenaje.

## :e-mail: Contacto

<a href="https://www.linkedin.com/in/francisco-figueroa-wd/"> <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"> </a>
<a href="https://twitter.com/JavierF12618918"> <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"> </a>
