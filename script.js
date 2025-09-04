//your JS code here. If required.
const unlist = document.getElementsByTagName("ul")[0];
const lis = document.getElementsByTagName("li");
const btn = document.getElementById("btn");
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const stripPrefix = (bandName) => bandName.replace(/^(a|an|the)\s/i, '');

const sortedBands = bands.sort((a, b) => stripPrefix(a).localeCompare(stripPrefix(b)));

for(let i=0;i<bands.length;i++){
	let newLi = document.createElement("li");
	newLi.textContent = sortedBands[i];
	unlist.appendChild(newLi);
}
