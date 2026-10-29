# Especificación de desarrollo — Segundo aniversario de Diego y Marily

## 1. Propósito del documento

Este documento debe utilizarse como fuente principal para diseñar y desarrollar una experiencia web dedicada al segundo aniversario de relación de **Diego y Marily**.

El resultado no debe parecer una página institucional ni una galería convencional. Debe sentirse como una experiencia narrativa, íntima y cinematográfica, compuesta por varias escenas que se muestran dentro de una única pantalla completa.

La primera versión utilizará fotografías temporales provenientes de bancos de imágenes. La implementación debe permitir sustituirlas posteriormente por fotografías personales sin modificar componentes, animaciones ni estilos.

---

## 2. Objetivo de la experiencia

Crear una página de aniversario que:

- Cuente una historia romántica mediante seis escenas.
- Muestre una sola escena a la vez.
- Utilice pocas fotografías: cuatro imágenes temporales como máximo.
- Sea diseñada primero para celulares y se adapte a tabletas y computadoras.
- Tenga transiciones elegantes y cinematográficas.
- Sea rápida, accesible y fácil de mantener.
- Pueda publicarse como sitio estático en GitHub Pages.
- Permita cambiar textos, fechas e imágenes desde un único archivo de datos.

---

## 3. Concepto creativo

### Nombre de la experiencia

**Diego & Marily — Nuestro segundo capítulo**

### Idea central

Dos años no se presentan como una colección de fotografías, sino como un capítulo de una historia que continúa. Cada escena revela una parte del mensaje y conduce de manera natural hacia la dedicatoria final.

### Tono

- Romántico, pero no infantil.
- Emotivo, pero no excesivamente dramático.
- Elegante, cercano y auténtico.
- Mensajes breves para que las animaciones y el espacio visual respiren.

---

## 4. Experiencia de navegación

Toda la aplicación debe ocupar una sola ventana visible. No debe existir desplazamiento vertical tradicional entre secciones.

El visitante podrá avanzar y retroceder mediante:

- Botones visibles «Anterior» y «Continuar».
- Flechas izquierda y derecha del teclado.
- Gestos horizontales en pantallas táctiles.
- Indicadores inferiores de progreso.
- Rueda del mouse, únicamente si se implementa con bloqueo para evitar avances accidentales.

Reglas de navegación:

- Mostrar una única escena activa.
- No permitir un nuevo cambio mientras una transición está ejecutándose.
- Mantener el foco del teclado de forma accesible.
- La navegación no debe depender exclusivamente de gestos.
- Al llegar a la escena final, mostrar «Volver al inicio».
- No usar reproducción automática de escenas: Marily debe decidir cuándo avanzar.

---

## 5. Contenido definitivo de las escenas

### Escena 1 — Portada

**Identificador:** `intro`

**Imagen:** `hero-placeholder.jpg`

**Etiqueta superior:**

> DIEGO & MARILY

**Título principal:**

> Dos años, una historia que seguimos eligiendo.

**Texto complementario:**

> Hoy quiero detener el tiempo por un momento y recordar todo lo bonito que hemos construido juntos.

**Fecha:**

> [FECHA DE INICIO DE LA RELACIÓN] — [FECHA DEL SEGUNDO ANIVERSARIO]

**Botón principal:**

> Comenzar nuestra historia

**Dirección artística:**

- Fotografía a pantalla completa.
- Degradado oscuro, principalmente en la parte inferior.
- Los nombres aparecen primero; después, el título y el botón.
- Aplicar un acercamiento muy lento a la imagen durante la permanencia en la escena.

---

### Escena 2 — El comienzo

**Identificador:** `beginning`

**Imagen:** reutilizar `hero-placeholder.jpg` con desenfoque, oscurecimiento y un encuadre diferente. No cargar otra imagen.

**Etiqueta superior:**

> CAPÍTULO I · EL COMIENZO

**Título:**

> Sin saberlo, aquel día empezó algo muy especial.

**Mensaje:**

> Todo comenzó de una manera sencilla, sin imaginar cuánto llegaríamos a significar el uno para el otro. Desde entonces, cada conversación, cada sonrisa y cada momento compartido fue dando forma a nuestra historia.

**Frase destacada:**

> Y así, casi sin darnos cuenta, comenzamos a caminar juntos.

**Dirección artística:**

- Composición editorial con bastante espacio vacío.
- La etiqueta y el título entran línea por línea.
- La frase destacada aparece al final en Cormorant Garamond cursiva.

---

### Escena 3 — Los recuerdos

**Identificador:** `memories`

**Imágenes:**

- `memory-one-placeholder.jpg`
- `memory-two-placeholder.jpg`

**Etiqueta superior:**

> CAPÍTULO II · LO QUE HEMOS VIVIDO

**Título:**

> Hay momentos que terminan convirtiéndose en hogar.

**Mensaje:**

> No son solamente los días importantes. También son las conversaciones largas, las risas inesperadas y esos instantes sencillos que contigo se vuelven inolvidables.

**Textos breves asociados a las imágenes:**

1. «Los días especiales que siempre recordaremos.»
2. «Y los días sencillos que aprendimos a disfrutar juntos.»

**Frase de cierre:**

> Si pudiera guardar algo para siempre, sería la forma en que se siente compartir la vida contigo.

**Dirección artística:**

- No mostrar las dos imágenes como una galería estática.
- Presentar primero una imagen y transformarla en la segunda mediante fundido y desplazamiento suave.
- En computadora, el texto puede ocupar un lateral.
- En celular, el texto debe aparecer sobre un degradado inferior.

---

### Escena 4 — Veinticuatro meses

**Identificador:** `reasons`

**Imagen:** ninguna.

**Fondo:** vino profundo con un resplandor radial suave en rosa envejecido.

**Número principal:**

> 24

**Título:**

> meses encontrando nuevas razones para elegirte.

**Instrucción visible:**

> Toca el corazón para descubrir una razón.

**Mensajes rotativos:**

1. Porque contigo puedo ser yo mismo.
2. Porque haces especiales incluso los días más sencillos.
3. Porque tu sonrisa siempre consigue alegrarme.
4. Porque me escuchas y tratas de comprenderme.
5. Porque hemos aprendido a crecer juntos.
6. Porque contigo los planes inesperados se convierten en recuerdos.
7. Porque sabes acompañarme incluso cuando no encuentro las palabras.
8. Porque celebras mis logros como si fueran tuyos.
9. Porque tu forma de querer se siente sincera.
10. Porque me das tranquilidad cuando más la necesito.
11. Porque juntos formamos un buen equipo.
12. Porque siempre encontramos una razón para reír.
13. Porque me inspiras a seguir mejorando.
14. Porque hemos sabido superar los días difíciles.
15. Porque contigo puedo hablar durante horas o disfrutar del silencio.
16. Porque cada abrazo tuyo se siente como volver a casa.
17. Porque confías en mí.
18. Porque me permites ser parte de tus sueños.
19. Porque hemos creado recuerdos que solo nosotros entendemos.
20. Porque tu compañía hace que el tiempo pase demasiado rápido.
21. Porque sigues sorprendiéndome con tus pequeños detalles.
22. Porque a tu lado he conocido una forma bonita de compartir la vida.
23. Porque después de dos años todavía quiero seguir descubriéndote.
24. Porque entre tantas posibilidades, volvería a elegirte a ti.

**Interacción:**

- Mostrar una razón por vez.
- El botón de corazón avanza de forma circular por las 24 razones.
- Mostrar el contador accesible «Razón 1 de 24».
- No avanzar automáticamente.
- Con `prefers-reduced-motion`, cambiar el texto sin animación compleja.

---

### Escena 5 — Lo que viene

**Identificador:** `future`

**Imagen:** `future-placeholder.jpg`

**Etiqueta superior:**

> CAPÍTULO III · LO QUE VIENE

**Título:**

> Lo más bonito de nuestra historia es que todavía la estamos escribiendo.

**Mensaje:**

> No sé exactamente qué caminos nos esperan, pero sí sé que quiero seguir compartiendo contigo nuevos lugares, aprendizajes, sueños y muchos momentos que todavía no tienen fotografía.

**Frase destacada:**

> Que nunca nos falten motivos para mirar hacia adelante, juntos.

**Dirección artística:**

- Utilizar una fotografía de una pareja caminando o contemplando un paisaje.
- Aplicar movimiento horizontal muy lento para transmitir continuidad.
- Evitar íconos de viajes o listas de planes que todavía no han sido confirmados.

---

### Escena 6 — Dedicatoria final

**Identificador:** `finale`

**Imagen:** reutilizar `hero-placeholder.jpg` con otro encuadre y mayor desenfoque. No cargar una quinta fotografía.

**Título:**

> Marily,

**Dedicatoria:**

> Gracias por estos dos años, por cada recuerdo y por todo lo que hemos aprendido juntos. Gracias por estar presente en los días felices y por permanecer también cuando el camino no fue tan sencillo.
>
> Hoy no quiero celebrar solamente el tiempo que ha pasado. Quiero celebrar la historia que hemos construido y la posibilidad de seguir creando nuevos recuerdos a tu lado.

**Frase final:**

> Feliz segundo aniversario. Te amo.

**Firma:**

> Diego

**Botón:**

> Volver al inicio

**Dirección artística:**

- Reducir los elementos decorativos.
- Dar protagonismo absoluto al mensaje.
- La firma debe aparecer al final como si estuviera siendo escrita, pero sin simular una escritura excesivamente lenta.

---

## 6. Fotografías temporales

Usar cuatro fotografías temporales como máximo. Deben descargarse y almacenarse localmente en el proyecto; no se deben enlazar directamente desde Pexels o Unsplash en producción.

### Fuentes sugeridas

1. **Portada y cierre:** pareja caminando en la playa al atardecer  
   Fuente: https://www.pexels.com/photo/a-couple-walking-on-the-beach-5971180/

2. **Primer recuerdo:** detalle de una pareja tomada de las manos  
   Fuente: https://unsplash.com/photos/holding-hand-couple-UUACBQP62xw

3. **Segundo recuerdo:** pareja tomada de las manos  
   Fuente: https://unsplash.com/photos/man-and-woman-taking-picture-while-holding-their-hands-ab7Hl_bLw28

4. **Futuro:** pareja caminando hacia el mar al atardecer  
   Fuente: https://unsplash.com/photos/couple-walking-into-the-ocean-at-sunset-yNXWD4BcmPc

### Nombres obligatorios dentro del proyecto

```text
src/assets/images/anniversary/
├── hero-placeholder.jpg
├── memory-one-placeholder.jpg
├── memory-two-placeholder.jpg
└── future-placeholder.jpg
```

### Preparación

- Confirmar la licencia vigente antes de utilizar cada fotografía.
- Conservar en `THIRD_PARTY_NOTICES.md` el autor, la plataforma y la URL original.
- Convertir las imágenes a AVIF y WebP durante la compilación mediante Astro.
- No descargar una resolución mayor a la necesaria.
- Mantener los archivos originales solo durante la preparación; no duplicarlos en `public/`.
- Usar importaciones estáticas desde `src/assets` para que Astro pueda optimizarlas.
- Las fotografías personales futuras deben conservar los mismos nombres o cambiarse únicamente en el archivo de datos.

---

## 7. Identidad visual

### Colores

| Token        |     Valor | Uso                        |
| ------------ | --------: | -------------------------- |
| `ivory`      | `#F7F2EC` | Fondos claros              |
| `wine`       | `#5A1F2D` | Fondo principal y acciones |
| `rose`       | `#B9787E` | Resplandores y detalles    |
| `gold`       | `#C9A36A` | Fechas, progreso y acentos |
| `charcoal`   | `#251C1E` | Texto oscuro               |
| `warm-white` | `#FFFDFC` | Texto sobre imágenes       |

No utilizar negro puro ni blanco puro como colores principales.

### Tipografías

- **Títulos y frases:** Cormorant Garamond, pesos 500 y 600.
- **Textos, controles y etiquetas:** Manrope, pesos 400, 500 y 600.
- Descargar y alojar las fuentes en el proyecto en formato WOFF2.
- No depender de Google Fonts en tiempo de ejecución.
- Usar `font-display: swap`.

### Escala tipográfica

```css
--text-label: clamp(0.72rem, 0.65rem + 0.2vw, 0.88rem);
--text-body: clamp(1rem, 0.94rem + 0.3vw, 1.25rem);
--text-title: clamp(2.6rem, 1.7rem + 4.5vw, 6.5rem);
--text-number: clamp(6rem, 3rem + 15vw, 13rem);
```

### Variables de diseño

```css
:root {
  --color-ivory: #f7f2ec;
  --color-wine: #5a1f2d;
  --color-rose: #b9787e;
  --color-gold: #c9a36a;
  --color-charcoal: #251c1e;
  --color-warm-white: #fffdfc;

  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-body: "Manrope", system-ui, sans-serif;

  --content-max-width: 76rem;
  --scene-padding-inline: clamp(1.25rem, 4vw, 5rem);
  --scene-padding-block: clamp(1.25rem, 4vh, 4rem);
  --radius-card: 1.5rem;
  --transition-scene: 900ms;
}
```

---

## 8. Tecnología obligatoria

- Astro con salida estática.
- TypeScript en modo estricto.
- Tailwind CSS para utilidades y diseño responsivo.
- GSAP instalado desde npm para las líneas de tiempo de animación.
- HTML semántico.
- CSS moderno y variables globales.
- Gestor de paquetes npm.
- GitHub Actions para desplegar en GitHub Pages.

No incorporar React, Vue, Svelte ni otro framework de interfaz. La interactividad requerida puede resolverse con TypeScript y GSAP.

No utilizar una biblioteca de carrusel. La cantidad de escenas y la navegación son suficientemente acotadas para implementar un controlador propio, accesible y probado.

---

## 9. Arquitectura propuesta

```text
anniversary-diego-marily/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── favicon.svg
│   └── social-preview.jpg
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │   ├── cormorant-garamond-500.woff2
│   │   │   ├── cormorant-garamond-600.woff2
│   │   │   ├── manrope-400.woff2
│   │   │   ├── manrope-500.woff2
│   │   │   └── manrope-600.woff2
│   │   └── images/
│   │       └── anniversary/
│   │           ├── hero-placeholder.jpg
│   │           ├── memory-one-placeholder.jpg
│   │           ├── memory-two-placeholder.jpg
│   │           └── future-placeholder.jpg
│   ├── components/
│   │   ├── anniversary/
│   │   │   ├── AnniversaryExperience.astro
│   │   │   ├── Scene.astro
│   │   │   ├── SceneBackground.astro
│   │   │   ├── SceneControls.astro
│   │   │   ├── SceneProgress.astro
│   │   │   ├── ReasonsInteraction.astro
│   │   │   └── MusicControl.astro
│   │   └── ui/
│   │       ├── IconButton.astro
│   │       └── ScreenReaderStatus.astro
│   ├── data/
│   │   └── anniversary.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── scripts/
│   │   ├── anniversary-controller.ts
│   │   ├── gesture-controller.ts
│   │   └── scene-animations.ts
│   ├── styles/
│   │   ├── fonts.css
│   │   ├── global.css
│   │   └── tokens.css
│   └── types/
│       └── anniversary.ts
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── THIRD_PARTY_NOTICES.md
└── README.md
```

Mantener esta estructura proporcional. No crear abstracciones vacías o archivos que solo reexporten una función.

---

## 10. Modelo de datos

Todo el contenido editable debe residir en `src/data/anniversary.ts`. Los componentes no deben contener mensajes personales escritos directamente en el marcado.

```ts
import heroImage from "../assets/images/anniversary/hero-placeholder.jpg";
import memoryOneImage from "../assets/images/anniversary/memory-one-placeholder.jpg";
import memoryTwoImage from "../assets/images/anniversary/memory-two-placeholder.jpg";
import futureImage from "../assets/images/anniversary/future-placeholder.jpg";
import type { AnniversaryContent } from "../types/anniversary";

export const anniversaryContent = {
  couple: {
    firstName: "Diego",
    secondName: "Marily",
    relationshipStart: "[FECHA DE INICIO]",
    anniversaryDate: "[FECHA DEL SEGUNDO ANIVERSARIO]",
  },
  images: {
    hero: heroImage,
    memoryOne: memoryOneImage,
    memoryTwo: memoryTwoImage,
    future: futureImage,
  },
  scenes: [
    // Incorporar aquí el contenido exacto definido en la sección 5.
  ],
  reasons: [
    // Incorporar aquí las 24 razones definidas en la sección 5.
  ],
} satisfies AnniversaryContent;
```

Crear tipos discriminados por clase de escena, por ejemplo:

```ts
type Scene =
  | { type: "cover"; id: string; title: string; imageKey: ImageKey }
  | { type: "editorial"; id: string; title: string; body: string; imageKey?: ImageKey }
  | { type: "memories"; id: string; images: ImageKey[]; captions: string[] }
  | { type: "reasons"; id: string; reasons: string[] }
  | { type: "finale"; id: string; title: string; body: string; signature: string };
```

No utilizar `any`. Validar que los identificadores de escena sean únicos.

---

## 11. Controlador de escenas

Implementar una máquina de estados pequeña y explícita:

```ts
type ExperienceState = {
  currentIndex: number;
  direction: "forward" | "backward";
  isTransitioning: boolean;
};
```

Responsabilidades del controlador:

- Validar límites al avanzar y retroceder.
- Bloquear entradas durante la transición.
- Actualizar `aria-hidden`, `inert` y el indicador de progreso.
- Trasladar el foco solo cuando resulte necesario, sin interrumpir al usuario.
- Emitir un evento personalizado `anniversary:scene-change`.
- Destruir listeners si el componente se desmonta.
- Evitar variables globales mutables.

No modificar el historial del navegador en cada escena. Todas forman parte de una misma experiencia y una misma URL.

---

## 12. Animaciones con GSAP

Utilizar GSAP Core y `Timeline`. No incorporar ScrollTrigger salvo que durante la implementación aparezca una necesidad real; el proyecto no se basa en desplazamiento vertical.

### Transición estándar hacia adelante

1. Desactivar temporalmente los controles.
2. Desvanecer el contenido actual en `250–350 ms`.
3. Desplazarlo entre `24 px` y `40 px` hacia la izquierda.
4. Realizar un fundido cruzado de los fondos.
5. Activar la nueva escena.
6. Introducir etiqueta, título y cuerpo con un escalonamiento discreto.
7. Reactivar controles y actualizar el anuncio accesible.

### Transición hacia atrás

Usar la misma secuencia en dirección inversa, sin simplemente reproducir toda la línea de tiempo hacia atrás si eso produce estados visuales incorrectos.

### Reglas

- Animar principalmente `transform`, `opacity` y filtros moderados.
- Evitar animar propiedades que provoquen recalculado continuo del diseño.
- No usar más de un efecto protagonista por escena.
- No usar rebotes, giros, confeti ni partículas excesivas.
- Limpiar timelines con `kill()` o un contexto GSAP equivalente.
- Utilizar `gsap.matchMedia()` para adaptar animaciones por tamaño y preferencias.
- Si `prefers-reduced-motion: reduce`, sustituir las líneas de tiempo por fundidos breves o cambios inmediatos.

---

## 13. Diseño responsivo

### Base móvil

- Usar `min-height: 100svh` como respaldo y `height: 100dvh` cuando sea compatible.
- Considerar `env(safe-area-inset-top)` y `env(safe-area-inset-bottom)`.
- Mantener los controles fuera de las áreas del sistema.
- Limitar el cuerpo de texto a aproximadamente 35–42 caracteres por línea.
- El contenido debe seguir siendo usable en una pantalla de `320 × 568 px`.
- Si el contenido excede la altura disponible, permitir desplazamiento interno únicamente dentro del bloque de texto.

### Tablet y escritorio

- Limitar el ancho de lectura a `42rem`.
- Usar composición dividida solo cuando haya espacio suficiente.
- No aumentar fotografías por el hecho de disponer de más espacio.
- Mantener los controles en posiciones consistentes.

### Orientación horizontal en celular

- Reducir tamaños y espaciados.
- Permitir desplazamiento interno si la altura es insuficiente.
- No mostrar mensajes solicitando rotar el dispositivo.

---

## 14. Imágenes y rendimiento

- Utilizar `<Image />` o `<Picture />` de Astro con importación estática.
- Definir `width`, `height`, `sizes`, `alt`, `fit` y `position`.
- La primera imagen puede usar prioridad alta; las demás deben cargarse de forma diferida.
- Precargar solamente la imagen de portada y, después de iniciar, anticipar la siguiente imagen.
- Evitar `background-image` para imágenes con significado; usar una imagen posicionada con `object-fit: cover` cuando corresponda.
- Definir el punto focal de cada imagen mediante datos, por ejemplo `50% 35%`.
- Objetivo orientativo: cada variante móvil entre 100 y 250 KB cuando la calidad visual lo permita.
- Evitar cambios de diseño durante la carga.

Cada imagen debe admitir esta configuración:

```ts
type ImageConfig = {
  src: ImageMetadata;
  alt: string;
  focalPoint: {
    mobile: string;
    desktop: string;
  };
};
```

---

## 15. Audio opcional

La primera versión puede incluir el componente, pero no necesita incorporar todavía una canción.

Reglas:

- Nunca reproducir audio automáticamente.
- Mostrar un botón «Activar música».
- Indicar visualmente si está reproduciendo o en silencio.
- Recordar el estado durante la sesión.
- Pausar cuando la pestaña deje de estar visible, si esa conducta se considera apropiada.
- El sitio debe conservar toda su calidad emocional sin audio.
- No subir música comercial sin autorización.

---

## 16. Accesibilidad

- Usar un solo `<h1>` en la portada y jerarquía correcta en las escenas.
- Todos los controles deben ser elementos `<button>` reales.
- Incluir textos accesibles para controles que visualmente solo muestran íconos.
- Mantener contraste suficiente sobre las fotografías.
- Aplicar `aria-hidden="true"` e `inert` a escenas inactivas.
- Anunciar de forma no invasiva «Escena 2 de 6: El comienzo» mediante una región `aria-live="polite"`.
- Permitir navegación completa por teclado.
- Mostrar foco visible.
- Respetar `prefers-reduced-motion`.
- No fragmentar texto en caracteres si eso perjudica la lectura con tecnologías de asistencia.
- Probar zoom del navegador al 200 %.

---

## 17. SEO y privacidad básica

Aunque sea una página personal, incorporar metadatos correctos:

```text
title: Diego & Marily — Nuestro segundo capítulo
description: Una celebración de dos años compartiendo una historia juntos.
robots: noindex, nofollow
```

Además:

- Añadir `noindex, nofollow` porque no se busca posicionamiento público.
- No incluir apellidos, direcciones ni ubicaciones privadas.
- No agregar analítica ni rastreadores en la primera versión.
- La etiqueta `noindex` no convierte la página en privada: cualquier persona con el enlace podrá verla.
- Si más adelante se requiere privacidad real, trasladar la publicación a una plataforma con autenticación o protección de acceso.

---

## 18. GitHub Pages

Configurar Astro para un sitio de proyecto:

```js
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://USUARIO.github.io",
  base: "/NOMBRE-DEL-REPOSITORIO",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
```

Sustituir los valores en mayúsculas. No codificar manualmente el prefijo base en enlaces o recursos; utilizar las utilidades de Astro o imports para que funcionen tanto en desarrollo como en GitHub Pages.

Crear `.github/workflows/deploy.yml` usando la acción oficial de Astro para GitHub Pages.

El `README.md` debe documentar:

- Requisitos de Node según la versión estable de Astro elegida.
- Instalación con `npm ci`.
- Desarrollo con `npm run dev`.
- Comprobación con `npm run check`.
- Construcción con `npm run build`.
- Vista previa con `npm run preview`.
- Lugar exacto para cambiar textos, fechas e imágenes.
- Procedimiento de publicación.

---

## 19. Calidad de código

- Activar el modo estricto de TypeScript.
- Utilizar nombres descriptivos y consistentes.
- Mantener el contenido separado de la presentación.
- Evitar componentes excesivamente grandes.
- Evitar dependencias que resuelvan problemas triviales.
- No duplicar la lógica de entrada y salida de escenas.
- Extraer constantes de duración y easing.
- Agregar comentarios solamente donde expliquen una decisión, no lo evidente.
- Mantener `package-lock.json` en el repositorio.
- Configurar Prettier y ESLint compatibles con Astro.
- No almacenar secretos ni tokens en el repositorio.
- No utilizar rutas absolutas dependientes del equipo del desarrollador.

### Scripts mínimos

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "check": "astro check",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

---

## 20. Pruebas requeridas

### Funcionales

- Avanzar y retroceder por las seis escenas.
- Confirmar el bloqueo de navegación durante transiciones.
- Probar primer y último límite.
- Probar las 24 razones y su reinicio circular.
- Probar gestos sin interferir con botones.
- Probar teclado.
- Probar «Volver al inicio».

### Responsivas

- `320 × 568`.
- `375 × 667`.
- `390 × 844`.
- `768 × 1024`.
- `1366 × 768`.
- `1920 × 1080`.

### Navegadores

- Chrome/Edge actual.
- Firefox actual.
- Safari actual, incluyendo Safari móvil cuando sea posible.

### Rendimiento

- Ejecutar Lighthouse sobre la compilación de producción.
- Evitar errores en consola.
- Verificar que las imágenes no bloqueen la interacción.
- Comprobar que el sitio funcione desde la ruta base de GitHub Pages.

### Accesibilidad

- Navegar sin mouse.
- Revisar foco visible.
- Probar `prefers-reduced-motion`.
- Confirmar que solo la escena activa pueda recibir foco.
- Revisar textos alternativos al reemplazar las fotografías temporales.

---

## 21. Criterios de aceptación

El proyecto se considerará terminado cuando:

1. Se muestren seis escenas dentro de una única pantalla completa.
2. No exista desplazamiento vertical tradicional entre escenas.
3. Se utilicen como máximo cuatro imágenes descargadas y optimizadas.
4. Los nombres Diego y Marily aparezcan correctamente.
5. Las fechas pendientes puedan editarse desde `anniversary.ts`.
6. Las 24 razones funcionen sin recargar la página.
7. Las animaciones sean fluidas y se reduzcan según la preferencia del usuario.
8. Todos los controles funcionen con teclado y tacto.
9. El contenido sea legible desde 320 px de ancho.
10. `npm run check` y `npm run build` terminen sin errores.
11. La aplicación funcione bajo la subruta configurada de GitHub Pages.
12. El README explique cómo reemplazar fotografías y contenido.
13. No haya dependencias, archivos o componentes sin uso.
14. No se incluyan datos personales no definidos en este documento.

---

## 22. Datos pendientes antes de la versión final

Reemplazar estos valores antes de publicar la versión definitiva:

- `[FECHA DE INICIO DE LA RELACIÓN]`
- `[FECHA DEL SEGUNDO ANIVERSARIO]`
- Las cuatro fotografías temporales por fotografías personales.
- Textos alternativos que describan las fotografías reales.
- Punto focal móvil y de escritorio de cada fotografía.
- Canción, únicamente si Diego decide incorporarla y cuenta con permiso para usarla.
- Usuario de GitHub y nombre definitivo del repositorio.

---

## 23. Instrucción final para el agente desarrollador

Construye la experiencia exactamente con la arquitectura, el contenido y los criterios de este documento. Prioriza la emoción, la legibilidad y la fluidez sobre la cantidad de efectos. Antes de añadir una dependencia, comprueba si puede resolverse claramente con Astro, TypeScript, Tailwind CSS o GSAP Core.

No inventes fechas, lugares, anécdotas ni planes personales de Diego y Marily. Mantén los campos pendientes claramente identificados. Descarga las fotografías temporales seleccionadas, registra sus créditos y deja preparado el reemplazo por imágenes personales desde el archivo central de datos.
