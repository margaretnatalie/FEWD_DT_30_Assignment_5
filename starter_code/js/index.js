$(document).ready(function() {
  //'event.preventDefault' prevents the submit button from refreshing the page
  $('#submit-btn').click(function(){
    event.preventDefault();
    //gets the value of the #city-type input
    var city = $('#city-type').val();
    //clears the input placeholder after you have pressed submit
    $('#city-type').val('');
    // if the user inputs New York City / NYC / New York, it will change the background image of the body to class defined in CSS to 'nyc' image
    if(city == 'new york city' || city == 'nyc' || city == 'new york') {
      $('body').attr('class','nyc');
    }
    // if the user inputs SF/San Francisco/Bay Area, it will change the background image of the body class defined in CSS to 'sf' image 
    else if (city == 'sf' || city == 'san francisco' || city == 'bay area') {
      $('body').attr('class','sf');
    }
    // if the user inputs Austin/ATX, it will change the background image of the body class defined in CSS to 'austin' image
    else if (city == 'austin' || city == 'atx') {
      $('body').attr('class','austin');
    }
    // if the user inputs Los Angeles/LA/LAX, it will change the background image of the body class defined in CSS to 'la' image
    else if (city == 'los angeles' || city == 'la' || city == 'lax') {
      $('body').attr('class','la');
    }
    // if the user inputs Sydney/SYD, it will change the background image of the body class defined in CSS to 'sydney' image
    else if (city == 'sydney' || city == 'syd' || city == 'opera house') {
      $('body').attr('class','sydney');
    }
  });
});

// Notes about the JS: the images that the submit button displays in the backgroung are defined in the CSS. There are other ways of doing it. 

// $(document).ready(function(){
//   $('#submit-btn').click(function(){
//     event.preventDefault();
//     var city = $('#city-type').val();
//     if(city =='new york city' || city == 'nyc' || city == 'new york') {
//       $('body').attr('images','nyc.jpg')
//     }


//   })
// })

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
// 



//first we want to define the values that the page will accept

//when value of image is written, correct image is called

//when correct image is called, image is then displayed in the background

// make sure that the values of the images are correct
