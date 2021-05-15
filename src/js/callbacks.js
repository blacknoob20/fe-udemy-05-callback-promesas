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

    if(heroe){
        callback(null, heroe);
    } else{
        callback(`No existe el heroe con el id ${id}`);
    }
}
