var stuccans = [
	{
	  name: "Asim Shah",
	  post: "Registration &amp; Other Enquiries",
	  email: "pcr@bits-oasis.org",
	  phone: "Click for Phone Numbers",
	  photo: "img/asim.jpg",
	  id: "expand",
	  expandData: [
			"+91 82091 82501",
			"+91 70731 80405",
			"+91 70236 11971",
			"+91 91669 47424",
			"+91 91192 25593",
			"+91 91192 25134",
			"+91 91192 25189",
			"+91 91192 25102",
			"+91 91192 25645",
		]
	},
	{
	  name: "Nisanth Varma",
	  post: "Events, Competitions and operations",
	  email: "controls@bits-oasis.org",
	  phone: "+91 80588 77118",
	  photo: "img/controlz.jpg"
	},
	{
	  name: "Siddhant Narula",
	  post: "Sponsorship and Marketing",
	  email: "sponsorship@bits-oasis.org",
	  phone: "+91 99822 00768",
	  photo: "img/spons.jpg"
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
	  name: "Arnav Kundra",
	  post: "Reception and Accomodation",
	  email: "recnacc@bits-oasis.org",
	  phone: "+91 99280 26633",
	  photo: "img/recnacc.jpg"
	},
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
	}
];

for (var s in stuccans) {
	var xy =
	'<div class = "person">\
		<center>\
			<div class = "person-pic">\
				<div class = "pic" style = "background-image:url('+stuccans[s].photo+')"></div>\
			</div>\
			<div class = "person-data">\
				<span>'+stuccans[s].name+'</span>\
				<span>'+stuccans[s].post+'</span>\
			</div>\
			<div class = "person-mail">'+stuccans[s].email+'</div>'; 

	if(stuccans[s].id == "expand") {
	xy+= '\
			<div class = "person-number" id="'+stuccans[s].id+'" onclick="expandPCR(this)">'+stuccans[s].phone+'</div>';
	xy += '\
			<div id = "pcrExpandData" class="pcrhidden">\
	';
	for (var ij = 0; ij < stuccans[s].expandData.length; ij++)
	xy += '<span>'+stuccans[s].expandData[ij]+'</span>';
	xy += '</div>';
	}
	else{
		xy+= '\
			<div class = "person-number">'+stuccans[s].phone+'</div>';
	}
	xy += '\
		</center>\
	</div>';
	contact_wrapper.innerHTML += xy;
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

function expandPCR(e) {
	var pic = e.parentNode.querySelector('.person-pic');
	var pcrExpandData = document.querySelector('#pcrExpandData');
	var expand = document.querySelector('#expand');
	if (pic.className == "person-pic") {
		pic.className = "person-pic pcrhidden";
		pcrExpandData.className = "";
		expand.innerHTML = "Click to Hide Numbers";
	}
	else {
		pic.className = "person-pic";
		pcrExpandData.className = "pcrhidden";
		expand.innerHTML = "Click for Phone Numbers";
	}
}
