document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('BTN');
    const closebtn = document.getElementById('cls-btn');
    const container = document.querySelector('.main-container');
    const body = document.querySelector('body');
    let isOpen = true;
    let isClose = true;
    button.addEventListener('click', isToggleContainer);
    closebtn.addEventListener('click',close);
    
function isToggleContainer(){
    if(isOpen){
        showContainer();
        buttonHideShow()
    }
    else{
        closeContainer();
        button.style.top = "50%";
        isOpen = true;
    }
}
function closeContainer(){
        container.style.display = 'none';
    }
function showContainer() {
        container.style.display = 'block';
        closebtn.style.display = "block"
    }
function buttonHideShow(){
    button.style.display = 'none';
    container.style.display = 'block';
    closebtn.style.display = "none";
    body.style.backgroundColor = "#070F2B";
}
//function close(){
    
//if(isClose){
    //closeContainer();
    //isClose = false;
   // document.getElementById('cls-btn').innerText = "OPEN";
//}
//else{
    //showContainer()
    //isClose = true;
    //document.getElementById('cls-btn').innerText = "ClOSE";
}
)
