const url = "https://api.openweathermap.org/data/2.5/";
const key = "2b62a2650b2e015ac90f2536bb32c0be";

const getQuery = (e) => {
    if (e.keyCode == "13") {
        getResult(searchInput.value);
    }
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;

    axios.get(query)
        .then((res) => {
            displayResult(res.data)
        })
        .catch((err) => {
            window.alert("hata")
        })
}

const displayResult = (result) => {
    let city = document.querySelector(".city");
    city.innerText = `${result.name} ,${result.sys.country}`;
    let temp = document.querySelector(".temp");
    temp.innerText = `${Math.round(result.main.temp)}°C`
    let desc = document.querySelector(".desc");
    desc.innerText = result.weather[0].description;
    let minmax = document.querySelector(".minmax");
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`;



}

let searchInput = document.getElementById("searchInp");
searchInput.addEventListener("keypress", getQuery);

