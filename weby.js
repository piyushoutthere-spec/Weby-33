// select the icons and message areas
const desktop = document.getElementById("desktop");
const warning = document.getElementById("warning");
const icons = document.querySelectorAll(".icon");
const message = document.getElementById("message");
const music = document.getElementById("music");

let ended = false;

//display a meassage when icon is presssed
icons.forEach(function(icon) {
    icon.addEventListener("click",function() {
        message.textContent=icon.dataset.message;

        //Play music when music icon is presssed
        if(icon.querySelector("span").textContent==="🎵") {
            music.play().catch(function() {
                message.textContent = "EVEN YOUT MUSIC DOESN'T WANT TO HELP YOU";
            });
        }
    });
});

//show warning after 15 seconds
setTimeout(function() {
    ended=true;

    //stop music n switch screen
    music.pause();
    music.currentTime=0;

    desktop.style.display="none";
    warning.style.display="flex";
    document.body.style.background="black";
},15000 );