// JS for Desktops and large screens
if($(window).width() >= 992){
console.log("big js");

  /*Animating the form*/
var scrollCheck = 0;
var index = 0;  
var topPadding = -100;
var fields,wrapper;
var halfHeight = $(window).height()/2;

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
    screen.animate({scrollTop: screen.scrollTop() + offset - halfHeight + topPadding}, 300)
    // console.log("scrollToActiveField")
    scrollCheck = 0;
    changeActiveField();
  }
}

$(document).ready(function(){

fields = $('.field');
wrapper = $('.wrapper');

  //Toggle on scrolling
  $(window).scroll(function(e){
    if(scrollCheck == 0)
    {
      var scroll = $(window).scrollTop();
      for(var i = 0;i < fields.length;i++)
      {
        if(i == fields.length - 1)
        {
          if (scroll >= $(fields[i]).offset().top + topPadding) 
          {
              index = i;
              changeActiveField();
              continue;
          }
        }
        if((scroll >= $(fields[i]).offset().top - halfHeight + topPadding) && (scroll <= $(fields[i+1]).offset().top - halfHeight+topPadding))
        { 
            index = i;
            changeActiveField();
        }
      }
    }
  })

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
         scrollCheck = 1;
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
          scrollCheck = 1;
          newIndex = inputs.index(this) - 1;
          if(newIndex >= 0){
            temp = inputs.eq(newIndex);
            temp.focus();
          }
      }
    });
    
    $('.field').click(function(){
      scrollCheck = 1;
      scrollToActiveField(this);
      console.log("click")
    })
    // To make the first field active
    changeActiveField();
  })
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
}

  /*AJAX Calls*/
$(document).ready(function(){
  

})

// JS for small and mobile screens
if($(window).width() < 992){
$(document).ready(function(){
console.log("small js");
var index = 0;
var fields = $('.field');

function changeActiveField(){
      $('.active').css({"display":"none"});
      $('.active').removeClass('active');
      $(fields[index]).fadeIn(400);
      $(fields[index]).addClass('active');
}
  fields = $('.field');
  fields.css("display","none");
  $('#next-btn').click(function(){    
    index++;
    if(index == fields.length - 1){
      $('#next-btn').css({"display":"none"});
      $('#submit-btn').css({"display":"block"});
    }
    changeActiveField();
  })

  $('#back-btn').click(function(){
    if(index > 0){
    if(index == fields.length - 1){
      $('#next-btn').css({"display":"block"});
      $('#submit-btn').css({"display":"none"});
    }
    index--;
    changeActiveField();
  }
  })

  changeActiveField();

  $('#submit-btn').click(function(){
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
}