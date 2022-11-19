document.querySelectorAll('nav a').forEach(link => {
    if (link.href.includes(window.location.pathname)){
        link.classList.add('active')
    }
})