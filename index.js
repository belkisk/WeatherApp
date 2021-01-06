var apiKey = "3b5c51a03cca3b792e0b9c218f807acd";

var object = {
  base: "stations",
  clouds: {
    all: 1
  },
  coord: {
    lat: 43.65,
    lon: -79.38
  },
  dt: 1507510380,
  id: 6167863,
  main: {
    humidity: 77,
    pressure: 1014,
    temp: 17.99,
    temp_max: 20,
    temp_min: 16
  },
  name: 'Downtown Toronto',
  sys: {
    type: 1,
    id: 2117,
    message: 0.0041,
    country: 'CA',
    sunrise: 1507548290,
    sunset: 1507589027,
    type: 1
  },
  visibility: 16093,
  weather: [
    {
      description: 'clear sky',
      icon: '01n',
      id: 800,
      main: "Clear"
    }
  ],
  wind: {
    deg: 170,
    speed: 1.5
  }

};

function getWeatherInfo(responseObject) {

  $('div').html("<ul><li>Temp: " + responseObject.main.temp +"</li></ul>");
  $('ul').append("<li>Humidity: " + responseObject.main.humidity +"</li>");
  $('ul').append("<li>Pressure: " + responseObject.main.pressure +"</li>");
  $('ul').append("<li>Max Temp: " + responseObject.main.temp_max +"</li>");
  $('ul').append("<li>Min Temp: " + responseObject.main.temp_min +"</li>");
  $('ul').append("<li>Wind Speed: " + responseObject.wind.speed +"</li>");

  $('div').prepend("<h3>" + responseObject.weather[0].description +"</h3>");
  $('div').prepend("<h2>" + responseObject.name + "</h2>");
}

function getWeatherFromDatabase (searchName) {
  $.get('https://api.openweathermap.org/data/2.5/weather?q=' + searchName + '&appid=' + apiKey, function (data) {
    console.log(data);
    $('div').html("<ul><li>Temp: " + data.main.temp +"</li></ul>");
    $('ul').append("<li>Humidity: " + data.main.humidity +"</li>");
    $('ul').append("<li>Pressure: " + data.main.pressure +"</li>");
    $('ul').append("<li>Max Temp: " + data.main.temp_max +"</li>");
    $('ul').append("<li>Min Temp: " + data.main.temp_min +"</li>");
    $('ul').append("<li>Wind Speed: " + data.wind.speed +"</li>");

    $('div').prepend("<h3>" + data.weather[0].description +"</h3>");
    $('div').prepend("<h2>" + data.name + "</h2>");
  })
}

$(document).ready(function() {
  // WRITE YOUR CODE HERE.
  console.log("Hello World");

  $('form').on('submit', function(event) {
    event.preventDefault();
    console.log($('form input').val());
    var searchName = $('form input').val();
    getWeatherFromDatabase(searchName);
    // $.get('https://api.openweathermap.org/data/2.5/weather?units=metric&q=' + searchName + 'appid=' + apiKey, function (data) {
    //   if(data.city === searchName) {
    //     // Correct Search Results
    //   } else {
    //     // Incorrect Search Results
    //   }
    // $('form').fadeOut(2000);
    $('form').fadeIn(5000);
    getWeatherInfo(object);
    $('.results').show(500);
  })

  $('form input').on('focus', function() {
    $('form input').css('border-color', 'red');
    $('form input').css('border-radius', '4px');
})

  $('form button').on('focus', function() {
    $('form button').css('font-weight', 'bold');
  })
});
