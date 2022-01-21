//const yargs = require("yargs");
const path = require('path');
const express = require('express');
const weather =require('./utils/weather');
const geo =  require('./utils/geo');
const hbs = require('hbs');

const app = express();

const templatePath = path.join(__dirname,"../templates");
const partialsPath = path.join(__dirname,"../templates/partials")

app.set('view engine', 'hbs');
app.set('views',templatePath);//views set to template path
hbs.registerPartials(partialsPath);

const publicDirPath = path.join(__dirname,"../public");
//console.log(publicDirPath);
app.use(express.static(publicDirPath));


app.get('/',(req,res)=>{
    /* res.render('index',{
        name:'Lahiru',
        age:26,
    });
     */
    res.render('index');
})
app.get('/help',(req,res)=>{
    res.render("help")
})
app.get('/about',(req,res)=>{
        res.render("about")
})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        res.send({error:'address not found!'})
        
    }
    geo(req.query.address)
    .then((response)=>{
       // console.log(response.name);
        return weather(response.lat,response.lon)
    })
    .then((response)=>{
        //console.log(response)
        res.send(response);
    })

    .catch((error)=>{
        res.send(error)
    })
    
   
})
app.get('*',(req,res)=>{
   // res.send("Page not found")
   res.render("404")
})

app.listen(3000,()=>{
    console.log('server is on port 3000');
});

/* yargs.command({
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

 */
