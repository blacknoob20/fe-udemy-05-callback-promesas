import './styles.css';
import { buscarHeroe } from "./js/callbacks";

const heroeId = 'cap';

buscarHeroe(heroeId, () => {
    console.log('CallBack llamado...!');
});