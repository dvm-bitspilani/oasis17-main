var stuccans = [
	{
	  name: "Aditi Pandey",
	  post: "Registration &amp; Other Enquiries",
	  email: "pcr@bits-oasis.org",
	  phone: "Click for Phone Numbers",
	  photo: "img/aditi.jpg",
	  id: "expand",
	  expandData: [
	  		"+91 80033 05723",
		]
	},
	{
	  name: "Yash Devnani",
	  post: "Events, Competitions and Operations",
	  email: "controls@bits-oasis.org",
	  phone: "+91 75979 61803",
	  photo: "img/yash.jpg"
	},
	{
	  name: "Punit Batra",
	  post: "Sponsorship and Marketing",
	  email: "sponsorship@bits-oasis.org",
	  phone: "+91 80033 35712",
	  photo: "img/punit.jpg"
	},
	{
	  name: "Amritanshu Jain",
	  post: "Website, App &amp; Online Payments",
	  email: "webmaster@bits-oasis.org",
	  phone: "+91 99531 08361",
	  photo: "img/amritanshu.jpg"
	},
	{
	  name: "Chirag Parikh",
	  post: "Art, Design &amp; Publicity",
	  email: "adp@bits-oasis.org",
	  phone: "+91 80031 70752",
	  photo: "img/chirag.jpg"
	},
	{
	  name: "Rahul Unnithan",
	  post: "Reception and Accommodation",
	  email: "recnacc@bits-oasis.org",
	  phone: "+91 77372 62761",
	  photo: "img/rahul.jpg"
	},
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
