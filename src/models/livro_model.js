let nextID = 1;

const model = (body, id = nextID++) => {
    if (
        body.titulo != "" &&
        body.titulo != undefined &&
        body.autor != "" &&
        body.autor != undefined &&
        body.genero != "" &&
        body.genero != undefined &&
        body.ano != undefined &&
        !isNaN(Number(body.ano))
    ) {
        return {
            id,
            titulo: body.titulo,
            autor: body.autor,
            genero: body.genero,
            ano: body.ano
        }
    }
    return
}

module.exports = model;