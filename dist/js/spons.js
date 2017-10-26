var spons = [
    {
        name: "OnePlus",
        title: "Title Sponsor",
        logo: "img/spons/oneplus.svg"
    },
    {
        name: "VH1",
        title: "Associate Title Sponsor",
        logo: "img/spons/vh1.png"
    },
    {
        name: "Comedy Central",
        title: "Associate Title Sponsor",
        logo: "img/spons/comedy-central.jpg"
    },
    {
        name: "Marshall",
        title: "Powered By",
        logo: "img/spons/marshall.jpg"
    },
    {
        name: "Droom",
        title: "N2O Powered By",
        logo: "img/spons/droom.jpg"
    },
    {
        name: "Living Talent",
        title: "Talent Partner",
        logo: "img/spons/living-talent.png"
    },
    {
        name: "Honda",
        title: "Riding Partner",
        logo: "img/spons/honda.jpg"
    },
    {
        name: "Hewlett-Packard",
        title: "Technology Partner",
        logo: "img/spons/hp.png"
    },
    {
        name: "ISIC",
        title: "Student Partner",
        logo: "img/spons/isic.jpg"
    },
    {
        name: "Embassy of Israel",
        title: "International Partner",
        logo: "img/spons/israel-embassy.png"
    },
    {
        name: "Embassy of Israel",
        title: "International Partner",
        logo: "img/spons/israel-2.png"
    },
    {
        name: "Embassy of Portugal",
        title: "International Partner",
        logo: "img/spons/portugal-embassy.png"
    },
    {
        name: "Whack",
        title: "YouTube Partner",
        logo: "img/spons/whack.png"
    },
    {
        name: "Saavn",
        title: "Streaming Partner",
        logo: "img/spons/saavn.png"
    },
    {
        name: "Paisa Wapas",
        title: "Cashback Partner",
        logo: "img/spons/paisa-wapas.png"
    },
    {
        name: "The Incredible Photographers",
        title: "Photography Partner",
        logo: "img/spons/the-incredible-photographers.jpg"
    },
    {
        name: "Furtados",
        title: "Instrument Partner",
        logo: "img/spons/furtados.jpg"
    },
    {
        name: "WooHoo",
        title: "Standup Soapbox Partner",
        logo: "img/spons/woohoo.svg"
    },
    {
        name: "Anahad Foundation",
        title: "Tarang Associate Partner",
        logo: "img/spons/anahad.png"
    }
];

var medias = [
  {
      name: "ATKT",
      title: "Media Partner",
      logo: "img/spons/atkt.png"
  },
  {
      name: "9xO",
      title: "Media Partner",
      logo: "img/spons/9xo.png"
  },
  {
      name: "InShorts",
      title: "Media Partner",
      logo: "img/spons/inshorts.png"
  },
  {
      name: "Student Stories",
      title: "Media Partner",
      logo: "img/spons/student-stories.png"
  },
  {
      name: "The Week",
      title: "Media Partner",
      logo: "img/spons/the-week.png"
  },
  {
      name: "DEARC",
      title: "Media Partner",
      logo: "img/spons/dearc.png"
  },
];

for (var s = 0; s < spons.length; s++) {
  var add = "";
	add +=
	'<div class = "person">\
		<center>\
			<div class = "person-pic">\
				<div class = "pic" style = "background-image:url('+spons[s].logo+'); background-size: contain"></div>\
			</div>\
			<div class = "person-mail">'+spons[s].title+'</div>\
			<div class = "person-number">'+spons[s].name+'</div>\
		</center>\
	</div>';
  sponsors_wrapper.innerHTML += add;
}

var med = "<div id=\"media\">";
for (var m = 0; m < medias.length; m++) {
  med += "<div class=\"m\" style=\"background-image:url("+medias[m].logo+")\"></div>";
}
med += "</div><div class=\"med person-mail\">Media Partners</div>";

sponsors_wrapper.innerHTML += med;

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
