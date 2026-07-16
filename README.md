<p align="center">
  <img src="brand/logo-horizontal.svg" width="420" alt="Dale Voz" />
</p>

<h1 align="center">Habla el prompt. Que corra el código.</h1>

<p align="center">
  Dictado local para gente que programa con IA.<br />
  Mantén un atajo, habla y suelta: el texto aparece donde ya estás trabajando.
</p>

<p align="center">
  <a href="landing/">Landing</a> ·
  <a href="https://landing-mu-one-53.vercel.app">Ver sitio en vivo</a> ·
  <a href="#desarrollo-local">Desarrollo</a> ·
  <a href="#crear-un-release">Crear un release</a> ·
  <a href="BRAND.md">Marca</a>
</p>

## ¿Qué es Dale Voz?

Dale Voz convierte tu voz en texto dentro de Cursor, Claude, la terminal, VS Code, el navegador o cualquier aplicación con un campo editable. La transcripción corre en tu propia computadora: no requiere cuenta, no sube audios y no cobra por minuto.

Este proyecto es un fork independiente de [Handy](https://github.com/cjpais/Handy), creado por CJ Pais y su comunidad. Conserva la licencia MIT y reemplaza por completo la marca original para respetar sus lineamientos de redistribución.

## Lo esencial

- **100% local:** tu audio y tus transcripciones se quedan en tu equipo.
- **En cualquier app:** usa el campo que ya tienes activo; no cambia tu flujo.
- **Multiplataforma:** macOS, Windows y Linux.
- **Modelos abiertos:** Whisper, Parakeet y otros motores descargables.
- **Atajos configurables:** mantén para hablar o activa/desactiva con una tecla.
- **Post proceso opcional:** pule puntuación o formato con el proveedor que elijas.
- **Open source:** sin cuenta, mensualidad ni límite de minutos.

## Cómo se usa

1. Instala y abre Dale Voz.
2. Da acceso al micrófono y, en macOS, a Accesibilidad.
3. Descarga un modelo local desde el onboarding.
4. Mantén el atajo configurado, dicta y suelta.
5. El texto aparece en la app que tenías activa.

## Estructura del relanzamiento

```text
.
├── brand/                    # Isotipo, wordmark e icono maestro
├── landing/                  # Web estática lista para Vercel
├── src/                      # Interfaz React de la app
├── src-tauri/                # Aplicación de escritorio y motor Rust
├── .design/dale-voz-relaunch # Brief, IA y checklist de diseño
├── BRAND.md                  # Voz, personalidad y reglas de identidad
└── README.md
```

## Desarrollo local

### Requisitos

- [Bun](https://bun.sh/)
- [Rust estable](https://rustup.rs/)
- Dependencias de sistema de Tauri para tu plataforma

### App de escritorio

```bash
bun install
bun run tauri dev
```

Solo frontend:

```bash
bun run dev
```

Build de verificación:

```bash
bun run build
bun run lint
```

### Landing

```bash
cd landing
bun install
bun run dev
```

La landing también puede servirse como HTML estático. Los destinos de descarga están centralizados en [`landing/config.js`](landing/config.js).

## Descargas

La landing apunta directamente a los artefactos publicados en los releases de Dale Voz. Los destinos se administran en `landing/config.js`:

```js
export const downloads = {
  mac: "https://github.com/nexthumanwild-hue/dale-voz/releases/latest/download/Dale-Voz-macOS.zip",
  windows: "https://github.com/nexthumanwild-hue/dale-voz/releases/latest",
  linux: "https://github.com/nexthumanwild-hue/dale-voz/releases/latest",
  source: "https://github.com/nexthumanwild-hue/dale-voz",
};
```

El ZIP de macOS contiene instaladores separados para Apple Silicon e Intel.

## Crear un release

El workflow manual `.github/workflows/release.yml` compila para:

- macOS Apple Silicon e Intel

Pasos:

1. Configura firma/notarización si vas a distribuir builds firmados.
2. Ejecuta el workflow **Release** desde GitHub Actions.
3. Revisa los artefactos, crea el ZIP conjunto de macOS y publica el draft.

> La configuración actual genera builds sin la firma privada del proyecto original. Para distribución pública, firma y notariza con credenciales propias.

## Arquitectura

Dale Voz usa Tauri 2:

- **React + TypeScript:** onboarding, ajustes, modelos, historial y overlay.
- **Rust:** audio, atajos globales, inferencia local, portapapeles y persistencia.
- **Whisper/Parakeet y familia:** modelos locales descargables.
- **Zustand + comandos Tauri:** estado reactivo entre UI y backend.

Flujo principal:

```text
Atajo → micrófono → detección de voz → modelo local → texto → campo activo
```

## Privacidad

La transcripción local no requiere enviar el audio a servidores de Dale Voz. Si activas el post proceso con un proveedor externo, ese texto sí queda sujeto a la política del proveedor que configures. La interfaz lo trata como una opción separada y desactivada por defecto.

## Créditos

Dale Voz existe gracias a:

- [Handy](https://github.com/cjpais/Handy), su creador CJ Pais y sus contribuidores.
- [transcribe.cpp](https://github.com/ggml-org/whisper.cpp) y el ecosistema ggml.
- Los proyectos de modelos abiertos integrados en Handy.

No existe afiliación, respaldo ni relación comercial con Handy. “Dale Voz” usa identidad propia y se presenta como fork independiente.

## Licencia

El código se distribuye bajo [licencia MIT](LICENSE). La identidad de Dale Voz incluida en `brand/` se aporta como parte de este relanzamiento; verifica nombre y registro de marca antes de un lanzamiento comercial definitivo.
