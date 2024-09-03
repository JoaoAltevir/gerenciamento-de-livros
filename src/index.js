const express = require("express");
const app = express();
const port = 3000;
const livro_router = require("./routes/livro_router.js");
const estudante_router = require("./routes/estudante_router.js");
const aluguel_router = require("./routes/aluguel_router.js");

app.use(express.json());

app.use("/livro", livro_router);

app.use("/estudante", estudante_router);

app.use("/aluguel", aluguel_router);

app.listen(port, () => {
    console.log(`listening on ${port} port`);
})
