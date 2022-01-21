const axios = require("axios");


const getWeather = (lat, log) => {
  return new Promise((resolve, reject) => {
    const url =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      log +
      "&exclude=hourly,daily&units=metric&appid=f9a4438f5b861b209bb5c96159a2a446";
      console.log(url)

    // Make a request for a user with a given ID
    axios
      .get(url)
      .then(function (response) {
        // handle success
        resolve({weather:'Currently ' + response.data.current.weather[0].description + ' and temarature ' + response.data.current.temp + 'c'})
      })
      .catch(function (error) {
        // handle error
       
        if (error.response === undefined) {
          reject({error:'Connection Problem'});
        } else {
          reject(error.response.data.message);
        }
      })
    //   .then(function () {
    //     // always executed
    //     console.log("Hi");
    //   });
  });
};

// getWeather(lat,log)
//     .then((response)=>{
//             console.log(response);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
module.exports = getWeather;