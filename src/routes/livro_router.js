const express = require("express");
const router = express.Router();
const livroController = require("../controllers/livro.js");

router.post("/", (req,res)=> {
    const novo = req.body;
    const code = livroController.store(novo);
    res.status(code).json();
});

router.get("/", (req, res) => {
    res.json(livroController.index());
});

router.get("/:id", (req, res) => {
    res.json(livroController.show(req.params.id));
});

router.put("/:id", (req, res) => {
    const novo = req.body;
    const code = livroController.update(novo, req.params.id);
    res.status(code).json();
})

router.delete("/:id", (req, res) => {
    const code = livroController.destroy(req.params.id);
    res.status(code).json()
});

module.exports = router