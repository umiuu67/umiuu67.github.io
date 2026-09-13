(function () {
    if (!window.matchMedia || !matchMedia('(pointer: fine)').matches) return;

    var box = document.getElementById('box');
    var tx = 0, ty = 0, cx = 0, cy = 0, raf = null;

    function loop() {
        cx += (tx - cx) * 0.055;
        cy += (ty - cy) * 0.055;
        if (box) box.style.transform = 'translate3d(' + cx.toFixed(2) + 'px,' + cy.toFixed(2) + 'px,0) scale(1.07)';
        if (Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05) {
            raf = requestAnimationFrame(loop);
        } else {
            raf = null;
        }
    }

    window.addEventListener('mousemove', function (e) {
        var dx = e.clientX / window.innerWidth - 0.5;
        var dy = e.clientY / window.innerHeight - 0.5;
        tx = dx * -30;
        ty = dy * -20;
        if (!raf) raf = requestAnimationFrame(loop);
    });

    document.querySelectorAll('.slant-card').forEach(function (card) {
        card.addEventListener('mousemove', function (e) {
            var r = card.getBoundingClientRect();
            var px = (e.clientX - r.left) / r.width - 0.5;
            var py = (e.clientY - r.top) / r.height - 0.5;
            card.style.setProperty('--ry', (px * 9).toFixed(2) + 'deg');
            card.style.setProperty('--rx', (py * -9).toFixed(2) + 'deg');
        });
        card.addEventListener('mouseleave', function () {
            card.style.setProperty('--rx', '0deg');
            card.style.setProperty('--ry', '0deg');
        });
    });
})();
