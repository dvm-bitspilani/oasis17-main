$(document).ready(function(){

	var classNames = ["music", "art", "dance"];
	var text = ["Music","Art", "Dance"];
	var background = ["#00a6f8", "#009688", "#d0bb57"];
	var i = 0;

	function init(){
		setScreen(0)
	}
	init();

	$('#change li[data-name=prev]').click(function(){
		$('#polygon_wrapper').removeClass();
		i = (--i >= 0)?i:classNames.length + i;
		setScreen(i)	
		
	})

	$('#change li[data-name=next]').click(function(){
		$('#polygon_wrapper').removeClass();
		i = (++i)%classNames.length;
		setScreen(i)
		
	})

	function setScreen(i){
		$('#polygon_wrapper').addClass(classNames[i]);	
		$('#name').text(text[i]);
		$('body').css('background', background[i])
	}
})
