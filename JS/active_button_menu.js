document.querySelectorAll('nav a').forEach(link => {
    if (link.href.includes(window.location.pathname)){
        if (link.href.endsWith('web')) {
            window.location.href = link.href + '/index.html';
        }
        else link.classList.add('active')
    }
})