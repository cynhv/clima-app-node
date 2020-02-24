const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodeUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        timeout: 1000,
        headers: {
            'x-rapidapi-key': 'acbf04d761msh14b572fa75ece29p17b582jsne259c7a769fc',
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        }
    });

    //promesa
    const resp = await instance.get();

    if (resp.data.Results.length == 0) {
        throw new Error(`No hay resultados para ${dir}`);
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