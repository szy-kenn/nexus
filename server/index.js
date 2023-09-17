const express = require("express");
const app = express();

const PORT = 3000;

app.get("/api", (req, res) => {
    res.send({ response: "Hello, World!" });
});

app.listen(PORT, () => {
    console.log(`Listening at http:localhost:${PORT}`);
});
