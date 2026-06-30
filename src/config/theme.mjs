/* ============================================================
   TEMA DEL SITIO — única fuente de marca (plantilla3 · Cyber-Luxe)
   ------------------------------------------------------------
   Esto es LO ÚNICO que cambias al crear un sitio nuevo:
   colores, tipografías y logo. No toques el markup ni global.css.
   ============================================================ */

// --- Colores (hex). Las claves son los nombres de clase Tailwind:
//     bg-bg-void, text-accent, text-text-secondary, from-accent, etc.
// Paleta VEXIAMAX (Manual de identidad 5.1): azules + violetas, estética
// futurista con degradados. La marca no usa rosa → el stop "pink" del
// degradado se reemplaza por azul brillante (azul→violeta→azul).
// El verde #30870B (Pantone 2424C) queda como color complementario/éxito
// disponible, pero NO se cablea en la UI principal para mantener coherencia.
export const colors = {
  'bg-void':        '#03061A',   // negro-azulado (tinte navy)
  'bg-depth':       '#081046',   // hacia #0A2A88
  accent:           '#1E6BFF',   // azul brillante · Pantone 2727C (interactivo/glow)
  'accent-2':       '#8B5CF6',   // tinte legible de #3F0DA0 sobre fondo oscuro
  'text-primary':   '#EAF0FF',
  'text-secondary': '#8A97C2',
  'text-dim':       '#455080',
  'grad-indigo':    '#0A2A88',   // azul profundo · Pantone 287C
  'grad-violet':    '#3F0DA0',   // violeta · Pantone 2091C
  'grad-pink':      '#1E6BFF',   // sin rosa en la marca → azul brillante
};

// --- Tipografías. `body`/`display` = Montserrat (secundaria del manual, para
//     textos y titulares). `brand` = Robexs (corporativa), reservada al logo y
//     a los titulares hero (clase `font-brand`). Robexs se auto-hospeda vía
//     @font-face en global.css; Montserrat viene de Google Fonts.
export const fonts = {
  display:    'Montserrat, sans-serif',   // titulares (h1–h5)
  body:       'Montserrat, sans-serif',   // cuerpo
  brand:      'Robexs, sans-serif',       // corporativa · solo hero/logo
  googleHref: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap',
};

// --- Logo. Si `image` tiene una ruta (archivo en /public), se usa la imagen.
//     Si está vacío, se usa el icono de Material Symbols `icon`.
export const logo = {
  image: '/imagotipo.png',                    // imagotipo blanco (legible sobre bg-void)
  icon:  'bolt',                              // fallback Material Symbols
  alt:   'VEXIAMAX — IA & Marketing Solutions',
};
