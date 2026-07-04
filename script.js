document.getElementById('galaxiaBtn').addEventListener('click', function() {
    window.location.href = 'galaxia.html';
});

(function() {
    const bg = document.getElementById('bgVideo');

    const btn = document.getElementById('galaxiaBtn');
    const msj = document.getElementById('mensaje');
    if (!bg) return;

    const ignoreSelector = 'button, a, input, textarea, select, #forgiveVideo';

    document.addEventListener('click', (e) => {
        if (e.target.closest(ignoreSelector)) return;

        if (bg.paused) {
            btn.classList.toggle('activo');
            msj.classList.toggle('desactivo');
            bg.play().catch(() => {
                bg.muted = true;
                bg.play().catch(() => {});
            });
        }
        //else {
        //    bg.pause();
        //}
    });
})();
// Daboyloper