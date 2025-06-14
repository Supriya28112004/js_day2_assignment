//Easy -1//
document.getElementById("main-heading").innerText="My Awesome Shop"

//Easy-2//

document.getElementsByClassName("tagline")[0].innerHTML="Find the <strong>best</strong> products here!"

//Easy -3//
document.querySelector("footer").textContent="&copy; 2025 Donthula Supriya"


//Medium-1//

const main=document.getElementById("app-container")
const header2=document.createElement("h2")
header2.textContent="About us"
main.appendChild(header2)


//Medium -2 & Medium -3//

const main2=document.getElementById("app-container")
const footer2=document.createElement("p")
footer2.textContent="We are a small team passionate about quality products."
main2.appendChild(footer2)


//Hard 1//

const divele=document.createElement("div");
divele.className="Contact-in";
const para1=document.createElement("p")
para1.textContent="Email: contact@awesomeshop.com";
const para2=document.createElement("p");
para2.textContent= "Phone: 123-456-7890";

divele.appendChild(para1);
divele.appendChild(para2);



const footer = document.querySelector('footer');
document.body.insertBefore(divele, footer);



