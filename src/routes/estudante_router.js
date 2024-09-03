const express = require("express");
const router = express.Router();
const estudanteController = require("../controllers/estudante.js");

router.post("/", (req,res)=> {
    const novo = req.body;
    const code = estudanteController.store(novo);
    res.status(code).json();
});

router.get("/", (req, res) => {
    res.json(estudanteController.index());
});

router.get("/:id", (req, res) => {
    res.json(estudanteController.show(req.params.id));
});

router.put("/:id", (req, res) => {
    const novo = req.body;
    const code = estudanteController.update(novo, req.params.id);
    res.status(code).json();
})

router.delete("/:id", (req, res) => {
    const code = estudanteController.destroy(req.params.id);
    res.status(code).json()
});

module.exports = router