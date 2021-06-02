const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);
    // console.log(encodedUlr);

    const instance = axios.create({
        baseURL: ` https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl } `,
        headers: { ' x-rapidapi-key ': '6ba3ca51femshf3dff8be9115333p1172c3jsn6a87f96870b7' }
    });

    const resp = await instance.get();

    if (resp.data.Results.lenght === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}