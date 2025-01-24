const urlWa = "http://worldtimeapi.org/api/timezone/America/Los_Angeles";
const urlUtah = "http://worldtimeapi.org/api/timezone/America/Boise";
const urlLondon = "http://worldtimeapi.org/api/timezone/Europe/London";

async function getDataWa() {
    const responseWa = await fetch(urlWa);
    const dataWa = await responseWa.json();
    console.log(dataWa);
    const timeWa = new Date(dataWa.dst_offset);
    console.log(timeWa)
    document.querySelector("#waHour").innerHTML = timeWa.getHours();
    document.querySelector("#waMin").innerHTML = timeWa.getMinutes();
}

async function getDataUtah() {
    let response = await fetch(urlUtah);
    let data = await response.json();
    console.log(data);
    let time = new Date(data.datetime);
    document.querySelector("#utahHour").innerHTML = time.getHours();
    document.querySelector("#utahMin").innerHTML = time.getMinutes();
}

async function getDataLondon() {
    let response = await fetch(urlLondon);
    let data = await response.json();
    console.log(data);
    let time = new Date(data.datetime);
    document.querySelector("#londonHour").innerHTML = time.getHours();
    document.querySelector("#londonMin").innerHTML = time.getMinutes();
}

getDataWa();
getDataUtah();
getDataLondon();