// Configuración pública de la Vista Pública de Emergencia de PawID.
// La clave anon de Supabase es pública por diseño: lo que se puede leer o
// modificar lo controlan las políticas RLS y las funciones del backend.
window.PAWID = {
    SUPABASE_URL: 'https://ujsokaxksqwqojvctvtx.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqc29rYXhrc3F3cW9qdmN0dnR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5NDczMjYsImV4cCI6MjA5NjUyMzMyNn0.-Z2vF2M6KuBgv0xikU603xgJV2SegB3P0a8CNlTL9IM',
    // Dirección definitiva del sitio en Vercel (sin "/" al final). Mientras
    // esté vacía, GitHub Pages no redirige.
    VERCEL_URL: 'https://pawid-qr.vercel.app'
};

// Si la página se abre desde GitHub Pages (QR antiguos), se redirige a
// Vercel conservando los parámetros del QR.
(function () {
    var destino = window.PAWID.VERCEL_URL;
    if (destino && /github\.io$/i.test(location.hostname)) {
        var ruta = location.pathname.replace(/^\/PawID_Escanear/i, '') || '/';
        location.replace(destino + ruta + location.search + location.hash);
    }
})();
