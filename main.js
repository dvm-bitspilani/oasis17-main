/*Animating the form*/

var fields = $('.field');
var index = 0;	
var topPadding = -100;
var wrapper = $('.wrapper');

// To make a field active
function changeActiveField(){
	$('.active').removeClass('active');
	var activeField = $('.field:eq(' + index + ')')
	activeField.addClass('active');	
	activeField.find('input').focus();
	// console.log("changeActiveField")
}

// To scroll to a particular field 
function scrollToActiveField(field){
	console.log($(field),$(field).index())
	var newIndex = $(field).index();
	// console.log(newIndex)
	if(newIndex != index){
		index = newIndex;
		var offset = $(field).offset().top;
		var screen  = $('html,body');
		screen.animate({scrollTop: screen.scrollTop() + offset + topPadding}, 300)
		// console.log("scrollToActiveField")
		changeActiveField();
	}
}

$(document).ready(function(){
 	
  // To move to a particular field on focusing on an input
  	var inputs = $('.field input');

  	inputs.focus(function(){
  		console.log("focuscallback")
    	scrollToActiveField($(this).parent().parent());
  	});

  	// To move to next field on keydown or Enter
  	var temp;
  	inputs.keydown(function(event) {
    	if ((event.keyCode === 13||event.keyCode === 40) && this.validity.valid) { 
  			console.log("keydown")
    	   	var newIndex = inputs.index(this) + 1;
    	   	console.log(inputs.length)
        	if (newIndex < inputs.length) {
          		temp = inputs.eq(newIndex);
          		console.log(temp)
          		temp.focus();
        	}
      }
      if(event.keyCode === 38){
      		newIndex = inputs.index(this) - 1;
      		if(newIndex >= 0){
      			temp = inputs.eq(newIndex);
      			temp.focus();
      		}
      }
  	});
  	
  	$('.field').click(function(){
  		scrollToActiveField(this);
  		console.log("click")
  	})
  	// To make the first field active
  	changeActiveField();

  	/*AJAX Calls*/
  	$('#register_form').submit(function(){
  		var data = {}
  		var inputs = $('input');
  		var baseUrl = "/";
  		$.each(inputs,function(index,key){
  			data[key.name] = key.value;
  		})

  		$.ajax({
  			method:"POST",
  			url:baseUrl,
  			data:data,
  		}).success(function(response){
  			console.log(response.data['message']);
  		});
  	})
})