const express = require("express");
const router = express.Router();
const aluguelController = require("../controllers/aluguel.js");

router.post("/", (req,res)=> {
    const novo = req.body;
    const code = aluguelController.store(novo);
    res.status(code).json();
});

router.get("/", (req, res) => {
    res.json(aluguelController.index());
});

router.get("/:id", (req, res) => {
    res.json(aluguelController.show(req.params.id));
});

router.put("/:id", (req, res) => {
    const novo = req.body;
    const code = aluguelController.update(novo, req.params.id);
    res.status(code).json();
})

router.delete("/:id", (req, res) => {
    const code = aluguelController.destroy(req.params.id);
    res.status(code).json()
});

module.exports = router