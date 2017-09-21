function hide()
{ 	var back = document.querySelector(".back");
	var spons = document.querySelector(".sponsors_wrapper");
	var cont = document.querySelector(".sponsors_container");
	cont.className = "hide_toggle";
    spons.className = "hide";
    setTimeout(function(){
      spons.className = "hide_toggle";
    },200);
}
function hide_about()
{ var back = document.querySelector(".back");
    var about = document.querySelector(".about_cont");
    var cont = document.querySelector(".container");
    about.className = "hide";
    setTimeout(function(){
      about.className = "hide_toggle";
    },150);
}