(function () {
    var box = document.getElementById('box');
    if (!box) return;

    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var saveData = navigator.connection && navigator.connection.saveData;
    var lowMemory = navigator.deviceMemory && navigator.deviceMemory <= 4;
    var smallViewport = window.matchMedia && window.matchMedia('(max-width: 700px)').matches;

    if (reduceMotion || saveData || lowMemory || smallViewport) {
        document.documentElement.classList.add('background-static');
        return;
    }

    var currentScript = document.currentScript;
    var assetBase = currentScript && currentScript.src
        ? currentScript.src.replace(/js\/background\.js(?:\?.*)?$/, '')
        : '';

    function start() {
        if (!window.Color4Bg || !window.Color4Bg.ChaosWavesBg) return;
        new window.Color4Bg.ChaosWavesBg({
            dom: 'box',
            colors: ['#6d6d6d', '#9b9b9b', '#838383', '#494949', '#1b1b1b', '#010101'],
            seed: 20030506,
            loop: true
        });
    }

    function load() {
        var script = document.createElement('script');
        script.src = assetBase + 'assets/ChaosWavesBg.min.js?v=22';
        script.async = true;
        script.onload = start;
        document.head.appendChild(script);
    }

    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(load, { timeout: 1800 });
    } else {
        window.setTimeout(load, 600);
    }
})();
