const links = [ 
	{ 
		name: "GitHub", 
		link: 
"https://github.com/jojosir535", 
		image: 
"./assets/github.png", 
	}, 
	{ 
		name: "Instagram", 
		link: 
"https://www.instagram.com/jovandrasiregar", 
		image: 
"./assets/instagram.png", 
	}, 
	{ 
		name: "E-mail", 
		link: 
"mailto:jovandra.siregar@gmail.com", 
		image: 
"./assets/email.png", 
	}, 
];

const linkContainer = document.getElementById("links"); 

function addLink(name, link, image) { 
	return ` 
<a href="${link}" class="link" target="blank"> 
	<img src="${image}"/> 
	<span>${name} </span> 
</a> 
`; 
} 

let allLinks = ""; 

links.forEach((ele) => { 
	let link = ele.link; 
	let name = ele.name; 
	let image = ele.image; 

	allLinks += addLink(name, link, image); 
}); 

linkContainer.innerHTML = allLinks;
