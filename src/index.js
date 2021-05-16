import { obtenerHeroes } from "./js/await";

console.time('await');

obtenerHeroes().then(heroes => {
    console.table(heroes);
    console.timeEnd('await');
});
