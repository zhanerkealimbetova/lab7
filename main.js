console.log(document);   // print the initial document object

//h1
let h1 = document.createElement("h1"); 
h1.innerText = "Lab7 Assignment"
h1.style.color = "blue"; 
document.body.appendChild(h1); 


//hr
var x = document.createElement("HR");
document.body.appendChild(x);

//h2
let h2 = document.createElement("h2"); 
h2.innerText = "Task" 
h2.style.color = "red";
document.body.appendChild(h2); 


//p

let p = document.createElement("p"); 
p.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:" 
document.body.appendChild(p); 

const ul = document.createElement("ul");
document.body.appendChild(ul);


//li
let li1 = document.createElement("li");
li1.classList.add ("even");
li1.style.color = "green";
li1.innerHTML ='find elements in the DOM (<b>5 points</b>);';

let li2 = document.createElement("li");
li2.classList.add ("odd");
li2.style.color = "purple";
li2.innerHTML ='create/add/remove elements (<b>5 points</b>);';

let li3 = document.createElement("li");
li3.classList.add ("even");
li3.style.color = "green";
li3.innerHTML ='change content of the elements (<b>5 points</b>);';

let li4 = document.createElement("li");
li4.classList.add ("odd");
li4.style.color = "purple";
li4.innerHTML ='change styles of the elements (<b>5 points</b>);';

let li5 = document.createElement("li");
li5.classList.add ("even");
li5.style.color = "green";
li5.innerHTML ='change attributes of the elements (<b>5 points</b>);';

let li6 = document.createElement("li");
li6.classList.add ("odd");
li6.style.color = "purple";
li6.innerHTML ='change classes of the elements (<b>5 points</b>);';

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
ul.appendChild(li6);

var x1 = document.createElement("HR");
document.body.appendChild(x1);

//new h2
let h22 = document.createElement("h2"); 
h22.innerText = "Submission" 
h22.style.color = "red";
document.body.appendChild(h22); 


//new p
let p2 = document.createElement("p"); 
p2.innerHTML = "To submit your work, follow these instructions:" 
document.body.appendChild(p2); 

const ul2 = document.createElement("ul");
document.body.appendChild(ul2);


//new li
let li11 = document.createElement("li");
li11.classList.add ("even");
li11.style.color = "green";
li11.innerHTML ='Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>);';

let li22 = document.createElement("li");
li22.classList.add ("odd");
li22.style.color = "purple";
li22.innerHTML ='Clone this repository to your local machine and work inside it.';

let li33 = document.createElement("li");
li33.classList.add ("even");
li33.style.color = "green";
li33.innerHTML ='Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>).';

let li44 = document.createElement("li");
li44.classList.add ("odd");
li44.style.color = "purple";
li44.innerHTML ='Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).';

let li55 = document.createElement("li");
li55.classList.add ("even");
li55.style.color = "green";
li55.innerHTML ='Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).';

let li66 = document.createElement("li");
li66.classList.add ("odd");
li66.style.color = "purple";
li66.innerHTML =' Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).';

let li7 = document.createElement("li");
li7.classList.add ("even");
li7.style.color = "green";
li7.innerHTML ='After you finish your work, submit it to the Github (<b>2 points</b>).'
const ulListSecond = document.querySelectorAll("ul") [1];

ulListSecond.appendChild(li11);
ulListSecond.appendChild(li22);
ulListSecond.appendChild(li33);
ulListSecond.appendChild(li44);
ulListSecond.appendChild(li55);
ulListSecond.appendChild(li66);
ulListSecond.appendChild(li7);

var x2 = document.createElement("HR");
document.body.appendChild(x2);

console.log(document);// print the final document object

