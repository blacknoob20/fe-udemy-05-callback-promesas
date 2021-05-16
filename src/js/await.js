import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIds = ['cap','iron','spider'];

export const obtenerHeroes = async() => {
    // Mas elegante
    return await Promise.all(heroesIds.map(buscarHeroe))

    // Menos elegante
    // const aHeroes = [];

    // for (const id of heroesIds) {
    //     aHeroes.push(buscarHeroeAsync(id));
    // }

    // return await Promise.all(aHeroes);
};

