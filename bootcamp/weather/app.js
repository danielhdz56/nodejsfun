const axios = require('axios');


const name = process.argv[2];
const location = process.argv[3];

var encodedAddress = encodeURIComponent(location);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find that address.');
    }
    var latitude = response.data.results[0].geometry.location.lat;
    var longitude = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/b8df38ec04f30fa4a1ee07f2f7680aea/${latitude},${longitude}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
    console.log(response);
}).catch((e) => {
    console.log(e);
});
