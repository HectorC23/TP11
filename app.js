// PARTE ACTIVIDAD 2

let funImportada = require("./collectibles");

let marcaHotToys = funImportada("Hot Toys");
let marcaBandai = funImportada("Bandai");
let marcaStarWars = funImportada("Star Wars");

let unifiedCollectibles = [...marcaHotToys,...marcaBandai,...marcaStarWars]

let collectibles = {
    figuras: [...unifiedCollectibles],
    /* [
        ...unifiedCollectibles.map(e=>{
            return e.nombre;
        })
    ], */
    listFigures: function() {
        this.figuras.forEach(e => {
            return console.log(e);
        })
    },
    figuresByBrand: function(marca) {
        return this.figuras.filter((e) => {
            return e.marca == marca;
        })
    }
}
// console.log(collectibles.figuras);
// console.log(collectibles.listFigures());
// console.log(collectibles.figuresByBrand("Bandai"));