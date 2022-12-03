document.querySelectorAll('nav a').forEach(link => {
    if (link.href.includes(window.location.pathname)){
        if (window.location.pathname.endsWith('web/')) {
            window.location.pathname = window.location.pathname + 'index.html';
        }
        else link.classList.add('active')
    }
})