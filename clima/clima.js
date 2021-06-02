const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(` api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng } 139&appid=45ff1803e2769c503dc3c1dde28fd025&units=metric `)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}