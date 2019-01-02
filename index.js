const express = require("express"), app = express(), port = process.env.port || 80;
var number = 0; //TODO: use a database so the number persists after the app stops

app.get("/", (req, res) => {
    number++;
    res.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <title>The Number</title>
            <style>
                h1 {
                    left: 0;
                    line-height: 200px;
                    margin-top: -100px;
                    position: absolute;
                    text-align: center;
                    top: 50%;
                    width: 100%;
                }
            </style>
        </head>
        <body>
            <h1>${number}</h1>
        </body>
    </html>`);
});

app.get("/text", (req, res) => {
    res.set("Content-Type", "text/plain");
    number++;
    res.send(`${number}\n`);
});

app.get("/view", (req, res) => {
    res.set("Content-Type", "text/plain");
    res.send(number.toString());
});

app.listen(port, () => console.log(`The number is listening on port ${port}.`));
