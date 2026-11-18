# 🐾 PawID — Sitio público

Páginas estáticas (HTML, CSS y JavaScript) del proyecto PawID, desplegadas en **Vercel**.

| Página | Uso |
|---|---|
| `index.html` | **Vista Pública de Emergencia.** Se abre al escanear el QR de una mascota (`?id=<UUID>`). Consulta en Supabase la función `ficha_publica`, que entrega solo los datos públicos: datos de la mascota, foto y contacto del dueño. Permite descargar la ficha en PDF |
| `confirmado.html` | Confirma la cuenta desde el enlace del correo de registro |
| `restablecer.html` | Permite crear una contraseña nueva desde el enlace del correo de recuperación |
| `config.js` | URL y clave pública (`anon`) de Supabase, y dirección de Vercel |
| `vercel.json` | Cabeceras de seguridad (HSTS, nosniff, bloqueo de iframes) |

## Despliegue

1. En [vercel.com](https://vercel.com), **Add New → Project** e importar este repositorio. No requiere configuración (sitio estático).
2. Cada *push* a `main` publica la versión nueva automáticamente.
3. Copiar la dirección entregada por Vercel en `VERCEL_URL` (`config.js`). Desde ese momento, los QR antiguos que apuntan a GitHub Pages redirigen a Vercel.

La clave `anon` de Supabase es pública por diseño: el acceso a los datos lo controlan las políticas RLS y las funciones del backend.
