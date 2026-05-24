const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    // Serve CSS file
    if (req.url === '/style.css') {

        const cssPath = path.join(__dirname, 'css/style.css');

        fs.readFile(cssPath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading CSS');
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/css'
            });

            res.end(data);
        });

        return;
    }

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>My Webpage</title>

            <link rel="stylesheet" href="/style.css">
        </head>
        <body>

            <h1>Welcome to my website</h1>
            <p>This is the main content area.</p>

        </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});