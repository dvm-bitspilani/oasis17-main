var stuccans = [
	{
	  name: "Bharatha Ratna Puli",
	  post: "President, Students Union",
	  email: "president@pilani.bits-pilani.ac.in",
	  phone: "+91 82970 39977",
	  photo: "img/puli.jpg"
	},
	{
	  name: "Shivam Jindal",
	  post: "General Secretary, Students Union",
	  email: "gensec@pilani.bits-pilani.ac.in",
	  phone: "+91 97170 24281",
	  photo: "img/jindal.jpg"
	},
	{
	  name: "Asim Shah",
	  post: "Registration &amp; Other Enquiries",
	  email: "pcr@bits-oasis.org",
	  phone: "+91 70236 11971",
	  photo: "img/asim.jpg"
	},
	{
	  name: "Arnav Kundra",
	  post: "Reception and Accomodation",
	  email: "recnacc@bits-oasis.org",
	  phone: "+91 99280 6633",
	  photo: "img/recnacc.jpg"
	},
	{
	  name: "Nisanth Verma",
	  post: "Department of Controlz",
	  email: "controlz@bits-oasis.org",
	  phone: "+91 80588 77118",
	  photo: "img/controlz.jpg"
	},
	{
	  name: "Arjun Tyagi",
	  post: "Website, App &amp; Online Payments",
	  email: "webmaster@bits-oasis.org",
	  phone: "+91 88750 52545",
	  photo: "img/tyagi.jpg"
	},
	{
	  name: "Gowtam Chandrahasa",
	  post: "Art, Design &amp; Publicity",
	  email: "adp@bits-oasis.org",
	  phone: "+91 99820 84940",
	  photo: "img/adp.jpg"
	},
	{
	  name: "Siddhant Narula",
	  post: "Sponsorship and Marketing",
	  email: "sponsorship@bits-oasis.org",
	  phone: "+91 99822 00768",
	  photo: "img/spons.jpg"
	}
];

for (var s in stuccans) {
	contact_wrapper.innerHTML +=
	'<div class = "person">\
		<center>\
			<div class = "person-pic">\
				<div class = "pic" style = "background-image:url('+stuccans[s].photo+')"></div>\
				<span>'+stuccans[s].name+'</span>\
				<span>'+stuccans[s].post+'</span>\
			</div>\
			<div class = "person-mail">'+stuccans[s].email+'</div>\
			<div class = "person-number">'+stuccans[s].phone+'</div>\
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
