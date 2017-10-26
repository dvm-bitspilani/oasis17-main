// Styling
var current_category = "";
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
// var event_names = {
//   "Johnny":["Choreo", "Dessert Duel" ,"Razzmataaz", "Street Dance", "Tandav"],
//   "Deadpool": ["Bluff Master", "Cocktail", "Competitive Contact", "Mock Parliment", "Poetry Slam", "Pun Wars", "Standup Soapbox", "Taboo", "Wit in a Minute"],
//   "Batman": ["Beg Borrow Steal", "Mr. and Mrs. Oasis", "Protest Out of Waste", "Treasure Hunt", "Triathlon"],
//   "Ezio": ["Fashion Parade"],
//   "Goku": ["Exposure", "Oasis through my Eyes"],
//   "Rick": ["Andholika", "Axetacy", "Drums Duel", "Free Jam", "Pitch Perfect", "Rap Wars", "Rocktaves", "Swaranjali", "Tarang"],
//   "Minion": ["Mime", "Stage Play","Street Play"],
//   "Pikachu": ["Canvas Street","Contrasto", "Splash"],
//   "Dexter": ["Exposure","Online Quiz","Word Wars"],
//   "V": ["Antakshari", "Blab", "Online Quiz", "Entertainment Quiz", "Filmy Muqabla", "Music Quiz", "Oasis Quiz","Scifi Quiz", "Theme Quiz"],
//   "Harry": ["Ad/Poster Making", "Apt to Act", "Metamorphosis", "Story Completion", "Trailer Making"]
// }
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
  // console.log(direction)
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
  
  
  eventnames__.innerHTML = event_list_html(props.eventname);
  
  
  
}

function event_list_html(category){
  var string = "";
  if(window.events_data){
    var name = window.__mapName__(category);

    current_category = window.events_data[name];
    
    for(var k in current_category){
      string += "<li  class='evt'><h1 class='name dust'>"+k.split("_").join(" ")+"</h1></li>";
    }
  }
  return string;
}
window.changeChar = changeChar;
document.body.onkeydown = function(e) {
  if(lightbox_open_status)return;
  if(e.keyCode == 37)
    changeChar(-1);
  else if(e.keyCode == 39)
    changeChar(1);
}

var startX = 0, startY;
var deltaX, deltaY;
var found = 0;

document.body.addEventListener('touchstart', function(e){
  found = 0;
  startX = parseInt(e.changedTouches[0].pageX);
  startY = parseInt(e.changedTouches[0].pageY);
});
document.body.addEventListener('touchmove', function(e){
  // alert(e.target.id);
  if(lightbox_open_status)return;
  if(found==1) return;
  var pageX = parseInt(e.changedTouches[0].pageX)
  var pageY = parseInt(e.changedTouches[0].pageY)
  deltaX = pageX - startX;
  deltaY = pageY - startY;
  if(Math.abs(deltaX)< Math.abs(deltaY))return;
  if (deltaX > 0) {
    found = 1;
    changeChar(-1);
  }
  else if(deltaX < 0) {
    found = 1;
    changeChar(1);
  }
});
document.body.addEventListener('click',function(e){
  var className = e.target.className;
  // console.log(className);
  // console.log('click')
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


ViewEvent.addEventListener("click",showEvent);
Box.addEventListener("click",showEvent);

// function show eventsvar disable_cross = false;
function showEvent(){
  document.querySelector(".lightbox").style.top = "0%";
  close_event.style.display = "block";
  close_event.style.opacity = 1;
  fadeIn(document.getElementsByClassName('lightbox')[0]);
  fadeIn(close_event, null, "flex");
  lightbox_open_status = true;
  setTimeout(()=>{close_event.style.display = "flex";}, 10);
}

close_event.addEventListener("click",function(){
  if(!accordian_open){
    // document.querySelector(".lightbox").style.top = "100%";
    // document.getElementsByClassName('lightbox')[0].style.display = "none"
    fadeOut(document.getElementsByClassName('lightbox')[0], function(){
      document.querySelector(".lightbox").style.top = "100%";
    })
    lightbox_open_status = false;
    fadeOut(close_event, null,"flex" );
  }else{
    closeAccordian();
  }
});

eventnames__.addEventListener('click', function(e){
  var select = (e.target.className == "name dust");
  if(select){
    var name_of_event = (e.target.innerText);
    var url = 'https://bits-oasis.org/2017/api/events/' + current_category[window.__mapName__(name_of_event)].event_id;
    var event_info_request = new XMLHttpRequest();
    event_info_request.open("GET", url);
    event_info_request.addEventListener("load", a => {
      // console.log(a);
      if(a.currentTarget.readyState == 4 && a.currentTarget.status == 200){
          let text = a.currentTarget.responseText;
          // console.log(text);
          var re_about = /"content":"(.*)","rules"/ig;
          html_about = re_about.exec(text)[1];
          
          html_rules = /"rules":"(.*)","category_name"/ig.exec(text)[1];
          html_rules_more = /"detail_rules":"(.*)","contact"/ig.exec(text)[1];
          
          contact_info = /"contact":"(.*)"/ig.exec(text)[1]
          // console.log(html_about, html_rules, contact_info)
          html_about = html_about.replace(/\\r\\n/ig, "<br>").replace(/\\t/ig, "<br>");
          html_rules = html_rules.replace(/\\r\\n/ig, "<br>").replace(/\\t/ig, "<br>");
          html_rules_more = html_rules_more.replace(/\\r\\n/ig, "<br>").replace(/\\t/ig, "<br>");

          about_info.getElementsByClassName('info_content')[0].innerHTML = html_about;
          rules_info.getElementsByClassName('info_content')[0].innerHTML = html_rules + "<br>" + html_rules_more;
          var contact_name = "";
          var contact_number = "";
          [contact_name, contact_number] = contact_info.split("-");
          details.getElementsByClassName('contact_name')[0].innerText = contact_info;
          // details.getElementsByClassName('contact_number')[0].innerText = contact_number;
          // console.log(eval(a.currentTarget.responseText.replace(html_text, "''")));

      }
    })
    event_info_request.addEventListener("progress", a => {
      // console.log(a);
    })
    event_info_request.addEventListener("error", a => {
      console.log(a);
    })
    event_info_request.send();
    about_info.getElementsByClassName('info_content')[0].innerHTML = "Loading";
    rules_info.getElementsByClassName('info_content')[0].innerHTML = "Loading";
    details.getElementsByClassName('contact_name')[0].innerText = "Loading";
    showAccordion(name_of_event);
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



[about_info, rules_info].forEach(function(ele){

  ele.addEventListener('click', function(){handleClick(ele)})
  ele.addEventListener('pointerdown', function(){handleClick(ele)})
  ele.addEventListener('touchstart', function(){handleClick(ele)})
})

function handleClick(ele){
  // console.log('clicked')
    var open = document.getElementsByClassName('open_info')[0];
    var old = open.className;
    open.className = old.replace('open_info', " ")
    // console.log( ele.getElementsByClassName('info_content')[0])
    var neww = ele.getElementsByClassName('info_content')[0].className;
    ele.getElementsByClassName('info_content')[0].className = neww + ' open_info'
}
[about_info.getElementsByTagName('div')[0], rules_info.getElementsByTagName('div')[0]].forEach(ele=>{
  ele.style.cursor= "pointer";
  ele.addEventListener('click', ()=>{

    // console.log(ele.parentElement)
    handleClick(ele.parentElement)
  })
  ele.addEventListener('pointerdown', ()=>{

    // console.log(ele.parentElement)
    handleClick(ele.parentElement)
  })
  ele.addEventListener('touchstart', ()=>{

    // console.log(ele.parentElement)
    handleClick(ele.parentElement)
  })
})

function addClass(el, name){
  el.className += " "+name;
}
function removeClass(el, name){
  el.className = el.className.replace(" " + name,'');
}

function fadeIn(el, callback = (()=>{}), display="block"){
  // console.log("fadeIn", el, callback, display);
  // el.style.opacity = 0;
  removeClass(el, 'fadeOut');
  removeClass(el, 'fadeIn');
  var initialpos = el.style.position;
  el.style.position = "absolute";

  el.style.display = display;
 
  addClass(el, 'fadeIn');
  setTimeout(function(){
    el.style.opacity = 1;
    // removeClass(el, 'fadeIn');
    el.style.top = "0";
    el.style.position = initialpos;
    if(callback)
      callback();
  } , 480)
}

window.__fadeIn__ = fadeIn;

function fadeOut(el, callback = (()=>{}), display = "block"){
  // console.log("fadeOut", el, callback, display);
  // el.style.opacity = 1;
  removeClass(el, 'fadeIn');
  removeClass(el, 'fadeOut');
  var initialpos = el.style.position;
  el.style.position = "absolute";
  el.style.top = "0";
  el.style.display = display;
  addClass(el, 'fadeOut');

  
  setTimeout(function(){
    el.style.opacity = 0;
    
    el.style.top = "100%";
    el.style.position = initialpos;
    el.style.display = "none";
    // removeClass(el, 'fadeOut');
    if(callback)
      callback();
  } , 480)

}

window.__fadeOut__ = fadeOut;