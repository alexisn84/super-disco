//global variables
var nine= $("#9am");
var ten = $("#10am");
var eleven = $("#11am");
var twelve = $("#12pm");
var one = $("#13pm");
var two = $("#14pm");
var three = $("#15pm");
var four = $("#16pm");
var five = $("#17pm");
var six = $("#18pm");

// use moment.js to code dates and time
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');
var apptInput;
var time;

var hour = moment().hours();

//create date function
var date = setInterval(function() {
    var thisMoment = moment();
    $('#presentDate').html(thisMoment.format('YYYY MMMM DD') + ' ' + 
    thisMoment.format('dddd').substring(0,3).toUpperCase());
    //console.log(thisMoment);
    $('#presentDate').html(currentDate + " " + thisMoment.format('hh:mm:ss A'));
}, 100);

//retrieve stored items and print onto page when loaded
function retrievePage() {

    console.log("Current Hour " + hour);

    var retrieve9 = JSON.parse(localStorage.getItem("09:00 am"));
    nine.val(retrieve9);

    var retrieve10 = JSON.parse(localStorage.getItem("10:00 am"))
    ten.val(retrieve10);
    
    var retrieve11 = JSON.parse(localStorage.getItem("11:00 am"))
    eleven.val(retrieve11);
    
    var retrieve12 = JSON.parse(localStorage.getItem("12:00 pm"))
    twelve.val(retrieve12);
    
    var retrieve1 = JSON.parse(localStorage.getItem("01:00 pm"))
    one.val(retrieve1);
    
    var retrieve2 = JSON.parse(localStorage.getItem("02:00 pm"))
    two.val(retrieve2);
    
    var retrieve3 = JSON.parse(localStorage.getItem("03:00 pm"))
    three.val(retrieve3);

    var retrieve4 = JSON.parse(localStorage.getItem("04:00 pm"))
    four.val(retrieve4);
    
    var retrieve5 = JSON.parse(localStorage.getItem("05:00 pm"))
    five.val(retrieve5);
    
    var retrieve6 = JSON.parse(localStorage.getItem("06:00 pm"))
    six.val(retrieve6);
}

//code to background colors on items that are current and in the future
function colorCoded () {
    $(".form-control").each(function () {
        var timeDay = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        // console.log(timeDay);
        // console.log(hour);

        //use if to be able to use "this" to add class
        if (hour > timeDay) {
            $(this).addClass("past");
        } else if (hour < timeDay) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
}

$(document).ready(function() {
    retrievePage()
    colorCoded()

// save to Local Storage
$(".saveBtn").on("click", function() {
    apptInput = $(this).siblings(".form-control").val().trim();
    console.log(apptInput);
    time = $(this).siblings(".input-group-prepend").text().trim();
    console.log(time);
    localStorage.setItem(time, JSON.stringify(apptInput));

})
  // Button for clear the day
$("#clearDay").on("click", function() {
    localStorage.clear();
    retrivePage()
    // console.log("#clearday");
}) 

});


//comparing code
