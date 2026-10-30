
const express = require('express');
const path = require('path');
const fs = require('fs/promises');

const app = express();
const PORT = 3000;
const publicPath = path.join(__dirname, 'public');

app.use(async (req, res, next) => {
    if (req.method !== 'GET' ||
        !(req.path === '/' || req.path.endsWith('.html'))) {
        return next();
    }

    const filename = req.path === '/' ? 'index.html' : req.path.slice(1);
    const filePath = path.resolve(publicPath, filename);

    // Evitar que se acceda a archivos fuera de public
    if (!filePath.startsWith(publicPath + path.sep) &&
        filePath !== path.join(publicPath, 'index.html')) {
        return res.sendStatus(403);
    }

    try {
        let html = await fs.readFile(filePath, 'utf8');

        // No duplicar el navbar si la página ya lo incluye
        if (!html.includes('/js/navbar.js') &&
            !html.includes('id="navbar-container"')) {
            const loader = `
<script>
(() => {
    const container = document.createElement('div');
    container.id = 'navbar-container';
    document.body.prepend(container);

    const script = document.createElement('script');
    script.src = '/js/navbar.js';
    document.body.appendChild(script);
})();
</script>
`;

            html = html.replace('</body>', `${loader}</body>`);
        }

        res.type('html').send(html);
    } catch (error) {
        if (error.code === 'ENOENT') return next();
        next(error);
    }
});


app.use(express.static(publicPath));

app.listen(PORT, () => {
    console.log(
        `Web portfolio está funcionando en http://localhost:${PORT}`
    );
});

