const heroes = {
    cap:{
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron:{
        nombre: 'Tony Stark',
        poder: 'Super inteligente'
    },
    spider:{
        nombre: 'Peter Parker',
        poder: 'Resistente a las picaduras de aracnidos'
    }
};

export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];

    callback();
}
