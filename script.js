var currentDate = moment().format("LLLL");
    console.log(currentDate);
    $(".lead").append(currentDate);

$(".saveBtn").on("click", function(){
    console.log("I have clicked the button");
    //grab the value, and the time, set both to separate variables and tell it to grab 
    //grab description in one variable and time in another, and set
//     to local storage
    var thisVal = $(this).siblings(".description").val();
    var thisBlock = $(this).parent().attr("id");
    localStorage.setItem(thisVal, JSON.stringify("thisVal"));
    localstorage.setItem(thisBlock, JSON.stringify("thisBlock"));
});


// $(".description").val(localStore.getItem("description"));(localStorage.getItem(thisVal, JSON.parse("thisVal"));
// localStorage.getItem(thisBlock, JSON.parse("thisBlock"));


function hourUpdater(){
    var currentHour = moment().hours();
    //loop over timeblocks
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);

        if (currentHour > blockHour) {
            $(this).addClass("past");
        }
        else if (currentHour === blockHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}

$("#hour-9 .description").val(localStorage.getItem("#hour-9"));
$("#hour-10 .description").val(localStorage.getItem("#hour-10"));
$("#hour-11 .description").val(localStorage.getItem("#hour-11"));
$("#hour-12 .description").val(localStorage.getItem("#hour-12"));
$("#hour-13 .description").val(localStorage.getItem("#hour-13"));
$("#hour-14 .description").val(localStorage.getItem("#hour-14"));
$("#hour-15 .description").val(localStorage.getItem("#hour-15"));
$("#hour-16 .description").val(localStorage.getItem("#hour-16"));
$("#hour-17 .description").val(localStorage.getItem("#hour-17"));
$("#hour-18 .description").val(localStorage.getItem("#hour-18"));
$("#hour-19 .description").val(localStorage.getItem("#hour-19"));
$("#hour-20 .description").val(localStorage.getItem("#hour-20"));
$("#hour-21 .description").val(localStorage.getItem("#hour-21"));
$("#hour-22 .description").val(localStorage.getItem("#hour-22"));
$("#hour-23 .description").val(localStorage.getItem("#hour-23"));
$("#hour-24 .description").val(localStorage.getItem("#hour-24"));
$("#hour-1 .description").val(localStorage.getItem("#hour-1"));
$("#hour-2 .description").val(localStorage.getItem("#hour-2"));
$("#hour-3 .description").val(localStorage.getItem("#hour-3"));
$("#hour-4 .description").val(localStorage.getItem("#hour-4"));
$("#hour-5 .description").val(localStorage.getItem("#hour-5"));
$("#hour-6 .description").val(localStorage.getItem("#hour-6"));
$("#hour-7 .description").val(localStorage.getItem("#hour-7"));
$("#hour-8 .description").val(localStorage.getItem("#hour-8"));

hourUpdater();

$(".description").val().trim();