const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Hello Node.js</title>
        </head>
        <body>
            <h1>Hello from Node.js deployed on Render!</h1>
            <h1>This is update</h1>
        </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
