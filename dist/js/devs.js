var devs = [
	{
	  name: "Chinmay Pandhare",
	  team: "Frontend Developer",
      link1: "https://github.com/ccpandhare",
      image1: "img/github.svg",
      link2: "mailto:pandharechinmay882@gmail.com",
      image2: "img/email.svg",
      link3: "https://linkedin.com/in/ccpandhare",
      image3: "img/linkedin.svg",
	  photo: "img/chinmay.jpg"
    },
    {
      name: "Madhur Wadhwa",
      team: "Graphic Design",
      link1: "https://dribbble.com/madhurw7",
      image1: "img/dribbble.svg",
      link2: "https://behance.net/madhurw7",
      image2: "img/behance.svg",
      link3: "mailto:madhurw7official@gmail.com",
      image3: "img/email.svg",
      photo: "img/madhur.jpg"
    },
    {
        name: "Megh Thakkar",
        team: "Backend Developer",
        link1: "https://github.com/Megh-Thakkar",
        image1: "img/github.svg",
        link2: "mailto:megh.1211@gmail.com",
        image2: "img/email.svg",
        link3: "https://www.linkedin.com/in/megh-thakkar-b0531295/",
        image3: "img/linkedin.svg",
        photo: "img/gujju.png"
    },
    {
        name: "Tushar Goel",
        team: "Backend Developer",
        link1: "https://github.com/tushargoel1",
        image1: "img/github.svg",
        link2: "f2016023@pilani.bits-pilani.ac.in",
        image2: "img/email.svg",
        link3: "https://www.linkedin.com/in/tushar-goel-254a66147/",
        image3: "img/linkedin.svg",
        photo: "img/tushar.jpg"
    },
];

for (var d in devs) {
	dev_wrapper.innerHTML +=
	'<div class = "person">\
		<center>\
			<div class = "person-pic">\
				<div class = "pic" style = "background-image:url('+devs[d].photo+')"></div>\
                <div class = "devlinks">\
                    <span class="devlink" style="background-image: url('+devs[d].image1+')" onclick="window.open(\''+devs[d].link1+'\')"></span>\
                    <span class="devlink" style="background-image: url('+devs[d].image2+')" onclick="window.open(\''+devs[d].link2+'\')"></span>\
                    <span class="devlink" style="background-image: url('+devs[d].image3+')" onclick="window.open(\''+devs[d].link3+'\')"></span>\
                </div>\
			</div>\
			<div class = "person-mail">'+devs[d].name+'</div>\
			<div class = "person-number">'+devs[d].team+'</div>\
		</center>\
	</div>';
}

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
