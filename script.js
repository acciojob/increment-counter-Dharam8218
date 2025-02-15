//your JS code here. If required.
const counter = document.getElementById("counter");
const increment = document.getElementById("incrementBtn");

let count = 0;

increment.addEventListener("click",()=>{

	alert(count);
	count++;
	counter.textContent=count;
});