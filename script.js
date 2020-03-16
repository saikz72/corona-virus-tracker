function setup(){
    loadJason('https://samples.openweathermap.org/data/2.5/find?q=London&appid=a4110945efacdd46581ca88c73b0276c&units=metric', gotData);
}

function gotData(data){
    console.log(data);
}
