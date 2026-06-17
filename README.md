# FJM Arquitectos - Sitio Web Portafolio

## Cómo editar

1. Abre la carpeta en Visual Studio Code.
2. Abre `index.html`.
3. Cambia los textos directamente dentro del HTML.
4. Para cambiar colores, abre `styles.css` y modifica estas variables:

```css
--dark: #111111;
--cream: #f5f1ea;
--accent: #b28b5e;
```

5. Para cambiar la foto principal:
   - Entra a la carpeta `images`.
   - Reemplaza `hero.jpg` con una foto real.
   - Usa exactamente el mismo nombre: `hero.jpg`.

6. Para agregar un proyecto:
   Copia y pega este bloque dentro de `project-grid`:

```html
<article class="project-card" data-category="comercial">
  <div class="project-image">Foto del proyecto</div>
  <h3>Nombre del Proyecto</h3>
  <p>Ciudad · descripción corta</p>
</article>
```

Categorías disponibles:
- comercial
- residencial
- industrial
- sps

7. Para ver el sitio:
   - Haz doble click en `index.html`, o
   - Usa Live Server en Visual Studio Code.
