# Frontend Design Brief

Este documento describe el estado actual del frontend de mi portafolio profesional, para que puedas entregárselo a un diseñador/a, IA o colega y recibir propuestas de rediseño o mejoras.

---

## 1. Stack y Tecnologías
- **Framework:** React 18 + Vite
- **Lenguaje:** TypeScript
- **Estilos:** TailwindCSS (100% utility-first, sin CSS custom)
- **Internacionalización:** Español, Inglés, Alemán (cambio instantáneo)
- **Estructura:**
  - `App.tsx`: Layout principal, cambio de idioma, header, main, footer
  - `components/Presentacion.tsx`: Presentación personal, objetivos, skills, reto
  - `components/ListaProyectos.tsx`: Lista de proyectos (cards)
  - `components/Footer.tsx`: Footer con contacto
  - `content/presentationContent.js`: Textos de presentación y skills

## 2. Paleta y Estética Actual
- **Fondo:** Degradado pastel (celeste, azul, lila)
- **Tarjetas:** Blancas translúcidas (`bg-white/80`), bordes y acentos celeste/lila
- **Tipografía:** Sans-serif, colores suaves (`text-cyan-600`, `text-purple-600`, etc.)
- **Botones:** Redondeados, suaves, con hover en celeste
- **Diseño:** Minimalista, amigable, sin contraste oscuro, sin imágenes
- **Animaciones:** Hover en tarjetas y botones (elevación/sombra)
- **Layout:**
  - Presentación: 2 tarjetas apiladas (presentación y skills/reto)
  - Proyectos: Cards en grid responsive (1-2 columnas)

## 3. Contenido y Funcionalidad
- **Presentación:** Nombre, descripción profesional, objetivos, skills (chips), reto personal
- **Proyectos:** Cards con nombre, descripción, tecnologías, links a demo y repo
- **Footer:** Contacto (email, LinkedIn, GitHub)
- **Multilenguaje:** Todo el contenido cambia instantáneamente según idioma

## 4. Ejemplo de estructura de una card de proyecto
```jsx
<article className="rounded-2xl bg-white/80 border border-cyan-100 p-6 shadow-md hover:shadow-lg transition">
  <h3 className="text-xl font-extrabold text-cyan-600 mb-2">Nombre Proyecto</h3>
  <p className="mb-2 text-cyan-800">Descripción breve...</p>
  <p className="mb-3 text-xs text-cyan-500">Tecnologías: React, Node, ...</p>
  <div className="flex gap-3">
    <a className="rounded-lg border border-purple-100 bg-purple-50 px-4 py-1 font-medium text-purple-600 hover:bg-purple-200 hover:text-cyan-700 transition" href="#">Demo</a>
    <a className="rounded-lg border border-purple-100 bg-purple-50 px-4 py-1 font-medium text-purple-600 hover:bg-purple-200 hover:text-cyan-700 transition" href="#">Repo</a>
  </div>
</article>
```

## 5. ¿Qué se busca?
- Propuestas de rediseño visual, mejoras de UX/UI, o nuevas paletas modernas
- Puede incluir dark mode, imágenes, iconografía, animaciones, etc.
- Debe ser fácil de implementar en React + Tailwind
- Mantener la estructura modular y multilenguaje

---

**Puedes entregar este archivo a cualquier IA, diseñador/a o colega para recibir feedback o propuestas. Cuando tengas el nuevo diseño, pégalo en este chat y lo implemento.**
