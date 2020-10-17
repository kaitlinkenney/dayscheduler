var currentDate = moment().format("LLLL");
    console.log(currentDate);
    $(".lead").append(currentDate);

$(".saveBtn").on("click", function(){
    console.log("I have clicked the button");
    //grab the value, and the time, set both to separate variables and tell it to grab
    var thisVal = $(this).siblings(".description").val();
    var thisBlock = $(this).parent().attr("id");
    localStorage.setItem(thisVal, JSON.stringify("thisVal"));
    localstorage.setItem(thisBlock, JSON.stringify("thisBlock"));
        // console.log("thisBlock", JSON.stringify("thisBlock"));
    //the information (this) grab description in one variable and time in another, and set
//     to local storage
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


hourUpdater();

$(".description").val().trim();