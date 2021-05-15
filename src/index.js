import { buscarHeroe, buscarHeroeAsync } from "./js/promesas";

buscarHeroe('capi')
    .then(heroe => console.log)
    .catch(console.warm);

buscarHeroeAsync('iron')
    .then(heroe => console.log)
    .catch(console.warm);
    ;