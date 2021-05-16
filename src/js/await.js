import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIds = ['cap','iron','spider'];
const heroesPromesas = heroesIds.map(buscarHeroe);

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

export const obtenerHeroesAwait = async(id) => {
    try {
        return await buscarHeroeAsync(id);
    } catch (error) {
        console.log('Catch...!');
        console.log(error);
    }
};

export const heroesCiclo = async() => {
    console.time('Heroes Ciclo');
    
    // Primera implementacion
    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach(heroe => console.log(heroe) );

    // Segunda implementacion
    // for await(const heroe of heroesPromesas) {
    //     console.log(heroe);
    // }

    //Tercera implementacion
    heroesPromesas.forEach(async p => {
        console.log(await p);
    });

    console.timeEnd('Heroes Ciclo');
};

export const heroeIfAwait = async(id) => {
    if(await buscarHeroeAsync(id).nombre === 'iron'){
        console.log('Es el mejor de todos');
    } else{
        console.log('Naaaaaa...');
    }
};
