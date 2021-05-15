import { promesaLenta,promesaMedia,promesaRapida } from "./js/promesas";

// promesaLenta(console.log);
// promesaMedia(console.log);
// promesaRapida(console.log);

Promise.race([promesaLenta,promesaMedia,promesaRapida])
       .then(console.log)
       .catch(console.warn);