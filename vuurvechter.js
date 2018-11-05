// Execute function 
window.onscroll = function () { stickyNav() };

// Get the head
let nav = document.getElementById("navigation");
// Get the offset position of the nav
let sticky = nav.offsetTop;

// add the classes and change when offset reaches
function stickyNav() {
    if (window.pageYOffset >= sticky) {
      nav.classList.add("sticky")
      document.getElementById("logo").style.width = "17%";
      document.getElementById("list").style.margin = "-20px";
    } else {
      nav.classList.remove("sticky");
      document.getElementById("logo").style.width = "30%";
      document.getElementById("list").style.margin = "0px";
    }
}

// Declare messages
let nice = "Erg leuk spel!"
let bad = "Dit spel heeft flink wat verbeteringen nodig."

// Declare buttons
let buttonNice = document.getElementById("nice");
let buttonBad = document.getElementById("bad");

// different functions
buttonNice.onclick = function (){
    document.getElementById("subject").value = nice;
}
  
buttonBad.onclick = function (){
    document.getElementById("subject").value = bad;
}

// little game function
let buttonStart = document.getElementById("start")
let differentFires = ["fire1", "fire2", "fire3", "fire4", "fire5",]
let randomFire = differentFires[Math.floor(Math.random()*differentFires.length)];



function game(){
  document.getElementById(`${randomFire}`).style.opacity = "1";
  console.log(`${randomFire}`)
}

game()