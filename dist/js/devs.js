var devs = [
    {
      name: "Madhur Wadhwa",
      team: "Graphic Designer",
      link1: "https://dribbble.com/madhurw7",
      image1: "img/dribbble.svg",
      link2: "https://behance.net/madhurw7",
      image2: "img/behance.svg",
      link3: "mailto:madhurw7official@gmail.com",
      image3: "img/email.svg",
      photo: "img/madhur.jpg"
    },
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
        link2: "mailto:f2016023@pilani.bits-pilani.ac.in",
        image2: "img/email.svg",
        link3: "https://www.linkedin.com/in/tushar-goel-254a66147/",
        image3: "img/linkedin.svg",
        photo: "img/tushar.jpg"
    },
    {
        name: "Neethu Maria Joy",
        team: "Frontend Developer",
        link1: "https://github.com/roboneet",
        image1: "img/github.svg",
        link2: "mailto:f2016119@pilani.bits-pilani.ac.in",
        image2: "img/email.svg",
        link3: "https://www.linkedin.com/in/neethu-maria-joy-653655128/",
        image3: "img/linkedin.svg",
        photo: "img/neethu.jpg"
    },
    {
        name: "Mihir Dharap",
        team: "Graphic Designer",
        link1: "https://instagram.com/_msd_737",
        image1: "img/dribbble.svg",
        link2: "https://www.linkedin.com/in/mihir-dharap-b7309b95/",
        image2: "img/linkedin.svg",
        link3: "mailto:msdharap@gmail.com",
        image3: "img/email.svg",
        photo: "img/mihir.jpg"
    },
    {
        name: "Navjot Bansal",
        team: "Frontend Developer",
        link1: "https://github.com/NavjotBansal",
        image1: "img/github.svg",
        link2: "mailto:f2016070@pilani.bits-pilani.ac.in",
        image2: "img/email.svg",
        link3: "https://www.linkedin.com/in/navjot-bansal-a67b87137/",
        image3: "img/linkedin.svg",
        photo: "img/navjot.jpg"
    },
    {
        name: "Pallav Soni",
        team: "Frontend Developer",
        link1: "https://github.com/pallav100",
        image1: "img/github.svg",
        link2: "mailto:devpallavsoni@gmail.com",
        image2: "img/email.svg",
        link3: "https://www.linkedin.com/in/pallav-soni-67985214b/",
        image3: "img/linkedin.svg",
        photo: "img/pallav.jpg"
    },
    {
        name: "Nilay Arora",
        team: "Frontend Developer",
        link1: "https://github.com/Nilay117",
        image1: "img/github.svg",
        link2: "mailto:f2016119@pilani.bits-pilani.ac.in",
        image2: "img/email.svg",
        link3: "https://www.linkedin.com/in/nilayarora117/",
        image3: "img/linkedin.svg",
        photo: "img/nilay.jpg"
    },
    {
        name: "Manan Agarwal",
        team: "Design Volunteer",
        link1: "https://github.com/MananAgarwal",
        image1: "img/github.svg",
        link2: "mailto:f2016607@pilani.bits-pilani.ac.in",
        image2: "img/email.svg",
        link3: "https://www.linkedin.com/in/manan-agarwal-98a881134/",
        image3: "img/linkedin.svg",
        photo: "img/manan.jpg"
    },
    {
      name: "Abhijit Kumar",
      team: "Backend Developer",
      link1: "https://github.com/abhi20161997",
      image1: "img/github.svg",
      link2: "mailto:f2016826@pilani.bits-pilani.ac.in",
      image2: "img/email.svg",
      photo: "img/abhijit.jpg"
    }
];

for (var d in devs) {
  var add = "";
	add +=
	'<div class = "person">\
		<center>\
			<div class = "person-pic">\
				<div class = "pic" style = "background-image:url('+devs[d].photo+')"></div>\
                <div class = "devlinks">\
                    <span class="devlink" style="background-image: url('+devs[d].image1+')" onclick="window.open(\''+devs[d].link1+'\')"></span>\
                    <span class="devlink" style="background-image: url('+devs[d].image2+')" onclick="window.open(\''+devs[d].link2+'\')"></span>';
                    if(devs[d].hasOwnProperty('image3'))
                    add += '\
                    <span class="devlink" style="background-image: url('+devs[d].image3+')" onclick="window.open(\''+devs[d].link3+'\')"></span>';
                    add += '\
                </div>\
			</div>\
			<div class = "person-mail">'+devs[d].name+'</div>\
			<div class = "person-number">'+devs[d].team+'</div>\
		</center>\
	</div>';
  dev_wrapper.innerHTML += add;
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
