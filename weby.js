// select the icons and message areas
const icons = document.querySelectorAll(".icon");
const message = document.getElementById("message");

//display a meassage when icon is presssed
icons.forEach(function(icon) {
    icon.addEventListener("click",function() {
        message.textContent=icon.dataset.message;
    });
});