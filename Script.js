// Typing Animation
const text = ["Front-End Developer","UI Designer","Creative Coder"];
let count=0,index=0,currentText="",letter="";

(function type(){
if(count===text.length){count=0;}
currentText=text[count];
letter=currentText.slice(0,++index);
document.querySelector(".typing").textContent=letter;

if(letter.length===currentText.length){
count++;index=0;
setTimeout(type,1200);
}else{
setTimeout(type,100);
}
})();

// Scroll Reveal
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
const top=el.getBoundingClientRect().top;
if(top<window.innerHeight-100){
el.classList.add("active");
}
});
});

// Dark/Light Toggle
document.getElementById("modeToggle").onclick=()=>{
document.body.classList.toggle("light-mode");
};

// Form Validation
document.getElementById("contactForm").addEventListener("submit",function(e){
e.preventDefault();
alert("Message Sent Successfully!");
});