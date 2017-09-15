// Styling

function handleResize(){
  background.style.height = window.innerHeight+"px";
  nav_wrapper.style.height = window.innerHeight+"px";
}
window.addEventListener("load",handleResize);
window.addEventListener("orientationchange",handleResize);
window.addEventListener("resize",handleResize)

// Handling Character Transitions
var box = document.querySelector('#box')
var background = document.querySelector('#background')
var tagline = document.querySelector('.tag-line')
var eventname = document.querySelector('.event-name')
var characters = [
  "Johnny","Deadpool","Batman",
  "Rick","Minion","Pikachu",
  "Dexter","V","Harry"
];
function get(dir) {
  var curr = box.className;
  var icurr = characters.indexOf(curr);
  if(icurr != -1) {
    var raw = icurr + dir;
    var loop = raw % characters.length;
    return (loop<0)?(loop+characters.length):(loop);
  }
  else return "Johnny";
}

function changeChar(dir){
  var direction = (dir==-1)?"rtl":"ltr";
  var character = characters[get(dir)];
  var props = charprops[character];
  document.body.className = direction;
  background.style.background = props.background;
  box.className = character;
  tagline.innerHTML = "";
  for (var tag in props.tagline){
    tagline.innerHTML += "<span>"+props.tagline[tag]+"</span>";
  }
  eventname.innerHTML = "<span>"+props.eventname+"</span>";
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

changeChar(0);
