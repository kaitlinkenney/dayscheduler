var $timeBlock = $(".time-block");
var row = $(".row");
var blockHour = $(".hour");
var textArea = $(".description");
var saveBtn = $(".saveBtn");

//if current hour is greater than the block hour then do this-->
var currentHour = moment.utc([2011, 0, 1, 8]);
a.hours(); // 8 UTC
a.local();
a.hours(); // 0 PST

if (currentHour > blockHour) {
    $(this).addClass("past");
}
else if (currentHour < blockHour) {
   // remove class past
    Element.past.remove('hidden');
    $(this).addClass("future");
}
else (currentHour === blockHour) {
    Element.past.remove('hidden');
    Element.future.remove('hidden');
    $(this).addClass("present");
}


$(".saveBtn").on("click", function(){
    console.log("I have clicked the button");
    $(textArea.val());
    localStorage.setItem("texArea", JSON.stringify("textArea"));
})

var textArea = JSON.parse(localStorage.getItem("textArea"));
var finalText = textArea[textArea.length - 1];
