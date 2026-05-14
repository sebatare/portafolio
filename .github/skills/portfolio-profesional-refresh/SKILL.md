---
name: portfolio-profesional-refresh
description: "Rediseña y actualiza un portafolio profesional fullstack en React/Vite con foco en presentación personal, objetivos, habilidades, retos y listado de proyectos con repositorios GitHub. Usar cuando se quiera pasar de una landing básica a una versión profesional, simple y sin sobrecargar librerías."
argument-hint: "Nombre, perfil profesional, contexto personal (pais/ubicacion), tono deseado y nivel de cambios UI"
user-invocable: true
disable-model-invocation: false
---

# Portfolio Profesional Refresh

## Cuando usar
- Mejorar un portafolio personal para postulaciones laborales o networking.
- Mantener stack simple (React + TypeScript + CSS/Tailwind existente) sin agregar muchas dependencias.
- Incorporar narrativa profesional clara: presentacion, objetivos, habilidades, retos y proyectos.

## Resultado esperado
- Frontend con apariencia mas profesional y consistente en desktop y mobile.
- Seccion de presentacion con identidad personal y contexto actual.
- Listado de proyectos claro, con enlaces funcionales a demo y repositorio.
- Integracion frontend-backend verificada en ejecucion local.

## Flujo de trabajo
1. Levantar baseline antes de tocar codigo.
2. Registrar estado actual: errores visibles, puertos, consumo de API, textos y estilo.
3. Definir narrativa profesional del perfil.
4. Diseñar estructura de contenido (hero/presentacion, habilidades, objetivos, retos, proyectos, contacto).
5. Aplicar rediseño visual manteniendo simplicidad tecnica.
6. Validar datos y enlaces de proyectos.
7. Probar responsive y accesibilidad basica.
8. Ejecutar build/lint y documentar cambios.

## Procedimiento detallado
### 1) Baseline tecnico
- Instalar dependencias de frontend y backend.
- Ejecutar ambos servicios en modo desarrollo.
- Confirmar URL de frontend y puerto real de backend.
- Verificar que `VITE_API_URL` apunte al backend correcto.

### 2) Diagnostico inicial
- Capturar problemas actuales: errores de fetch, textos con faltas, links vacios, inconsistencia visual.
- Identificar restricciones del proyecto:
  - Evitar agregar muchas librerias nuevas.
  - Preservar estructura existente cuando sea razonable.

### 3) Narrativa profesional
- Redactar en primera persona:
  - Nombre y rol (desarrollador fullstack + ingeniero informatico).
  - Origen/pais y contexto actual (por ejemplo, working holiday en Alemania).
  - Idiomas (por ejemplo, espanol e ingles).
  - Objetivo profesional de corto/mediano plazo.
- Definir 4-8 habilidades clave con enfoque practico.
- Incluir 2-4 retos tecnicos o personales que muestren crecimiento.

### 4) Arquitectura de contenido
- Secciones minimas recomendadas:
  - Hero profesional.
  - Sobre mi / objetivo.
  - Habilidades.
  - Retos y aprendizaje.
  - Proyectos destacados con links.
  - Footer/contacto.
- Priorizar legibilidad y jerarquia visual.

### 5) Ejecucion UI (sin sobreingenieria)
- Reutilizar componentes existentes y refactorizar por bloques.
- Definir variables de estilo (colores, espacios, tipografia).
- Mejorar contraste, espaciado y estados de hover/focus.
- Agregar micro-animaciones solo si aportan claridad.

### 6) Validacion de proyectos
- Confirmar que cada proyecto tenga:
  - Nombre.
  - Descripcion breve y clara.
  - Tecnologias relevantes.
  - Enlace a repositorio GitHub valido.
  - Enlace a demo (si existe).
- Evitar mostrar URLs vacias o `#` cuando falten datos.

### 7) Decision points
- Si falla fetch de proyectos:
  - Revisar backend encendido.
  - Revisar puerto/API URL en variables de entorno.
  - Mostrar mensaje de error claro en UI.
- Si faltan datos de proyecto:
  - Renderizar placeholders legibles (ej: "Repositorio no disponible").
- Si el rediseño agrega complejidad innecesaria:
  - Volver a una version mas simple, priorizando contenido y claridad.

### 8) Criterios de calidad (Definition of Done)
- Frontend y backend ejecutan sin errores bloqueantes.
- No hay errores de fetch por configuracion incorrecta de puertos.
- Presentacion profesional coherente y sin faltas evidentes.
- Proyectos y enlaces funcionales.
- Vista usable en mobile y desktop.
- Build de frontend y backend completan correctamente.

## Checklist rapido
- [ ] Proyecto corre en local antes y despues de cambios.
- [ ] Narrativa profesional actualizada y autentica.
- [ ] Secciones principales implementadas.
- [ ] Enlaces GitHub verificados.
- [ ] Responsive validado.
- [ ] Build/lint ejecutados.

## Prompt de ejemplo
- "Usa /portfolio-profesional-refresh para transformar mi portafolio con enfoque recruiter-friendly, manteniendo stack simple y destacando mis proyectos de backend y frontend."
- "Aplica /portfolio-profesional-refresh con tono sobrio, seccion de retos y habilidades medibles, y revisa que ningun link quede roto."
