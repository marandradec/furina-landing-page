# Court of Fontaine – Portafolio fan de Furina

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black)
![Estado](https://img.shields.io/badge/estado-en%20desarrollo-blue)
![Sin fines de lucro](https://img.shields.io/badge/uso-sin%20fines%20de%20lucro-green)

Sitio web de una sola vista hecho con **HTML, CSS y JavaScript puro**, ambientado en la temática de Furina de *Genshin Impact*. Es un proyecto personal creado para practicar maquetación, manipulación del DOM y animaciones web.

   > **Importante:** Este sitio es una recreación de práctica hecha por y para fans. **No se vende ni se utiliza comercialmente bajo ningún concepto.**

<!-- Agrega aquí una captura de pantalla o un GIF de tu sitio:
![Vista previa del sitio](assets/preview.png)
-->

## Tabla de contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Cómo verlo localmente](#-cómo-verlo-localmente)
- [Cómo crear una página nueva](#-cómo-crear-una-página-nueva)
- [Páginas por crear](#-páginas-por-crear-enlaces-del-menú)
- [Roadmap](#-roadmap)
- [Créditos y atribuciones](#-créditos-y-atribuciones)
- [Contacto](#-contacto)

## Características

- **Barra lateral fija con menú desplegable animado**, compartido por todas las páginas desde `site.js`: las palabras aparecen de arriba hacia abajo y el fondo negro se abre hacia la derecha.
- **Submenús** con enlaces a otras páginas; el menú se cierra al hacer clic afuera o al presionar `Esc`.
- **Animaciones de *scroll reveal*** en textos e imágenes.
- **Secciones con foto fija** (`position: sticky`) y tarjetas informativas sobre Furina: mejores armas, artefactos, talentos y composiciones de equipo.
- **Sección de video** horizontal en reproducción.
- **Formulario de contacto**, mapa y pie de página con créditos completos.

## Tecnologías

| Área | Detalle |
|------|---------|
| Marcado | HTML5 |
| Estilos | CSS3 (Grid, Flexbox, `clip-path`, `position: sticky`) |
| Lógica | JavaScript *vanilla*, sin librerías ni frameworks externos |
| Tipografías | [Lato](https://fonts.google.com/specimen/Lato) y [Merriweather](https://fonts.google.com/specimen/Merriweather) (Google Fonts) |
| Íconos | [Font Awesome 4.7](https://fontawesome.com/v4/) |
| Apoyo | IA generativa como asistencia durante la codificación y estructuración |

## Estructura del proyecto

```text
.
├── index.html        # Página principal
├── plantilla.html    # Base limpia para crear páginas nuevas
├── main.css          # Estilos globales y componentes reutilizables
├── site.js           # Barra lateral, menú, pie de página y animaciones
├── README.md
└── assets/
    ├── pic00.jpg … pic10.jpg
    └── clip01.mp4
```

| Archivo | Función |
|---------|---------|
| `main.css` | Estilos globales y componentes compartidos entre las páginas. |
| `site.js` | Inserta dinámicamente la barra lateral, el menú y el pie de página en cada vista, y gestiona animaciones e interacciones. |
| `plantilla.html` | Base HTML que se duplica para cada página nueva del sitio. |

## Cómo verlo localmente

1. Descarga o clona este repositorio:
   ```bash
   git clone <URL-del-repositorio>
   ```
2. Verifica que la carpeta `assets/` contenga todas las imágenes y el video.
3. Abre `index.html` directamente en tu navegador.

> **NOTE**
> Las tipografías y los íconos se cargan desde CDN, por lo que necesitas conexión a internet para verlos correctamente.

## Cómo crear una página nueva

1. Duplica `plantilla.html` y renómbralo según la ruta del menú (por ejemplo, `char-furina.html`).
2. Edita el título de la pestaña, la cabecera (título y subtítulo de la portada) y el contenido principal.
3. ¡Listo! La barra lateral, el menú y el pie de página se cargan automáticamente al vincular `site.js`.

Para agregar o modificar enlaces del menú, edita la constante `MENU` al inicio de `site.js`; el cambio se propaga a todas las páginas.

## Páginas por crear (enlaces del menú)

El menú ya apunta a estos archivos. Todos deben estar en la misma carpeta raíz que `index.html`.

<details>
<summary><strong>Naciones y lore</strong></summary>

- **Naciones:** `nation-mondstadt.html`, `nation-liyue.html`, `nation-inazuma.html`, `nation-sumeru.html`, `nation-fontaine.html`, `nation-natlan.html`, `nation-snezhnaya.html`
- **Lore:** `lore-archons.html`, `lore-visions.html`, `lore-fatui.html`, `lore-abyss.html`, `lore-khaenriah.html`

</details>

<details>
<summary><strong>Personajes</strong></summary>

- **Por elemento:** `char-anemo.html`, `char-geo.html`, `char-electro.html`, `char-dendro.html`, `char-hydro.html`, `char-pyro.html`, `char-cryo.html`
- **Por arma:** `char-sword.html`, `char-claymore.html`, `char-polearm.html`, `char-bow.html`, `char-catalyst.html`
- **Destacados:** `char-furina.html`, `char-neuvillette.html`, `char-nahida.html`, `char-raiden.html`, `char-zhongli.html`, `char-venti.html`

</details>

<details>
<summary><strong>Wiki</strong></summary>

- `wiki-weapons.html`, `wiki-artifacts.html`, `wiki-materials.html`
- `wiki-enemies.html`, `wiki-bosses.html`, `wiki-domains.html`, `wiki-quests.html`, `wiki-events.html`

</details>

<details>
<summary><strong>Guías</strong></summary>

- `guide-beginner.html`, `guide-archon-quests.html`, `guide-codes.html`, `guide-primogems.html`
- `guide-teams.html`, `guide-talents.html`, `guide-artifact-farming.html`, `guide-abyss.html`, `guide-theater.html`
- `guide-cooking.html`, `guide-fishing.html`

</details>

<details>
<summary><strong>Deseos (Wish)</strong></summary>

- `wish-character.html`, `wish-weapon.html`, `wish-standard.html`, `wish-beginner.html`, `wish-chronicled.html`
- `wish-intertwined.html`, `wish-acquaint.html`, `wish-pity.html`

</details>

<details>
<summary><strong>Otros</strong></summary>

- `map.html`
- El enlace `contact` hace *scroll* suave a la sección de contacto en `index.html` (no requiere página nueva).

</details>

## Roadmap

- [x] Menú lateral compartido y animado
- [x] Animaciones de *scroll reveal*
- [x] Formulario de contacto con validaciones en el cliente y mensaje de confirmación
- [ ] Envío real del formulario por correo electrónico
- [ ] Reemplazar el correo y el teléfono de ejemplo (son datos ficticios) por datos reales
- [ ] Construir las páginas secundarias a las que apunta el menú

## Créditos y atribuciones

### Inspiración de diseño

El diseño visual está inspirado en la plantilla **Sparrow** de [Themewagon](https://themewagon.com/), usada únicamente como referencia estética durante el maquetado. El código combina trabajo propio con asistencia de IA generativa; **no se incluyeron ni copiaron archivos, imágenes o scripts originales** de la plantilla comercial.

Si en el futuro adapto este diseño a un proyecto comercial, adquiriré la licencia correspondiente en Themewagon.

### Imágenes y videos

Las imágenes y los videos fueron tomados de **Pinterest**. No son de mi autoría y pertenecen a sus creadores originales. Se usan aquí únicamente con fines educativos y de portafolio personal, sin fines de lucro.

Si eres autor o autora de algún material y deseas que se agregue tu crédito o que se retire, escríbeme y lo atenderé lo antes posible.

### Furina, *Genshin Impact*

Furina, *Genshin Impact* y todos los personajes, nombres y elementos asociados son propiedad intelectual de **HoYoverse (miHoYo)**. Este es un proyecto no oficial, sin afiliación ni respaldo de HoYoverse.

### Tipografías e íconos

- **Lato** y **Merriweather** – Google Fonts (licencia abierta).
- **Font Awesome 4.7** (licencia abierta).

## Contacto

Desarrollado por **[María Andrade / marandradec]**

- Email: [...]
- GitHub / Portafolio: [...]