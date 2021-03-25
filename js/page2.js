var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '</span>';
      },
    },
    autoplay: {
        delay:3000,
    },
  });

  // HEADER


window.onscroll = function() {myFunction(), color()};

var headers= document.getElementById("myHeader");
var sticky = headers.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    headers.classList.add("sticky");
    console.log("ajouter")
  } else {
    headers.classList.remove("sticky");
    console.log("relmove")
  }
}


const header = document.querySelector(".header");
const menu = document.querySelector(".menu");

function color () {
  var top = window.scrollY;
  console.log(top);
  if (top >= 50) {
    console.log("add");
    header.classList.add("active"), menu.classList.add("active");
  } else {
    header.classList.remove("active");
    menu.classList.remove("active");
  }
};


const sr = ScrollReveal ({
    duration : 3000,
    mobile: false,
    reset: true,
});

sr.reveal(".Perso", {
    origin: 'top', 
    // delay: 1000,
   
}, 1000);



