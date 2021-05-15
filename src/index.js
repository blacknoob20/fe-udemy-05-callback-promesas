import './styles.css';
import { buscarHeroe } from "./js/callbacks";

const heroeId = 'cap';

buscarHeroe(heroeId, (err, heroe) => {
    if(err){
        console.error(err);
    } else {
        console.log(heroe);
    }
});