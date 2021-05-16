import { obtenerHeroes, obtenerHeroesAwait } from "./js/await";

console.time('await');

obtenerHeroesAwait('capi')
    .then(heroe => {
        console.table(heroe);
        console.timeEnd('await');})
    .catch(console.warn);
