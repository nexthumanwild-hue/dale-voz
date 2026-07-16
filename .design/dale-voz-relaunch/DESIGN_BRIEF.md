# Design Brief: Relanzamiento Dale Voz

## Problema

Quien programa con IA piensa más rápido de lo que escribe. Sus mejores prompts nacen hablando, pero las herramientas de dictado se sienten genéricas, corporativas o desconectadas del flujo real entre Cursor, Claude, el navegador y la terminal.

## Solución

Dale Voz convierte cualquier campo de texto en una entrada por voz privada y local. Se activa con un atajo, escucha, transcribe y pega sin sacar al usuario de su contexto. La experiencia habla como un dev latino: directa, viva y sin solemnidad.

## Principios de experiencia

1. **Flujo sobre configuración** — la acción principal siempre es obvia; la complejidad vive un nivel más abajo.
2. **Local sobre misterioso** — se muestra con claridad que la voz se procesa en el equipo y no viaja a la nube.
3. **Latino sobre localizado** — no es una traducción literal: usa ritmo, humor breve y vocabulario natural para la comunidad.

## Dirección estética

- **Filosofía:** Terminal tropical: precisión de herramienta dev con color, ritmo y calidez latinoamericana.
- **Tono:** cercano, rápido, seguro, con picardía contenida.
- **Referencias:** editores de código, overlays de comandos, afiches tipográficos latinoamericanos, señalética de talleres.
- **Anti-referencias:** SaaS corporativo azul, gradientes morados “IA”, ilustraciones 3D genéricas, exceso de glassmorphism.

## Patrones existentes

- **Stack:** Tauri 2, React, TypeScript, Tailwind 4 y CSS custom properties.
- **UI:** sidebar fija, grupos de ajustes, onboarding de permisos/modelo y overlay de grabación.
- **Componentes:** se reutilizan todos los controles funcionales y se retematizan con tokens nuevos.
- **Restricción clave:** el procesamiento local, la descarga de modelos y los flujos multiplataforma no se alteran.

## Inventario de componentes

| Componente | Estado | Nota |
| --- | --- | --- |
| Identidad Dale Voz | Nuevo | Cursor + onda, wordmark y variantes |
| Sidebar | Modificar | Navegación más clara, estado local visible |
| Grupos de ajustes | Modificar | Superficies editoriales y contraste reforzado |
| Onboarding | Modificar | Copy español y jerarquía de “listo para hablar” |
| Overlay de grabación | Modificar | Verde en escucha, coral en acción/cancelación |
| Landing | Nuevo | Descarga, demo visual, beneficios, FAQ y atribución |

## Interacciones clave

- El usuario entiende en menos de cinco segundos que debe mantener un atajo, hablar y soltar.
- Los estados grabando, procesando y listo cambian de color y forma sin ambigüedad.
- La landing detecta el sistema operativo para destacar la descarga adecuada y ofrece alternativas visibles.
- Los enlaces de descarga apuntan a releases configurables; mientras no exista un release propio, se ofrece el upstream atribuido.

## Comportamiento responsive

La app conserva su layout de escritorio. La landing usa una columna en móvil, evita esconder descargas tras menús y mantiene la demo legible desde 360 px.

## Accesibilidad

- Contraste AA en texto y controles.
- Foco visible con anillo verde eléctrico.
- Navegación completa por teclado.
- Movimiento reducido mediante `prefers-reduced-motion`.
- Estados no dependientes solo del color.

## Fuera de alcance

- Entrenar modelos propios de voz.
- Crear una infraestructura de releases firmados o una cuenta de GitHub nueva.
- Cambiar el motor de transcripción heredado de Handy.

