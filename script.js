
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

$("#currentTime").text(moment().format("h:mm:ss a"));

var timeBlock = document.querySelector(".time-block")
var save = document.querySelector(".saveBtn")
var hours= [9,10,11,12,13,14,15,16,17];

function colorTracker() {
    var currentHour = moment().hour();

    $(".time-block").each(function () {
    var Hour = parseInt($(this).attr("id").split("hour")[1]);
    console.log(Hour, currentHour)

            if (Hour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (Hour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

$(".saveBtn").on("click", function () {
        console.log(this);
        var text = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
})

$("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));
    $("#hour19 .description").val(localStorage.getItem("hour19"));
    $("#hour20 .description").val(localStorage.getItem("hour20"));
    $("#hour21 .description").val(localStorage.getItem("hour21"));
    colorTracker()