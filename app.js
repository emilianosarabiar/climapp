const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad ',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// OBTENER CLIMA POR LATITUD Y LONGUITUD
// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log)


//OBETENER DATOS POR DIRECCIÓN, LATITUD Y LONGUITUD 
const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getugarLatLng(direccion);
        const temp = await lugar.getClima(coords.lat, coords.lng);

        return `El clima de ${ coords.direccion } es de ${ temp }. `;
    } catch (e) {
        return `No se logro determinar el clima de ${ direccion }`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)