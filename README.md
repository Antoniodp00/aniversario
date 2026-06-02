# Aniversario ♥

Web + app Android personalizada para regalar el 7 de junio de 2026 (un año juntos).

## Estructura

```
Aniversario/
├── web/        ← Web React + Vite + Tailwind + Framer Motion
└── android/    ← App Android (WebView) con Kotlin + XML Views
```

---

## 1) Trabajar en la web

```powershell
cd C:\Dev\02-projects\Aniversario\web
npm run dev
```

Abre http://localhost:5173. Cualquier cambio en archivos se recarga al instante.

### Personalizar el contenido

Todo el contenido editable está en **`web/src/data.js`**:

- `couple`: vuestros nombres y la fecha exacta en que empezasteis.
- `timeline`: lista de momentos clave (fecha, título, texto, emoji).
- `gallery`: las fotos. Por ahora usa placeholders de internet. Para meter tus fotos:
  1. Crea `web/src/assets/photos/` y mete ahí tus imágenes optimizadas
     (compáctalas en https://tinypng.com antes de subirlas).
  2. En `data.js` cambia los imports:
     ```js
     import foto1 from "./assets/photos/foto1.jpg";
     // ...
     export const gallery = [
       { src: foto1, width: 1200, height: 1600, caption: "Nuestra primera cita" },
       // ...
     ];
     ```
  3. Las dimensiones (`width` / `height`) las usa la librería para el layout — ponlas en píxeles reales o en proporción.
- `letter`: el texto de la carta (saludo, párrafos y firma).

### Desplegar en Netlify (gratis, 2 minutos)

1. `npm run build` → genera la carpeta `dist/`.
2. Ve a https://app.netlify.com/drop y **arrastra la carpeta `dist`**.
3. Te dan una URL pública tipo `https://xxxxx.netlify.app`. Esa URL es la que mete la app Android.
4. Si quieres dominio personalizado o renombrar el subdominio, se hace desde el panel de Netlify.

---

## 2) App Android

La carpeta `android/` contiene los archivos clave (MainActivity, layout, manifest, recursos). Para arrancar el proyecto:

1. **Android Studio** → New Project → **Empty Views Activity**
   - Language: **Kotlin**
   - Package: **`com.aniversario.app`**
   - Build configuration: **Kotlin DSL (build.gradle.kts)**
   - Minimum SDK: API 24 (Android 7.0) o superior.
2. Cuando termine de crear el proyecto, **reemplaza** los archivos generados por los de esta carpeta `android/`:
   - `app/src/main/java/com/aniversario/app/MainActivity.kt`
   - `app/src/main/res/layout/activity_main.xml`
   - `app/src/main/AndroidManifest.xml`
   - `app/src/main/res/values/strings.xml`
   - `app/src/main/res/values/colors.xml`
   - `app/src/main/res/values/themes.xml`
3. Abre `strings.xml` y pon en `web_url` la URL pública de Netlify del paso anterior.
4. **Run ▶** en un emulador o tu móvil con depuración USB.

### Generar APK para regalar

`Build → Generate Signed Bundle / APK → APK → Create new keystore (guárdala) → release`.
Saldrá un `.apk` que puedes pasarle por WhatsApp/Telegram. Ella tendrá que activar "Instalar apps de orígenes desconocidos" la primera vez.

> Alternativa más limpia: que abra simplemente el enlace de la web en el móvil. La app es opcional, un detalle extra.

---

## Cómo lo iremos rellenando

1. **Esta semana**: maqueta funciona con placeholders. Decides paleta y tipografía si quieres cambiarlas en `tailwind.config.js`.
2. **Semana 2**: vas escribiendo el contenido real en `data.js` (timeline + carta).
3. **Semana 3**: subes tus fotos optimizadas.
4. **Última semana**: despliegas en Netlify, generas el APK, lo pruebas, y el día 7 le pasas el link y el APK.
