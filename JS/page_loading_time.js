(function() {
    let open_time = window.performance.timing.domLoading - window.performance.timing.navigationStart;

    function load_time() {
    document.getElementById('load_time').innerHTML =
        'Page was loading ' + open_time / 1000 + ' seconds';
    }

    document.addEventListener('DOMContentLoaded', load_time);
})();