document.addEventListener("DOMContentLoaded", () => {
const showbtn = document.querySelector(".show-btn")
const mainbox = document.querySelector(".main-box");
const body1 = document.getElementById('body')
showbtn.addEventListener("click",()=>{
mainbox.style.visibility = 'visible';
showbtn.style.display = 'none';
}
)})



