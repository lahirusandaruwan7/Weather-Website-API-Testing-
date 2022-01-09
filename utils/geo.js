const axios = require("axios");


const getGeo = (location) => {
  return new Promise((resolve, reject) => {
    const url =
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
      location +
      "&limit=1&appid=f9a4438f5b861b209bb5c96159a2a446";
console.log(url)
    axios
      .get(url)
      .then(function (response) {
        // handle success
       resolve({
       // console.log(response.data[0].name + ' is in ' + response.data[0].lat+' ' + response.data.lon)
           name:response.data[0].name,
           lat: response.data[0].lat,
           lon: response.data[0].lon
       });
      })
      .catch(function (error) {
        // handle error
        if (error.response === undefined) {
          reject("Connection problem");
        } else {
          reject(error.response.data.message);
        }
      })
      
  });
};

// getGeo('London')
//     .then((response)=>{
//         console.log(response)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
module.exports = getGeo;