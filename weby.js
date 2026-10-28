// select the icons and message areas
const icons = document.querySelectorAll(".icon");
const message = document.getElementById("message");
const music = document.getElementById("music");

//display a meassage when icon is presssed
icons.forEach(function(icon) {
    icon.addEventListener("click",function() {
        message.textContent=icon.dataset.message;

        //Play music when music icon is presssed
        if(icon.querySelector("span"),textContent==="🎵") {
            music.play().catch(function() {
                message.textContent = "EVEN YOUT MUSIC DOESN'T WANT TO HELP YOU";
            });
        }
    });
});