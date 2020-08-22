
let widget1 = document.querySelector('.widget1');
let widget2 = document.querySelector('.widget2');
let widget3 = document.querySelector('.widget3');
let widget4 = document.querySelector('.widget4');

btn1 = document.querySelector('.b1');
btn2 = document.querySelector('.b2');
btn3 = document.querySelector('.b3');
btn4 = document.querySelector('.b4');

btn1.onclick = function () {
    alert('does not work yet. But be sure it is always sunny in your mind..');
}

btn2.onclick = function () {
    alert('does not work yet. But be sure it is always sunny in your mind..');
}

btn3.onclick = function () {
    alert('does not work yet. But be sure it is always sunny in your mind..');
}

btn4.onclick = function () {
    alert('does not work yet. But be sure it is always sunny in your mind..');
}




/*btn1.onclick = function () {
    let temp1 = document.querySelector('.temp1');
    fetch('http://api.openweathermap.org/data/2.5/weather?id=703883&appid=6d1b93ee8d9b20e76c67ccbb309549f3')
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);

            let deg = Math.round(data.main.temp - 273);
            temp1.innerHTML = deg + ' &deg';
            if (deg < 0) {
                widget1.classList.add('blue');
            } else if ((deg - 273) > 0 && (deg - 273) < 20) {
                widget1.classList.add('yellow');
            } else {
                widget1.classList.add('orange');
            }

            document.querySelector('.pic1').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        })
        .catch(function () {
            // catch any errors
        });

}

btn2.onclick = function () {
    let temp2 = document.querySelector('.temp2');
    fetch('http://api.openweathermap.org/data/2.5/weather?id=2921044&appid=6d1b93ee8d9b20e76c67ccbb309549f3')
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);

            let deg = Math.round(data.main.temp - 273);
            temp2.innerHTML = deg + ' &deg';
            if (deg < 0) {
                widget2.classList.add('blue');
            } else if ((deg - 273) > 0 && (deg - 273) < 20) {
                widget2.classList.add('yellow');
            } else {
                widget2.classList.add('orange');
            }

            document.querySelector('.pic2').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        })
        .catch(function () {
            // catch any errors
        });

}

btn3.onclick = function () {
    let temp3 = document.querySelector('.temp3');
    fetch('http://api.openweathermap.org/data/2.5/weather?id=2971874&appid=6d1b93ee8d9b20e76c67ccbb309549f3')
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);

            let deg = Math.round(data.main.temp - 273);
            temp3.innerHTML = deg + ' &deg';
            if (deg < 0) {
                widget3.classList.add('blue');
            } else if ((deg - 273) > 0 && (deg - 273) < 20) {
                widget3.classList.add('yellow');
            } else {
                widget3.classList.add('orange');
            }

            document.querySelector('.pic3').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        })
        .catch(function () {
            // catch any errors
        });

}

btn4.onclick = function () {
    let temp4 = document.querySelector('.temp4');
    fetch('http://api.openweathermap.org/data/2.5/weather?id=4700234&appid=6d1b93ee8d9b20e76c67ccbb309549f3')
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);

            let deg = Math.round(data.main.temp - 273);
            temp4.innerHTML = deg + ' &deg';
            if (deg < 0) {
                widget4.classList.add('blue');
            } else if ((deg - 273) > 0 && (deg - 273) < 20) {
                widget4.classList.add('yellow');
            } else {
                widget4.classList.add('orange');
            }

            document.querySelector('.pic4').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        })
        .catch(function () {
            // catch any errors
        });

}*/