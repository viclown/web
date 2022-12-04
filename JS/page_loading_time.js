(function() {
    function load_time() {
        let open_time = performance.timing.navigationStart;
        let final_time = performance.timing.loadEventStart;
        document.querySelector('#load_time').innerHTML +=
            `Page was loading ${(final_time - open_time) / 1000} seconds`;
    }

    window.addEventListener('load', load_time);
})();