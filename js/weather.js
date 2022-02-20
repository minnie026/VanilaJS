const weatherBox = document.querySelector(".weather-container");
const weatherMain = document.querySelector(".weather-main");
const imgBox = document.querySelector(".img-box");
console.log(weatherBox, weatherMain, imgBox);


// 날씨 서버에서 받아오기
const API_KEY = "c469ad545e4e0059547a95e133f4d9fe";


function success(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(API);

    fetch(API)
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            const locationValue = data.name;
            const humidityValue = data.main.humidity;
            const pressureValue = data.main.pressure;
            const mainTempValue = data.main.temp;
            const highTempValue = data.main.temp_max;
            const lowTempValue = data.main.temp_min;
            const countryValue = data.sys.country;
            const weatherValue = data.weather[0].main;
            const speedValue = data.wind.speed;
            console.log(locationValue, humidityValue, pressureValue,
            mainTempValue, highTempValue, lowTempValue, countryValue,
            weatherValue, speedValue);
            console.log(`받아온 값 ${weatherValue}`);
            console.log(typeof weatherValue);

            document.querySelector(".weather-name").innerText = weatherValue;
            document.querySelector(".temp").innerText = `${mainTempValue} °`;
            document.querySelector(".low-high-temp").innerText = `${lowTempValue} / ${highTempValue}`;
            document.querySelector(".location").innerText = `${locationValue}, ${countryValue}`;
           
            // 정보 넣어주기
            document.querySelector("#windValue").innerText = speedValue;
            document.querySelector("#humidityValue").innerText = `${humidityValue} %`;
            document.querySelector("#pressureValue").innerText = pressureValue;


            const allImg = document.querySelectorAll("[data-img]");
            console.log(allImg);
            allImg.forEach((name)=>{
            console.log(`name is ${name}`);
            console.log(name.dataset.img);
            console.log(typeof name.dataset.img); // string
            const imgName = name.dataset.img;

           console.log(imgName === weatherValue);

            if (imgName === weatherValue  ){
                // 해당 이미지를 보여줌.
                name.classList.remove('hide');

                if (imgName === 'Clear'){
                    weatherBox.style.background = 'bisque';
                    weatherMain.style.background = 'bisque';
                    imgBox.style.background = 'bisque';
                } else if (imgName === 'Clouds'){
                    weatherBox.style.background = '#dbe7ec';
                    weatherMain.style.background = '#dbe7ec';
                    imgBox.style.background = '#dbe7ec';
                    weatherBox.style.color = 'grey';
                    weatherMain.style.color = 'grey';
                    imgBox.style.color = 'grey';
                } else if (imgName === 'Rain' || imgName === 'Drizzle'){
                    weatherBox.style.background = '#e0dfdf';
                    weatherMain.style.background = '#e0dfdf';
                    imgBox.style.background = '#e0dfdf';
                    weatherBox.style.color = 'grey';
                    weatherMain.style.color = 'grey';
                    imgBox.style.color = 'grey';
                } else if (imgName === 'Thunderstorm'){
                    weatherBox.style.background = '#616161';
                    weatherMain.style.background = '#616161';
                    imgBox.style.background = '#616161';
                    weatherBox.style.color = 'white';
                    weatherMain.style.color = 'white';
                    imgBox.style.color = 'white';
                }else if (imgName === 'Snow'){
                    weatherBox.style.background = '#e0e0e0';
                    weatherMain.style.background = '#e0e0e0';
                    imgBox.style.background = '#e0e0e0';
                    weatherBox.style.color = 'rgb(68, 68, 68)';
                    weatherMain.style.color = 'rgb(68, 68, 68)';
                    imgBox.style.color = 'rgb(68, 68, 68)';
                }
                else if (imgName === 'Fog' || imgName === 'Mist' || imgName === 'Sand' || imgName === 'Smoke' || imgName === 'Haze' || imgName === 'Dust'){
                    weatherBox.style.background = '#d0dee0';
                    weatherMain.style.background = '#d0dee0';
                    imgBox.style.background = '#d0dee0';
                    weatherBox.style.color = 'rgb(68, 68, 68)';
                    weatherMain.style.color = 'rgb(68, 68, 68)';
                    imgBox.style.color = 'rgb(68, 68, 68)';
                    
                }
                  
                
            }
    
})

        })
}


function error(err){
    console.log("실패");
    console.warn(`ERROR(${err.code}): ${err.message}`);
}
navigator.geolocation.getCurrentPosition(success, error);
