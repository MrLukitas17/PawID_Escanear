// Funciones compartidas por confirmado.html y restablecer.html.
// Los enlaces de los correos de Supabase llegan con ?token_hash=...&type=...
// (ver plantillas de correo en el README).
const PawAuth = {
    headers(token) {
        return {
            'apikey': window.PAWID.SUPABASE_ANON_KEY,
            'Authorization': 'Bearer ' + (token || window.PAWID.SUPABASE_ANON_KEY),
            'Content-Type': 'application/json'
        };
    },

    // Valida el enlace del correo y devuelve la sesión temporal.
    async verificar(type) {
        const params = new URLSearchParams(location.search);
        const tokenHash = params.get('token_hash');
        if (!tokenHash) throw new Error('El enlace no es válido.');
        const resp = await fetch(window.PAWID.SUPABASE_URL + '/auth/v1/verify', {
            method: 'POST',
            headers: this.headers(),
            body: JSON.stringify({ type: type, token_hash: tokenHash })
        });
        const data = await resp.json().catch(() => ({}));
        if (!resp.ok) {
            throw new Error('El enlace expiró o ya fue usado. Solicita uno nuevo desde la app.');
        }
        // Se quita el token de la barra de direcciones.
        history.replaceState(null, '', location.pathname);
        return data;
    },

    async cambiarPassword(accessToken, password) {
        const resp = await fetch(window.PAWID.SUPABASE_URL + '/auth/v1/user', {
            method: 'PUT',
            headers: this.headers(accessToken),
            body: JSON.stringify({ password: password })
        });
        if (!resp.ok) {
            const d = await resp.json().catch(() => ({}));
            throw new Error(d.msg || d.message || 'No se pudo cambiar la contraseña.');
        }
    },

    async cerrarSesion(accessToken) {
        try {
            await fetch(window.PAWID.SUPABASE_URL + '/auth/v1/logout', {
                method: 'POST', headers: this.headers(accessToken)
            });
        } catch (_) { /* no es crítico */ }
    }
};
