// Styling

var accordian_open = false;
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
var lightbox_open_status = false;
var characters = [
  "Johnny","Deadpool","Batman","Ezio","Goku",
  "Rick","Minion","Pikachu",
  "Dexter","V","Harry"
];
window.characters = characters;
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
  // console.log("called");
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
  // console.log(character, event_names[character], event_names)
  for(var i = 0; i< event_names[character].length; i++){
    string += "<li  class='evt'><h1 class='name dust'>"+event_names[character][i]+"</h1></li>";
    // console.log(string);
  }
  // console.log(eventnames__ , string )
  eventnames__.innerHTML = string;
}
window.changeChar = changeChar;
document.body.onkeydown = function(e) {
  if(lightbox_open_status)return;
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
  // alert(e.target.id);
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
  // console.log(className);
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
  close_event.style.opacity = 1;
  fadeIn(document.getElementsByClassName('lightbox')[0]);
  lightbox_open_status = true;
  setTimeout(()=>{close_event.style.display = "flex";}, 10);
});
close_event.addEventListener("click",function(){
  if(!accordian_open){
    // document.querySelector(".lightbox").style.top = "100%";
    // document.getElementsByClassName('lightbox')[0].style.display = "none"
    fadeOut(document.getElementsByClassName('lightbox')[0], function(){
      document.querySelector(".lightbox").style.top = "100%";
    })
    lightbox_open_status = false;
    fadeOut(close_event);
  }else{
    closeAccordian();
  }
});

eventnames__.addEventListener('click', function(e){
  var select = (e.target.className == "name dust");
  if(select){
    var name_of_event = (e.target.innerText);
    showAccordion(name_of_event);
    console.log(name_of_event)
  }

})


function showAccordion(name){
  accordian_open = true;
  // details.style.display = "block";
  // eventnames__.style.display = "none";
  details.getElementsByClassName('heading')[0].innerText = name;
  fadeOut(eventnames__,fadeIn(details));
  
  // document.getElementsByClassName('dummy')[0].style.display = "none";
}
function closeAccordian(){
  accordian_open = false;
  // details.style.display = "none";
  // eventnames__.style.display = "block";
  fadeOut(details, fadeIn(eventnames__));
  // document.getElementsByClassName('dummy')[0].style.display = "block";
}

var headers = [about_info, rules_info];

headers.forEach(function(ele){
  ele.addEventListener('click', function(e){
    var open = document.getElementsByClassName('open_info')[0];
    var old = open.className;
    open.className = old.replace('open_info', " ")
    // console.log( ele.getElementsByClassName('info_content')[0])
    var neww = ele.getElementsByClassName('info_content')[0].className;
    ele.getElementsByClassName('info_content')[0].className = neww + ' open_info'
  })
})


function addClass(el, name){
  el.className += " "+name;
}
function removeClass(el, name){
  el.className = el.className.replace(" " + name,'');
}

function fadeIn(el, callback = (()=>{})){
  // el.style.opacity = 0;
  removeClass(el, 'fadeOut');
  removeClass(el, 'fadeIn');
  el.style.display = "block";
  addClass(el, 'fadeIn');
  setTimeout(function(){
    el.style.opacity = 1;
    // removeClass(el, 'fadeIn');
    callback();
  } , 480)
}

window.__fadeIn__ = fadeIn;

function fadeOut(el, callback = (()=>{})){
  // el.style.opacity = 1;
  removeClass(el, 'fadeIn');
  removeClass(el, 'fadeOut');
  addClass(el, 'fadeOut');
  setTimeout(function(){
    el.style.opacity = 0;
    el.style.display = "none";
    
    
    // removeClass(el, 'fadeOut');
    callback();
  } , 480)

}

window.__fadeOut__ = fadeOut;