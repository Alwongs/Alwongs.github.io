window.onload = getWeather;

let img = document.querySelector('.img');
let select = document.querySelector('.select');
let sections = document.querySelectorAll('section');
let li = document.querySelectorAll('li');

let months = ['January', 'Fabruary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


function getWeather() {
  let cityCode = select.value;
  if (cityCode == 703883) {
    img.innerHTML = '<img src="images/crimea.jpg" alt="crimea">';
  }
  else if (cityCode == 2921044) {
    img.innerHTML = '<img src="images/germany.jpg" alt="germany">';
  }
  else if (cityCode == 2971874) {
    img.innerHTML = '<img src="images/france.jpg" alt="france">';
  }
  else if (cityCode == 4700234) {
    img.innerHTML = '<img src="images/italy.jpg" alt="italy">';
  }

  // ================ получаем текущую погоду ================
  fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityCode}&appid=70e1ed322b02acbc57d443dd91065f3e`)
    .then(function (resp) { return resp.json() })
    .then(function (data) {
      console.log(data);

      /* let unixCurrentTime = data.dt;
       let currentTime = new Date(+unixCurrentTime * 1000);
 
       let month = currentTime.getMonth();
       let d = currentTime.getDate();
       let hour = currentTime.getHours();
       let min = currentTime.getHours();
       let correct_current_time = `${months[month]} ${d}, ${hour}:${min}`;
       document.querySelector('.region-name').innerHTML = correct_current_time + ' ';*/


      document.querySelector('.region-name').innerHTML = `<span class="region-span">${data.name}</span>`;
      document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';

      document.querySelector('.direction').innerHTML = data.wind.deg + '&deg;';
      document.querySelector('.speed').textContent = data.wind.speed + 'м/с';

      document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
      //https://openweathermap.org/img/wn/02d@2x.png
      document.querySelector('.pic').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
      //alert('Нет данных о текущей погоде..');
    });

  // ================== получаем прогноз погоды =============
  fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityCode}&appid=70e1ed322b02acbc57d443dd91065f3e`)
    .then(function (resp) { return resp.json() })
    .then(function (data) {
      console.log(data);



      //=========== почасовой прогноз ==========================
      for (let i = 0; i < li.length; i++) {

        let unixTime = data.list[i].dt;
        let time = new Date(+unixTime * 1000);
        let h = time.getHours();
        let correct_time = h + ':00';
        li[i].innerHTML = `${correct_time} ........ ${Math.round(data.list[i].main.temp - 273)} &deg`;
      }

      //=========== ежедневный прогноз ==========================
      let k = 2;
      for (let j = 0; j < sections.length; j++) {
        let unixDate = data.list[k].dt;
        let date = new Date(+unixDate * 1000);
        let m = date.getMonth();
        let d = date.getDate();
        let correct_date = months[m] + ' ' + d;
        sections[j].children[0].innerHTML = correct_date;
        sections[j].children[1].children[0].innerHTML = Math.round(data.list[k].main.temp - 273) + '&deg;';
        //document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        //https://openweathermap.org/img/wn/02d@2x.png
        sections[j].children[1].children[1].innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[k].weather[0]['icon']}@2x.png">`;
        k = k + 8;
      }
    })
    .catch(function () {
      //alert('Нет данных о прогнозе погоды..');
    });
}

select.onchange = getWeather;