var spons = [
    {
        name: "OnePlus",
        title: "Title Sponsor",
        logo: "spons/oneplus.svg"
    },
    {
        name: "Marshall",
        title: "Powered By",
        logo: "spons/marshall.jpg"
    },
    {
        name: "Hewlett-Packard",
        title: "Technology Partner",
        logo: "spons/hp.png"
    },
    {
        name: "Living Talent",
        title: "Talent Partner",
        logo: "spons/living-talent.png"
    },
    {
        name: "Comedy Central",
        title: "In Association With",
        logo: "spons/comedy-central.jpg"
    },
    {
        name: "ISIC",
        title: "Gold Sponsor",
        logo: "spons/isic.jpg"
    },
    {
        name: "ATKT",
        title: "Media Partner",
        logo: "spons/atkt.png"
    },
    {
        name: "The Week",
        title: "Media Partner",
        logo: "spons/the-week.png"
    },
    {
        name: "Whack",
        title: "Media Partner",
        logo: "spons/whack.png"
    },
    {
        name: "Embassy of Israel",
        title: "International Partner",
        logo: "spons/israel-embassy.png"
    },
    {
        name: "Embassy of Portugal",
        title: "International Partner",
        logo: "spons/portugal-embassy.png"
    },
    {
        name: "Saavn",
        title: "Streaming Partner",
        logo: "spons/saavn.png"
    },
    {
        name: "InShorts",
        title: "Media Partner",
        logo: "spons/inshorts.png"
    },
    {
        name: "Paisa Wapas",
        title: "Cashback Partner",
        logo: "spons/paisa-wapas.png"
    },
    {
        name: "Student Stories",
        title: "Media Partner",
        logo: "spons/student-stories.png"
    },
    {
        name: "Apollo Munich Insurance",
        title: "Platinum Sponsor",
        logo: "spons/apollo-munich.jpg"
    },
    {
        name: "WooHoo",
        title: "Standup Soapbox Partner",
        logo: "spons/woohoo.svg"
    },
    {
        name: "9xO",
        title: "Media Partner",
        logo: "spons/9xo.png"
    },
    {
        name: "Droom",
        title: "N2O Partner",
        logo: "spons/droom.jpg"
    },
    {
        name: "The Incredible Photographers",
        title: "Photography Partner",
        logo: "spons/the-incredible-photographers.jpg"
    },
    {
        name: "Anahad Foundation",
        title: "Tarang Associate Partner",
        logo: "spons/anahad.png"
    }
];

for (var s in spons) {
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
