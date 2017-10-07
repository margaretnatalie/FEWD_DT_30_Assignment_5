//wait for the DOM elements to load before executing
$(document).ready(function() {
  //prevent the submit button from refreshing the page
  $('#submit-btn').click(function(){
    event.preventDefault();
    //get the value of the #city-type input and fix for capitalization
    var city = $('#city-type').val();
    $('#city-type').val('');
    // we can use toLowerCase() to evaluate the input as a lower case input
    city = city.toLowerCase();
    // if the user inputs New York City / NYC / New York change the CSS class to 'nyc'
    if(city == 'new york city' || city == 'nyc' || city == 'new york') {
      $('body').attr('class','nyc');
    }
    // if the user inputs SF/San Francisco/Bay Area change the CSS class to 'sf'
    else if (city == 'sf' || city == 'san francisco' || city == 'bay area') {
      $('body').attr('class','sf');
    }
    // if the user inputs Austin/ATX change the CSS class to 'austin'
    else if (city == 'austin' || city == 'atx') {
      $('body').attr('class','austin');
    }
    // if the user inputs Los Angeles/LA/LAX change the CSS class to 'la'
    else if (city == 'los angeles' || city == 'la' || city == 'lax') {
      $('body').attr('class','la');
    }
    // if the user inputs Sydney/SYD change the CSS class to 'sydney'
    else if (city == 'sydney' || city == 'syd' || city == 'opera house') {
      $('body').attr('class','sydney');
    }
  });
});

//notes from the sketch 
//$(document).ready(function() {

// var austin = ['austin.jpg']
// var newyork = ['nyc.jpg']
// var losangeles = ['la.jpg']
// var sanfrancisco = ['sf.jpg']
// var sydney = ['sydney.jpg']

// var city = ['austin.jpg','la.jpg','nyc.jpg','sf.jpg','sydney.jpg']
// $("") 
// })



//first we want to define the values that the page will accept

//when value of image is written, correct image is called

//when correct image is called, image is then displayed in the background

// make sure that the values of the images are correct


console.log('fuck me up')