fetch('/js/navbar.js')
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudo cargar navbar.js');
        }
        return response.text();
    })
    .then(script => {
        const navbarScript = document.createElement('script');
        navbarScript.textContent = script;
        document.body.prepend(navbarScript);
    })
    .catch(error => console.error(error));
