// Styling
function handleResize(){
  document.body.style.height = window.innerHeight+"px";
}
window.addEventListener("load",handleResize);
handleResize();
window.addEventListener("orientationchange",handleResize);
window.addEventListener("resize",handleResize)

// Handling Character Transitions
var Box = document.querySelector('#Box')
var background = document.querySelector('#events_wrapper');
var tagline = document.querySelector('#TagLine')
var eventname = document.querySelector('#EventName')
var characters = [
  "Johnny","Deadpool","Batman","Ezio","Goku",
  "Rick","Minion","Pikachu",
  "Dexter","V","Harry"
];
var event_names = {
  "Johnny":["Choreo", "Dessert Duel" ,"Razzmataaz", "Street Dance", "Tandav"],
  "Deadpool": ["Bluff Master", "Cocktail", "Competitive Contact", "Mock Parliment", "Poetry Slam", "Pun Wars", "Standup Soapbox", "Taboo", "Wit in a Minute"],
  "Batman": ["Beg Borrow Steal", "Mr. and Mrs. Oasis", "Protest Out of Waste", "Treasure Hunt", "Triathlon"],
  "Ezio": ["Fashion Parade"],
  "Goku": ["Exposure", "Oasis through my Eyes"],
  "Rick": ["Andholika", "Axetacy", "Drums Duel", "Free Jam", "Pitch Perfect", "Rap Wars", "Rocktaves", "Swaranjali", "Tarang"],
  "Minion": ["Mime", "Stage Play","Street Play"],
  "Pikachu": ["Canvas Street","Contrasto", "Splash"],
  "Dexter": ["Exposure","Online Quiz","Word Wars"],
  "V": ["Antakshari", "Blab", "Online Quiz", "Entertainment Quiz", "Filmy Muqabla", "Music Quiz", "Oasis Quiz","Scifi Quiz", "Theme Quiz"],
  "Harry": ["Ad/Poster Making", "Apt to Act", "Metamorphosis", "Story Completion", "Trailer Making"]
}
    // , ,[""]
function get(dir) {
  var curr = Box.className;
  var icurr = characters.indexOf(curr);
  if(icurr != -1) {
    var raw = icurr + dir;
    var loop = raw % characters.length;
    return (loop<0)?(loop+characters.length):(loop);
  }
  else return "Johnny";
}

function changeChar(dir){
  console.log("called");
  var direction = (dir==-1)?"rtl":"ltr";
  console.log(direction)
  var character = characters[get(dir)];
  var props = charprops[character];
  document.body.className = direction;
  background.style.background = props.background;
  Box.className = character;
  tagline.innerHTML = "";
  for (var tag in props.tagline){
    tagline.innerHTML += "<span>"+props.tagline[tag]+"</span>";
  }
  eventname.innerHTML = "<span>"+props.eventname+"</span>";
  var string = "";
  console.log(character, event_names[character], event_names)
  for(var i = 0; i< event_names[character].lenght; i++){
    
    string += "<li  class='evt'><h1 class='name dust'>"+event_names[character][i]+"</h1><p id='bottom'></p></li>";
    console.log(string);
  }
  console.log(eventnames__ , string )
  eventnames__.innerHTML = string;
}

document.body.onkeydown = function(e) {
  if(e.keyCode == 37)
    changeChar(-1);
  else if(e.keyCode == 39)
    changeChar(1);
}

var startX = 0;
var delta;
var found = 0;

document.body.addEventListener('touchstart', function(e){
  found = 0;
  startX = parseInt(e.changedTouches[0].pageX);
});
document.body.addEventListener('touchmove', function(e){
  if(found==1) return;
  var pageX = parseInt(e.changedTouches[0].pageX)
  delta = pageX - startX;
  if (delta > 0) {
    found = 1;
    changeChar(-1);
  }
  else if(delta < 0) {
    found = 1;
    changeChar(1);
  }
});
document.body.addEventListener('click',function(e){
  var className = e.target.className;
  console.log(className);
  if(className == "change next")
    changeChar(1);
  else if(className == "change prev")
    changeChar(-1);
});

changeChar(0);
/*sponsors about animation*/
function hide_about()
{   var back = document.querySelector(".back");
    var about = document.querySelector(".about_cont");
    var cont = document.querySelector(".container");
    about.className = "hide";
    setTimeout(function(){
      about.className = "hide_toggle";
    },150);
}
function hide()
{ var back = document.querySelector(".back");
  var spons = document.querySelector(".sponsors_wrapper");
  var cont = document.querySelector(".sponsors_container");
  cont.className = "hide_toggle";
    spons.className = "hide";
    setTimeout(function(){
      spons.className = "hide_toggle";
    },200);
}

// function show eventsvar disable_cross = false;
ViewEvent.addEventListener("click",function(){
  document.querySelector(".lightbox").style.top = "0%";
  close_event.style.display = "block";
});
close_event.addEventListener("click",function(){
  document.querySelector(".lightbox").style.top = "100%";
  close_event.style.display = "none";
});