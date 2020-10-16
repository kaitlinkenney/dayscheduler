var currentDate = moment().format("LLLL");
    console.log(currentDate);
    $(".lead").append(currentDate);

$(".saveBtn").on("click", function(){
    console.log("I have clicked the button");
    //grab the value, and the time, set both to separate variables and tell it to grab
    var thisVal = $(this).attr(".description");
    var thisBlock = $(this).attr(".time-block");
    localStorage.setItem(thisVal, JSON.stringify("thisVal"));
    localstorage.setItem(thisBlock, JSON.stringify("thisBlock"));
    //the information (this) grab description in one variable and time in another, and set
//     to local storage
});


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
hourUpdater();

$(".description").val().trim();