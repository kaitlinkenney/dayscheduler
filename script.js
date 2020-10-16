var currentDate = moment().format("LLLL");
    console.log(currentDate);

$(".saveBtn").on("click", function(){
    console.log("I have clicked the button");
    //grab the value, and the time, set both to separate variables and tell it to grab
    $(this).val
    //the information (this) grab description in one variable and time in another, and set
//     to local storage
})


function hourUpdater(){
    var currentHour = moment().hours();
    //loop over timeblocks
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);

        if (currentHour > blockHour) {
            $(this).addClass("past");
        }
        else if (currentHour === blockHour) {
           // remove class past
            $(this).removeClass('past');
            $(this).addClass("present");
        }
        else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass("future");
        }
    })
}
hourUpdater();

console.log("Javascript is functioning correctly!!")





$(".description").val().trim(),


localStorage.setItem("textareaInput", JSON.stringify("textareaInput"));

var textArea = JSON.parse(localStorage.getItem("textareaInput"));
// var finalText = textArea[textareaInput.length - 1];
