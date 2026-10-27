# Rumbo a la Armada — Simulador de admisión

PWA bilingüe (español / inglés) para prepararse al proceso de incorporación a la Armada de Colombia.

**Desarrollada por Vibras Positivas HM — Derechos de Autor Reservados**
Caucasia, Antioquia · vibraspositivashm.com · WhatsApp 311 770 0431

## Qué trae

- **Simulacro completo**: 50 preguntas con reloj de 60 minutos, ajustado a la ruta escogida (Cadete Naval, Cadete de Infantería de Marina, Grumete / Suboficial Naval, Suboficial de Infantería de Marina). Calificación por área y revisión de respuestas.
- **Pruebas psicotécnicas**:
  - Batería completa: 42 preguntas en 35 minutos.
  - Aptitudes por separado: verbal, numérica, abstracta (series de figuras generadas), espacial, lógica y atención (conteo y comparación de códigos).
  - Memoria de trabajo: cifras que crecen un dígito por acierto.
  - Cuestionario de personalidad: 24 afirmaciones con escala de acuerdo, perfil en 5 rasgos e indicador de sinceridad.
- **Práctica por área**: sin reloj, con explicación inmediata.
- **¿Cumplo requisitos?**: edad al ingreso, puntajes ICFES de referencia, bachiller, natación y tatuajes. Los datos no salen del celular.
- **Bitácora de prueba física**: marcas de flexiones, abdominales, trote y natación con metas sugeridas.
- **Simulador de entrevista**: 10 preguntas típicas con reloj de 90 segundos y consejos.
- **Mi progreso**: historial con hora de Colombia, gráfica y resultado por área.

## Cada examen cambia

- El banco tiene 166 preguntas. La app recuerda en el celular cuáles ya viste y te da primero las que no has visto; cuando agotas un área, vuelve a empezar.
- Matemáticas, ciencias, razonamiento lógico, numérico, abstracto, espacial y atención tienen generadores: en cada intento la mitad de esas preguntas se crea nueva, con otros números, series, figuras y códigos.
- En pruebas consecutivas del simulacro de 50 preguntas se repiten 1 o 2 como máximo.

## Videos reales

Sección "Conoce la vida naval" con videos de la Armada de Colombia en YouTube: ingreso a la Escuela Naval, cadete por una semana, formación en Cartagena, juramento de bandera, el ARC Gloria y la reseña histórica de la Escuela. Se cargan solo al tocarlos para no gastar datos.

## Archivos

| Archivo | Para qué |
|---|---|
| index.html | La app completa |
| preguntas.js | Banco de preguntas, generadores y cuestionario de personalidad |
| manifest.json | Instalación como app |
| sw.js | Funciona sin internet |
| icon-192.png, icon-512.png | Íconos de la app |
| og.png | Imagen al compartir por WhatsApp (1200×630) |

## Publicar

1. Repo: `haroldco45/simulador-armada`.
2. En GitHub: Settings → Pages → rama `main`, carpeta raíz.
3. Conectar el repo en Netlify con el nombre de sitio `simulador-armada` → `https://simulador-armada.netlify.app`.
   Si Netlify da otro nombre, cambiar esa URL en las etiquetas `og:` y `twitter:` y en `canonical` de `index.html`.

## Fuentes y aviso

Requisitos tomados de publicaciones de la Armada de Colombia y del Comando General de las Fuerzas Militares. Los puntajes ICFES y las edades cambian según la convocatoria: la app lo advierte y remite a https://incorporaciones.armada.mil.co/.
Fotos: Armada de Colombia / Comando General FF.MM. (cgfm.mil.co).

Herramienta independiente de práctica. No es un producto oficial ni está avalada por la Armada de Colombia. Las preguntas son de práctica tipo examen y no corresponden a pruebas oficiales.
