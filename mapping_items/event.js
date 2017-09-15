var nodecount = 0;
 nodescss = 'clip-path: polygon( ';
	$('#parent').on('click',function(e)
	{	
		var mouseX = e.pageX;
		var mouseY = e.pageY;
		console.log(mouseX+','+mouseY);
		var offsetx = $('#parent').offset().left;
		var offsety = $('#parent').offset().top;
		console.log(offsetx+','+offsety);
		var width=$('#parent').width();
		var height=$('#parent').height();
		console.log(width+','+height);
		var shapesmouseX = mouseX - offsetx;
		var shapesmouseY = mouseY - offsety;
		var mousepercentX = shapesmouseX / width;
 	 	var mousepercentY = shapesmouseY / height;
 	 	var finalmouseX = (mousepercentX) * 100 ;
  		var finalmouseY = (mousepercentY) * 100 ;
  		var normalisedX = parseFloat(finalmouseX).toFixed(3);
  		var normalisedY = parseFloat(finalmouseY).toFixed(3);
  		nodecount = nodecount+1;
  		if (nodecount < 3) {
    	nodescss = nodescss + normalisedX + '% ' + normalisedY + '% ,';
  } else  
  	if (nodecount == 3) {
    nodescss = nodescss + normalisedX + '% ' + normalisedY + '% );';
    alert(nodescss);
    nodescss = 'clip-path: polygon( ';
    nodecount = 0;
  }   
	});
function change()
{
	setInterval(function(){
		$('#parent').removeClass('parent');
	setTimeout(function(){
		$('#parent').addClass('change');
		console.log($('#parent').class);
	})
	},1000)
};