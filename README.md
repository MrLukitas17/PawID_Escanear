# 🐾 PawID — Sitio público

Vista Pública de Emergencia del proyecto PawID (HTML, CSS y JavaScript), desplegada en **Vercel**: https://pawid-qr.vercel.app

| Página | Uso |
|---|---|
| `index.html` | **Vista Pública de Emergencia.** Se abre al escanear el QR de una mascota (`?id=<UUID>`). Consulta en Supabase la función `ficha_publica`, que entrega solo los datos públicos: datos de la mascota, foto y contacto del dueño. Permite descargar la ficha en PDF |
| `config.js` | URL y clave pública (`anon`) de Supabase, y dirección de Vercel |
| `vercel.json` | Cabeceras de seguridad (HSTS, nosniff, bloqueo de iframes) |

## Despliegue

1. En [vercel.com](https://vercel.com), **Add New → Project** e importar este repositorio. No requiere configuración (sitio estático).
2. Cada *push* a `main` publica la versión nueva automáticamente.
3. `VERCEL_URL` (`config.js`) tiene la dirección de Vercel: los QR antiguos que apuntan a GitHub Pages redirigen ahí.

La clave `anon` de Supabase es pública por diseño: el acceso a los datos lo controlan las políticas RLS y las funciones del backend.
