for(i=0;i<8;i++){
	if(i%2 == 0){
		document.getElementsByClassName("person-mail")[i].style.background = "#ffe14a";
		document.getElementsByClassName("person-number")[i].style.background = "#ffe14a";
	}
	else{
		document.getElementsByClassName("person-mail")[i].style.background = "#00f5b2";
		document.getElementsByClassName("person-number")[i].style.background = "#00f5b2";
	}
}