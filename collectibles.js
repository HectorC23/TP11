// PARTE ACTIVIDAD 1
let importar = (marca) => {
    let juguetesHotToys = require("./datos/figuras1");
    let juguetesBandai = require("./datos/figuras2");
    let juguetesStarWars = require("./datos/figuras3");

    switch (marca) {
        case juguetesHotToys[0].marca:
            return juguetesHotToys;
            break;
        case juguetesBandai[0].marca:
            return juguetesBandai;
            break;
        case juguetesStarWars[0].marca:
            return juguetesStarWars;
            break;
        default: return "marca no encontrada"
            break;
    }
}

module.exports = importar;