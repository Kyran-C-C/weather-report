const weatherButton = document.querySelector(".button.button--hoo");
const apikey= "9d665120ec95707a3070a6d039d84209";
let city = document.getElementsByClassName("cityinput")[0].value;


weatherButton.addEventListener("click", async event =>{
    await newpage();    
    
})

async function newpage(){
    let city = document.getElementsByClassName("cityinput")[0].value;

    if (city){
        try{
            const weatherdata = await getweather(city);
        localStorage.setItem("weather", JSON.stringify(weatherdata));
        window.location.href = 'report.html';}
        
        
        
        
            catch(error){
                alert('error')
            }

    }
    else{
        alert("Please Enter a city")
    }}

async function getweather(city) {
                const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'9d665120ec95707a3070a6d039d84209'}`;
                    const response = await fetch(apiurl);
                if (!response.ok) {
    throw new Error("Could not fetch weather data");
}

                return await response.json();

    
}

