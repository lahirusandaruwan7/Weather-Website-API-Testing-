const wForm = document.querySelector('form');
const search = document.querySelector('input');
const loc = document.querySelector("#loc");
const we = document.querySelector("#wea");

wForm.addEventListener('submit',(event)=>{
    event.preventDefault();

    const location = search.value;
    loc.textContent = "Loading ...";
    we.textContent = ""

    fetch('/weather?address='+location)
    .then((res)=>{
        res.json()
        .then((data)=>{
            if(data.error){
                loc.textContent=data.error
            }
            else{
                loc.textContent = location;
                we.textContent = data.weather;
                console.log(data)
            }
        })
        
    })
    
})