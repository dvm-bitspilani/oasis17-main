var spons = [
    {
        name: "OnePlus",
        title: "Title Sponsor",
        logo: "img/spons/oneplus.jpg"
    },
    {
        name: "Comedy Central",
        title: "Associate Title Sponsor",
        logo: "img/spons/comedy-central.jpg"
    },
    {
        name: "VH1",
        title: "Associate Title Sponsor",
        logo: "img/spons/vh1.jpg"
    },
    {
        name: "Marshall",
        title: "Powered By",
        logo: "img/spons/marshall.jpg"
    },
    {
        name: "Pepsi",
        title: "Official Beverage Partner",
        logo: "img/spons/pepsi.jpg"
    },
    {
        name: "Droom",
        title: "Platinum Sponsor",
        logo: "img/spons/droom.jpg"
    },
    {
        name: "Living Talent",
        title: "Talent Partner",
        logo: "img/spons/living-talent.jpg"
    },
    {
        name: "Yes Bank",
        title: "Official Banking Partner",
        logo: "img/spons/yesbank.jpg"
    },
    {
        name: "AU Bank",
        title: "Official Banking Partner",
        logo: "img/spons/aubank.jpg"
    },
    {
        name: "HP",
        title: "Technology Partner",
        logo: "img/spons/hp.jpg"
    },
    {
        name: "Whack",
        title: "YouTube Partner",
        logo: "img/spons/whack.jpg"
    },
    {
        name: "The Incredible Photographers",
        title: "Photography Partner",
        logo: "img/spons/the-incredible-photographers.jpg"
    },
    {
        name: "DS Design Lab",
        title: "Fashion Partner",
        logo: "img/spons/dsdesignlab.jpg"
    },
    {
        name: "Paisa Wapas",
        title: "Cashback Partner",
        logo: "img/spons/paisa-wapas.jpg"
    },
    {
        name: "WENOM Dance Group",
        title: "Razzmataz Partner",
        logo: "img/spons/wenom.jpg"
    },
    {
        name: "WooHoo",
        title: "Standup Soapbox Partner",
        logo: "img/spons/woohoo.jpg"
    },
    {
        name: "India's Next Top Model",
        title: "Fashion Parade Partner",
        logo: "img/spons/nexttopmodel.jpg"
    },
    {
        name: "ISIC",
        title: "Student Partner",
        logo: "img/spons/isic.jpg"
    },
    {
        name: "Saavn",
        title: "Streaming Partner",
        logo: "img/spons/saavn.jpg"
    },
    {
        name: "NGT India",
        title: "Oasis To My Eye Partner",
        logo: "img/spons/ngtindia.jpeg"
    }
  ];

var rocktaves = [
  {
    name: "Marshall",
    title: "Title Sponsor",
    logo: "img/spons/marshall.jpg"
  },
  {
    name: "Rolling Stone",
    title: "Associate Title Sponsor",
    logo: "img/spons/rollingstone.jpg"
  },
  {
    name: "OnePlus",
    title: "Associate Title Sponsor",
    logo: "img/spons/oneplus.jpg"
  },
  {
    name: "Cult Yard",
    title: "Co-Title Sponsor",
    logo: "img/spons/cultyard.jpg"
  }
];

var special = [{
        name: "Embassy of Israel",
        title: "International Partner",
        logo: "img/spons/israel-embassy.jpg"
    },
    // {
    //     name: "Embassy of Israel",
    //     title: "International Partner",
    //     logo: "img/spons/israel-2.jpg"
    // },
    {
        name: "Embassy of Portugal",
        title: "International Partner",
        logo: "img/spons/portugal-embassy.jpg"
    },
    {
        name: "Anahad Foundation",
        title: "Tarang Associate Partner",
        logo: "img/spons/anahad.jpg"
    }
];

var medias = [
  {
      name: "InShorts",
      title: "Media Partner",
      logo: "img/spons/inshorts.jpg"
  },
  {
      name: "9xO",
      title: "Media Partner",
      logo: "img/spons/9xo.jpg"
  },
  {
      name: "ATKT",
      title: "Media Partner",
      logo: "img/spons/atkt.jpg"
  },
  {
      name: "The Week",
      title: "Media Partner",
      logo: "img/spons/the-week.jpg"
  },
  {
      name: "Radio City",
      title: "Media Partner",
      logo: "img/spons/radiocity.jpg"
  },
  {
      name: "Student Stories",
      title: "Media Partner",
      logo: "img/spons/student-stories.jpg"
  },
  {
      name: "DEARC",
      title: "Media Partner",
      logo: "img/spons/dearc.jpg"
  },
  {
      name: "University Express",
      title: "Media Partner",
      logo: "img/spons/universityexpress.jpg",
      background: "#000"
  },
  {
      name: "AdGully",
      title: "Media Partner",
      logo: "img/spons/adgully.jpg"
  },
  {
      name: "Woman's Era",
      title: "Media Partner",
      logo: "img/spons/womansera.jpg"
  },
  {
      name: "DU Beat",
      title: "Media Partner",
      logo: "img/spons/dubeat.jpg"
  },
  {
      name: "All Events",
      title: "Media Partner",
      logo: "img/spons/allevents.jpg"
  },
  {
      name: "EFY",
      title: "Media Partner",
      logo: "img/spons/efy.jpg"
  },
  {
      name: "Being Student",
      title: "Media Partner",
      logo: "img/spons/beingstudent.jpg"
  },
  {
      name: "College Desk",
      title: "Media Partner",
      logo: "img/spons/collegedesk.jpg"
  },
  {
      name: "Connect Jaipur",
      title: "Media Partner",
      logo: "img/spons/connectjaipur.jpg"
  },
  {
      name: "Aapka Times",
      title: "Media Partner",
      logo: "img/spons/aapkatimes.jpg"
  },
  {
      name: "FestPav",
      title: "Media Partner",
      logo: "img/spons/festpav.jpg"
  },
  {
      name: "Hee",
      title: "Media Partner",
      logo: "img/spons/hee.jpg"
  },
  {
      name: "Abraxas Media",
      title: "Media Partner",
      logo: "img/spons/abraxas.jpg"
  }
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
		</center>\
	</div>';
  sponsors_wrapper.innerHTML += add;
}

sponsors_wrapper.innerHTML += "<span class=\"spons-title\">Rocktaves Partners</span>";

for (var r = 0; r < rocktaves.length; r++) {
  var add = "";
	add +=
	'<div class = "person">\
		<center>\
			<div class = "person-pic">\
				<div class = "pic" style = "background-image:url('+rocktaves[r].logo+'); background-size: contain"></div>\
			</div>\
			<div class = "person-mail">'+rocktaves[r].title+'</div>\
		</center>\
	</div>';
  sponsors_wrapper.innerHTML += add;
}

sponsors_wrapper.innerHTML += "<span class=\"spons-title\">Special Associations</span>";

for (var s = 0; s < special.length; s++) {
  var add = "";
	add +=
	'<div class = "person">\
		<center>\
			<div class = "person-pic">\
				<div class = "pic" style = "background-image:url('+special[s].logo+'); background-size: contain"></div>\
			</div>\
      <div class = "person-mail">'+special[s].name+'</div>\
		</center>\
	</div>';
  sponsors_wrapper.innerHTML += add;
}

sponsors_wrapper.innerHTML += "<span class=\"spons-title\">Media Partners</span>";

var med = "<div id=\"media\">";
for (var m = 0; m < medias.length; m++) {
  var back = medias[m].background || "#fff";
  med += "<div class=\"m\" style=\"background-color: "+back+"; background-image:url("+medias[m].logo+")\"></div>";
}

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
