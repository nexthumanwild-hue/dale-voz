# Information Architecture: Dale Voz

## Mapa

- Landing `/`
  - Beneficios `#por-que`
  - Cómo funciona `#como-funciona`
  - Descargas `#descargar`
  - FAQ `#preguntas`
- Aplicación de escritorio
  - General
  - Modelos
  - Avanzado
  - Historial
  - Post proceso
  - Acerca de

## Navegación

- **Landing:** marca, enlaces ancla y CTA “Descargar gratis”. En móvil los enlaces secundarios desaparecen, no el CTA.
- **App:** sidebar persistente con siete destinos como máximo y estado “Local / listo”.
- **Utilidad:** versión, modelo activo y estado de actualizaciones viven en el pie.

## Jerarquía de contenido

### Landing

1. Promesa: dictar prompts sin romper el flow.
2. Demo de app y acción de descarga.
3. Prueba funcional: local, cualquier app, código y español real.
4. Tres pasos de uso.
5. Descargas por plataforma.
6. FAQ, origen open source y atribución.

### App

1. Sección activa y ajustes más frecuentes.
2. Navegación de herramientas.
3. Modelo y estado técnico.

## Flujos

### Primera vez

1. Abre Dale Voz.
2. Concede micrófono/accesibilidad.
3. Elige y descarga un modelo local.
4. Mantiene el atajo, habla y suelta.
5. El texto aparece en la aplicación activa.

### Descarga web

1. Llega a la promesa.
2. Ve la demo y confirma compatibilidad.
3. Pulsa descargar.
4. Si el release propio aún no existe, se abre el release upstream claramente atribuido.

## Convenciones de nombre

| Concepto | Etiqueta |
| --- | --- |
| Producto | Dale Voz |
| Acción principal | Hablar |
| Voz a texto | Transcribir |
| Procesamiento posterior | Pulir con IA |
| Privacidad | 100% local |
| Activación | Atajo |

## Reutilización

| Componente | Uso | Variación |
| --- | --- | --- |
| Marca cursor-onda | App, landing, iconos | Isotipo o wordmark |
| Pill de estado | Sidebar, landing, overlay | Local, grabando, procesando |
| Tarjeta terminal | Hero, pasos, descargas | Contenido y acento |

## Crecimiento

La landing puede sumar changelog, guías e integraciones sin alterar el flujo principal. Las descargas se alimentan mediante enlaces centralizados en `landing/config.js`.

## URL

- Landing de una sola página con anclas.
- Releases configurables fuera del HTML.
- Sin rutas dinámicas en esta primera entrega.

