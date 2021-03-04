// DOM Maipulation
// Element Manipulation

// element.innerHTML()
// element.style.<properti CSS>
// document.setAttribute('class', 'opal')
// document.classList.add()
// document.classList.remove()
// document.classList.toogle()
// document.classList.item()
// document.classList.contains()
// document.classList.replace()


// Node Manipulation

const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
pBaru.appendChild(teksPBaru);
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('li baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li);

const link = sectionA.getElementsByTagName('a')[0];

sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const h2Baru = document.createElement('h2');
const teksh2Baru = document.createTextNode('h2 baru');
h2Baru.appendChild(teksh2Baru);

sectionB.replaceChild(h2Baru, p4);