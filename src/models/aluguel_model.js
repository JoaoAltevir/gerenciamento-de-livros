let nextID = 1;
const estudante_controller = require("../controllers/estudante.js");
const livro_controller = require("../controllers/livro.js");

const model = (body, id = nextID++) => {
    if (
        estudante_controller.show(body.idEstudante) &&
        livro_controller.show(body.idLivro) &&
        body.dataAluguel != "" &&
        body.dataAluguel != undefined
    ) {
        return {
            id,
            idLivro: body.idLivro,
            idEstudante: body.idEstudante,
            data_aluguel: body.dataAluguel
        }
    }
    return
}

module.exports = model;