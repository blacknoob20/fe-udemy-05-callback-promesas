import { buscarHeroeAsync } from "./promesas";

const heroesIds = ['cap','iron','spider'];

export const obtenerHeroes = async() => {
    const aHeroes = [];

    for (const id of heroesIds) {
        const heroe = await buscarHeroeAsync(id);
        
        aHeroes.push(heroe);
    }

    return aHeroes;
};

