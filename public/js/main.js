$('.picture')
  .css('opacity', 0) // immediately hide element
  .waypoint(function(direction) {
    if (direction === 'down') {
      $(this.element).animate({ opacity: 1 }, 1000)
      sessionStorage.setItem('Slika', 'picture')
    }
   /* else {
      $(this.element).animate({ opacity: 0}, 100);
    } */
  }, {
    offset: '80%'
  })

  $('.opis')
  .css('opacity', 0) // immediately hide element
  .waypoint(function(direction) {
    if (direction === 'down') {
      $(this.element).animate({ opacity: 1 }, 1000)
      sessionStorage.setItem('Opis', 'Tekst');
    } /*
    else {
      $(this.element).animate({ opacity: 0 })
    } */
  }, {
    offset: '80%'
  })

  $('.naslovGalerije').css('opacity', 0).waypoint(function(direction) {
    if (direction === 'down') {
        if (sessionStorage.getItem('titleGallery') !== null) {
            $('naslovGalerije').removeClass('animate__animated animate__slideInLeft')
        }
        else {
        
      $(this.element).addClass('animate__animated animate__slideInLeft')
      $(this.element).css('opacity', 1)
      sessionStorage.setItem('titleGallery', 'title')
    } 
}
  }, {
    offset: '80%'
  })



 // IMG ITEM ANIMATE
$('.img_item').css('opacity', 0)
 .waypoint(function(direction) {
    if (direction === 'down') { 
        if (sessionStorage.getItem('galleryImg') !== null) {
            $(this.element).removeClass('animate__animated animate__flipInX')
            $(this.element).css('opacity', 1);
        }

        else { 
            $(this.element).addClass('animate__animated animate__flipInX')
            $(this.element).css('opacity', 1)
            sessionStorage.setItem('galleryImg', 'galerijaSlika')
        
        }
    }   
    
  }, {
    offset: '80%'
  })
 

  //UTISCI
  $('.utisak')
  .css('opacity', 0) // immediately hide element
  .waypoint(function(direction) {
   
    if (direction === 'down')
     {
        if (sessionStorage.getItem('utisak') !== null) {
            $(this.element).css('opacity', 1)
        }
        else {
      $(this.element).animate({ opacity: 1 }, 500)
      sessionStorage.setItem('utisak','opinion');
    }
  } }, {
    offset: '90%'
  })
  


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
    //Tekst na pocetku
    const tekst = sessionStorage.getItem('Opis');
    if (tekst !== null) {
        var opis = document.getElementById('opis');
        opis.style.opacity= "1";
    }
    //Fotografija na pocetku
    const slika = sessionStorage.getItem('Slika')
    if (slika !== null) {
        var photo = document.getElementById('slika')
        photo.style.opacity='1';
    }
    //Naslov na galeriji
    const naslov = sessionStorage.getItem('titleGallery')
    if (naslov !== null) {
        var naslovGalerije = document.getElementById('titleGall')
        naslovGalerije.style.opacity="1"
       
    }
    // Galerija slika  
    
    const gallery = sessionStorage.getItem('galleryImg');
    if (gallery !== null) {
        $('.img_item');
        $('.img_item').css ('opacity', 1);
    } 

    // UTISAK
    const utisak =  sessionStorage.getItem('utisak')
    if (utisak !==null) {
        $('.utisak').css('opacity', 1) 
    }

    //PROGRESSBAR 
    const progressbar = sessionStorage.getItem('progress');
    if (progressbar !== null) {
        const progressBars = document.querySelectorAll('.bar_color');
        progressBars.forEach(progressBar => {
            const value = progressBar.dataset.broj;
            progressBar.style.width=`${value}%`;
            progressBar.style.transition="0s"
        })
    }
  

}

proveraSession();



// LOCAL STORAGE
window.onload = () => { localstorage()}
const loader = document.getElementById("preloader")

function localstorage() {

localStorage.setItem('preloader', 'loader')
}

window.addEventListener('load', () => {provera_Countera()})
function provera_Countera() {
    const counters = document.querySelectorAll('.counter_number');
    counters.forEach((counter) => {

        const updateCounter1 = () => {
            const target= parseInt(counter.getAttribute('data-target'))
            const count = parseInt(counter.innerText)
    
            
        if  (sessionStorage.getItem('brojac') !== null) {
            counter.innerText = target;
          
        }
    
}
updateCounter1();
    })


}





function provera() {
    const proveraStorage= localStorage.getItem('preloader')
    if (proveraStorage === null)  {
        loader.style.display="flex"
    }
    else {
        loader.style.display="none"
    }
}
provera();

//PRELOADER
const preloader = document.getElementById('preloader')
window.addEventListener('load', () => {
    preload()
})

function preload() {
preloader.classList.add('hide');
}


//SLIDER
let indeks = 0;
let slike = document.querySelectorAll(".slide_item")
let dugmad = document.querySelectorAll(".buttons_below_slider .button");
let ukupanBroj = slike.length

document.getElementById('next')
.addEventListener('click',function () {
    napredSlika()
});

document.getElementById('previous')
.addEventListener('click', function() {
    nazad();
})

function nazad() {
   if (indeks === 0) {
       indeks = ukupanBroj - 1;
       dugmad[0].removeAttribute('id','button')
   }
   else {
       indeks--
       dugmad[indeks+1].removeAttribute('id','button')
   }
   slajder(indeks);
}

function napredSlika() {
if (indeks === ukupanBroj -1) {
    indeks =0;
    dugmad[ukupanBroj-1].removeAttribute('id','button')
}
else {
    indeks++;
    dugmad[indeks-1].removeAttribute('id','button');
}

console.log(indeks)

slajder(indeks)
}

function slajder() {
console.log(slike.length)
for (var slika of slike) {
    slika.removeAttribute('id','active')
    slika.classList.add('hidden')
}
slike[indeks].setAttribute('id','active')
for (var dugme of dugmad){
    dugme.classList.add('klasa')
}
dugmad[indeks].setAttribute('id','button')

}

slajder();



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
const indikator = document.getElementById("indikator")
const respNav = document.getElementById("mylinks")
window.addEventListener('scroll', sticky)

function sticky() {
    if(window.pageYOffset> 300) {

       
        navigacija.style.position="fixed";
        navigacija.style.zIndex="100"
        navigacija.style.width="100%"
        navigacija.classList.add("active_nav")
        indikator.style.position="fixed"
        indikator.style.width="100%"
        indikator.style.zIndex="1000"
        respNav.style.position="fixed"
        respNav.style.top="115px"
       
        
    }

    else {
        indikator.style.position="relative"
        navigacija.style.position="relative";
        navigacija.style.transition="900ms"
        navigacija.classList.remove("active_nav")
        respNav.style.position="relative";
        respNav.style.top="0"
       
    }
}

// OPEN IMG IN GALLERY

let galerija = document.querySelectorAll('.img_item')
if (galerija) {
    galerija.forEach( function(image) {
        image.onclick  = function() {
            let getElementCss = window.getComputedStyle(image);    // Ovom komandom se prikazuju sva svojstva
            let getFullUrl = getElementCss.getPropertyValue("background-image")   // ovom komandom izvlacimo poseban property a to je background-image sa njegovom vrednoscu
            console.log(getFullUrl)
            let getFullPos = getFullUrl.split("/photos/");
            console.log(getFullPos)
            let setNewUrl = getFullPos[1].replace('")', '');
                console.log(setNewUrl)
            let container = document.body;
            let newImgWindow = document.createElement('div');
            container.appendChild(newImgWindow)
            newImgWindow.setAttribute('id', "img-window");
            newImgWindow.setAttribute('onclick', "closebtn()");
            
            

            let newimg = document.createElement("img")
           newImgWindow.appendChild(newimg)
           newimg.setAttribute('src', '/img/photos2/' + setNewUrl )
           console.log(newimg)
        }
        
    })
}

function closebtn() {
let container = document.getElementById("img-window").remove()
}

// INDICATOR



window.addEventListener('scroll', function() {indicator()})

function indicator() {
  var winScroll =  document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("indi").style.width = scrolled + "%"; }

// COUNTER 


window.onscroll = () => {
    counter()
}

function counter() {
    const brojac = document.getElementById("brojac")
    brojac.getBoundingClientRect.top;
    const brojacPosistion = brojac.getBoundingClientRect().top
    const pozicijaEkrana = window.innerHeight;
   
    if(brojacPosistion < pozicijaEkrana ) {
        brojacc();
    } 
}



function brojacc(){
const counters = document.querySelectorAll('.counter_number');
const speed = 40;

counters.forEach((counter) => {

    const updateCounter = () => {
        const target= parseInt(counter.getAttribute('data-target'))
        const count = parseInt(counter.innerText)

        const increment = Math.trunc(target / speed);
        

         if (count < target) {
            
            
            counter.innerText = count + speed;
            setTimeout(updateCounter, 10)
        }
        
    
        else {
            
            counter.innerText = target; 
            sessionStorage.setItem('brojac', 'broj')
            }
            
        
        
    }
    updateCounter()

}) 
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


window.addEventListener('resize', proveraHamburga)

function proveraHamburga() {
    var novi = document.querySelector('.novi');
    const items = document.getElementById("mylinks");
    if(window.innerWidth> 826) {
        items.classList.remove('novi')
    }
}



// PROGRESS BAR
const skillSection = document.getElementById("progress_bar");
const progressBars = document.querySelectorAll('.bar_color');

function showProgress() {
    if (sessionStorage.getItem('progress') === null) {

    
  
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.broj;
       progressBar.style.opacity = 1;
       progressBar.style.width= `${value}%`;
       sessionStorage.setItem('progress', 'numb')
    })
} }




window.addEventListener('scroll', () => {
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos =window.innerHeight;
   
    if(sectionPos < screenPos ) {
        showProgress();
    }

})


