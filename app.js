const yargs = require("yargs");
const weather =  require('./utils/weather');
const geo =  require('./utils/geo');


yargs.command({
  command: 'location',
  describe:'Get Location',
  builder:{
      location:{
          demandOption:true,
          describe:"location",
          type: "string",
      },
      
  },
  handler:function(argv) {
      
  
    geo(argv.location)
    .then((response)=>{
        console.log(response.name);
        return weather(response.lat,response.lon)
    })
    .then((response)=>{
        console.log(response)
    })

    .catch((error)=>{
        console.log(error)
    })
     
  }
});
yargs.parse();

//Type In Console ------------- ------> ------> -------> -------> node app.js location --location='Kandy' 


    