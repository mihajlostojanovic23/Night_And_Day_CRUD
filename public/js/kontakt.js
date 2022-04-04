
// TOGGLE LIGHT AND DARK MODE
var lighter = document.getElementById("mode");
lighter.onclick = () => {
    changeMode()
}

function changeMode() {
   var sijalica = document.getElementById('mod');
   sijalica.classList.toggle("proba")
    
   
   var svetliMod = document.body;
   svetliMod.classList.toggle('svetli_mod')

   if (svetliMod.className == 'svetli_mod') {
       sessionStorage.removeItem('default','obican' )
       sessionStorage.setItem('lightMod', 'svetliMod')
   }

   else{
       sessionStorage.removeItem('lightMod', 'svetliMod')
       sessionStorage.setItem('default', 'obican')
   }
   
}

// SESSION STORAGE
function proveraSession() {
    const Svetli = sessionStorage.getItem('lightMod')
    const Obican = sessionStorage.getItem('default');
    if (Svetli !== null && Obican === null) {
        var svetli = document.body;
        svetli.classList.add('svetli_mod');
    } 

}
proveraSession();

// LOCAL STORAGE
window.onload = () => { localstorage()}
const loader = document.getElementById("preloader")

function localstorage() {

localStorage.setItem('preloader', 'loader')
}

// SCROLL TO TOP
 const scrollToTop = document.getElementById("button_up");
window.addEventListener("scroll", showButton)

function showButton() {
   
    if (window.pageYOffset > 200) {
        
        scrollToTop.style.display="block";
    }
    else {
        scrollToTop.style.display="none";
        
       
       
    }
}

scrollToTop.addEventListener('click', backToTop);

function backToTop() {
   document.documentElement.scrollTop = 0;
}

//STICKY NAV
const navigacija = document.getElementById("nav");
const respNav = document.getElementById("mylinks")
window.addEventListener('scroll', sticky)

function sticky() {
    if(window.pageYOffset> 300) {

       
        navigacija.style.position="fixed";
        navigacija.style.zIndex="100"
        navigacija.style.width="100%"
        navigacija.classList.add("active_nav")
        respNav.style.position="fixed"
        respNav.style.top="115px"
    }

    else {
        navigacija.style.position="relative";
        navigacija.style.transition="900ms"
        navigacija.classList.remove("active_nav")
        respNav.style.position="relative";
        respNav.style.top="0"
    }
}

// HAMBURGER 
const hamburg = document.getElementById("hamburg");
hamburg.onclick = () => {
    hamburger();
};

function hamburger() {
  const items = document.getElementById("mylinks");
  items.classList.toggle("novi")
}


