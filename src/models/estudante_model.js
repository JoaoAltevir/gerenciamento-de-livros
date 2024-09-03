let nextID = 1;

const model = (body, id = nextID++) => {
    if (
        body.nome != "" &&
        body.nome != undefined &&
        body.matricula != "" &&
        body.matricula != undefined &&
        body.curso != "" &&
        body.curso != undefined &&
        body.ano != undefined &&
        !isNaN(Number(body.ano))
    ) {
        return {
            id,
            nome: body.nome,
            matricula: body.matricula,
            curso: body.curso,
            ano: body.ano
        }
    }
    return
}

module.exports = model;