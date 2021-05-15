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

const buscarHeroe = (id) => {
    const heroe = heroes[id];

    return new Promise((resolve, reject) => {
        if(heroe){
            resolve(heroe);
        } else{
            callback(`No existe el heroe con el id ${id}`);
        }
    });
};

const buscarHeroeAsync = async(id) => {
    const heroe = heroes[id];

    if(heroe){
        return heroe
    } else{
        throw `No existe el heroe con el id ${id}`;
    }
}

const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('promesa Lenta.');
    }, 2000);    
});

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('promesa Media.');
    }, 1500);
});

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('promesa Rapida.');
    }, 1000);
});

export{
    promesaLenta,
    promesaMedia,
    promesaRapida
};