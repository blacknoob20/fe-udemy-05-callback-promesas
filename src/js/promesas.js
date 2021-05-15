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

const buscarHeroe = () => {
    const heroe = heroes[id];

    return new Promise((resolve, reject) => {
        if(heroe){
            resolve(heroe);
        } else{
            callback(`No existe el heroe con el id ${id}`);
        }
    });
}
