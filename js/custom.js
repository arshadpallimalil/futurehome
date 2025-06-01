// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
var myCarousel = document.querySelector('#carouselExampleControls');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000
});
$('#carouselexamplecontrols').carousel({
  interval: 3000
});

function animateCounter(el) {
      const target = +el.getAttribute('data-target');
      const duration = 2000;
      const frameRate = 60;
      const totalFrames = Math.round(duration / (1000 / frameRate));
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const current = Math.round(target * progress);

        el.textContent = current + (target >= 1000 ? '+' : (target < 10 ? '+ Years' : '+'));

        if (frame === totalFrames) clearInterval(counter);
      }, 1000 / frameRate);
    }
    function showServerDownModal() {
      const myModal = new bootstrap.Modal(document.getElementById('serverDownModal'));
      myModal.show();
    }

    function handleScrollAnimation() {
      const stats = document.querySelectorAll('.stat-number');
      stats.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight && !el.classList.contains('animated')) {
          el.classList.add('animated');
          animateCounter(el);
        }
      });
    }

    window.addEventListener('scroll', handleScrollAnimation);
    window.addEventListener('load', handleScrollAnimation);

     