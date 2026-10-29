# Diego & Marily — Nuestro segundo capítulo

Experiencia web narrativa para el segundo aniversario de Diego y Marily. Está construida con Astro, TypeScript, Tailwind CSS y GSAP; funciona como sitio estático y no utiliza frameworks de interfaz ni servicios externos en tiempo de ejecución.

## Requisitos

- Node.js 24 o posterior.
- npm 11 o posterior.

## Desarrollo local

```bash
npm ci
npm run dev
```

Otros comandos útiles:

```bash
npm run check        # valida Astro y TypeScript
npm run build        # valida y genera dist/
npm run preview      # sirve la compilación de producción
npm run format       # aplica Prettier
npm run format:check # comprueba el formato
```

## Cambiar textos, fechas e imágenes

Todo el contenido editable está en [`src/data/anniversary.ts`](src/data/anniversary.ts):

- Sustituye `[FECHA DE INICIO DE LA RELACIÓN]` y `[FECHA DEL SEGUNDO ANIVERSARIO]`.
- Edita títulos, mensajes y las 24 razones en el mismo archivo.
- Reemplaza las fotografías en `src/assets/images/anniversary/` conservando sus nombres, o cambia las importaciones al principio del archivo de datos.
- Actualiza `alt` y `focalPoint.mobile` / `focalPoint.desktop` para describir y encuadrar las fotografías reales.

Astro genera variantes AVIF y WebP durante la compilación. No dupliques las imágenes en `public/`.

## Publicación en GitHub Pages

1. Crea un repositorio y sube el proyecto a la rama `main`.
2. En **Settings → Pages**, elige **GitHub Actions** como origen.
3. Haz `push` a `main` o ejecuta manualmente el workflow “Deploy to GitHub Pages”.

`astro.config.mjs` toma automáticamente el usuario y el nombre del repositorio desde las variables de GitHub Actions, de modo que los recursos funcionan bajo la subruta `/<repositorio>/`. En local usa `/`.

## Accesibilidad y navegación

- Botones Anterior/Continuar y marcadores de progreso.
- Flechas izquierda/derecha del teclado.
- Gestos horizontales táctiles.
- Región de estado accesible, foco visible, escenas inactivas con `inert` y soporte para `prefers-reduced-motion`.

El sitio incluye `noindex, nofollow`, pero esto no lo convierte en privado: cualquier persona con la URL podrá acceder a él.
