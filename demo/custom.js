/* swiper js */
var swiper = new Swiper(".keyboard-control", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 4,
      slideShadows: true
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    },
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      thresholdDelta: 70
    },
    breakpoints: {
      560: {
        slidesPerView: 2.5
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 3
      }
    }
  });
/* swiper js */
var swiper = new Swiper(".main-landing-swiper", {
    effect: "cards",
    grabCursor: true,
    initialSlide: 2,
    speed: 200,
    loop: true,
    autoplay: true,
    rotate: true,
    mousewheel: {
    invert: false,
  },
});

/* gallery js */
var lightboxVideo = GLightbox({
    selector: '.glightbox'
});
lightboxVideo.on('slide_changed', ({ prev, current }) => {
    console.log('Prev slide', prev);
    console.log('Current slide', current);

    const { slideIndex, slideNode, slideConfig, player } = current;
});
/* gallery js */

/* sticky */
document.addEventListener("DOMContentLoaded", function () {
    var stickyElement = document.querySelector(".sticky"),
        stickyClass = "sticky-pin",
        stickyPos = 68,
        stickyHeight;

    // Create a negative margin to prevent content 'jumps':
    var jumpsPreventElement = document.createElement("div");
    jumpsPreventElement.classList.add("jumps-prevent");
    stickyElement.insertAdjacentElement("afterend", jumpsPreventElement);

    function jumpsPrevent() {
        stickyHeight = stickyElement.clientHeight;
        stickyElement.style.marginBottom = "-" + stickyHeight + "px";
        jumpsPreventElement.style.paddingTop = stickyHeight + "px";
    }
    jumpsPrevent();

    // Function trigger:
    window.addEventListener("resize", function () {
        jumpsPrevent();
    });

    // Sticker function:
    function stickerFn() {
        var winTop = window.scrollY || window.pageYOffset;
        if (winTop >= stickyPos) {
            stickyElement.classList.add(stickyClass);
        } else {
            stickyElement.classList.remove(stickyClass);
        }
    }
    stickerFn();

    // Function trigger:
    window.addEventListener("scroll", function () {
        stickerFn();
    });
});

/* sticky */

/* cover image */
var coverImages = document.querySelectorAll(".cover-image");

coverImages.forEach(function (element) {
    var attr = element.getAttribute('data-bs-image-src');
    if (attr !== null) {
        element.style.background = 'url(' + attr + ') center center';
    }
});
/* cover image */

/* tooltip installation */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
/* tooltip installation */

/* counter js */
window.addEventListener("load", function() {
    var counters = document.querySelectorAll(".count");
    var countersQuantity = counters.length;
    var counter = [];

    for (var i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
    }

    var count = function(start, value, id) {
        var localStart = start;
        var interval = setInterval(function() {
            if (localStart < value) {
                localStart++;
                counters[id].innerHTML = localStart;
            } else {
                clearInterval(interval); // Stop the interval when the count is done
            }
        }, 5);
    };

    for (var j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }
});


/* counter js */

/* back to top */
const scrollToTop = document.querySelector(".scrollToTop");
const $rootElement = document.documentElement;
const $body = document.body;
window.onscroll = () => {
    const scrollTop = window.scrollY || window.pageYOffset;
    const clientHt = $rootElement.scrollHeight - $rootElement.clientHeight;
    if (window.scrollY > 100) {
        scrollToTop.style.display = "flex";
    } else {
        scrollToTop.style.display = "none";
    }
};
scrollToTop.onclick = () => {
    window.scrollTo(0, 0);
};
/* back to top */


// ==== for menu scroll
const pageLink = document.querySelectorAll(".nav-scroll");

pageLink.forEach((elem) => {
    elem.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(elem.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            offsetTop: 1 - 60,
        });
    });
});

// section menu active
function onScroll(event) {
    const sections = document.querySelectorAll(".nav-scroll");
    const scrollPos =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

    for (let i = 0; i < sections.length; i++) {
        const currLink = sections[i];
        const val = currLink.getAttribute("href");
        const refElement = document.querySelector(val);
        const scrollTopMinus = scrollPos + 73;
        if (
            refElement.offsetTop <= scrollTopMinus &&
            refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
            document.querySelector(".nav-scroll").classList.remove("active");
            currLink.classList.add("active");
        } else {
            currLink.classList.remove("active");
        }
    }
}

window.document.addEventListener("scroll", onScroll);

document.querySelectorAll('.live-chat').forEach(chatElement => {
    chatElement.addEventListener('click', () => {
            const shadowRoot = mainLiveChatDiv.shadowRoot;
            let msgPopup = shadowRoot.querySelector('.chat-message-popup')
            msgPopup.classList.add('active')
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const statusElement = document.getElementById('online-status');

    function getCurrentIST() {
        const offset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds (UTC+5:30)
        const now = new Date();
        const utc = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
        const istTime = new Date(utc + offset);
        return istTime;
    }

    // Define the start and end time in hours and minutes
    const startHour = 10;
    const startMinute = 0;
    const endHour = 17;
    const endMinute = 0;

    function updateStatusBasedOnTime() {
        const currentIST = getCurrentIST();
        const currentHour = currentIST.getHours();
        const currentMinute = currentIST.getMinutes();
        let currentDay =currentIST.getDay();


        if (
            (currentHour > startHour || (currentHour === startHour && currentMinute >= startMinute)) &&
            (currentHour < endHour || (currentHour === endHour && currentMinute < endMinute)) && (currentDay != 6 && currentDay != 0)
        ) {
            statusElement.textContent = 'Currently Online';
            statusElement.classList.add('online', 'bg-success', 'pulse-success');
            statusElement.classList.remove('offline', 'bg-danger');
            let numEle = document.querySelectorAll('.cont-num')?.forEach(e => e.classList.remove('support-num'));
        } else {
            statusElement.textContent = 'Currently Offline';
            statusElement.classList.add('offline', 'bg-danger');
            statusElement.classList.remove('online', 'bg-success', 'pulse-success');
            let numEle = document.querySelectorAll('.cont-num')?.forEach(e => e.classList.add('support-num'));
        }
        
        // Calculate the time to the next significant check
        scheduleNextCheck(currentIST);
    }

    function scheduleNextCheck(currentIST) {
        let nextCheck;

        const currentHour = currentIST.getHours();
        const currentMinute = currentIST.getMinutes();
        const currentSecond = currentIST.getSeconds();
        const currentMillisecond = currentIST.getMilliseconds();


        if (currentHour < startHour || (currentHour === startHour && currentMinute < startMinute)) {
            // Time to 11:05 AM today
            nextCheck = new Date(currentIST);
            nextCheck.setHours(startHour, startMinute, 0, 0);
        } else if (currentHour > endHour || (currentHour === endHour && currentMinute > endMinute)) {
            // Time to 11:05 AM next day
            nextCheck = new Date(currentIST);
            nextCheck.setDate(nextCheck.getDate() + 1);
            nextCheck.setHours(startHour, startMinute, 0, 0);
        } else if (
            (currentHour === startHour && currentMinute >= startMinute) ||
            (currentHour === endHour && currentMinute <= endMinute)
        ) {
            // Time to 5:05 PM today
            nextCheck = new Date(currentIST);
            nextCheck.setHours(endHour, endMinute, 0, 0);
        }

        const timeToNextCheck = nextCheck - currentIST;

        setTimeout(updateStatusBasedOnTime, timeToNextCheck);
    }

    // Initial check
    updateStatusBasedOnTime();
});


/* For Card Active */
document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.card.custom-card');
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            cards.forEach(function(c) {
                c.classList.remove('active');
            });
            card.classList.add('active');
        });
    });
});
/* For Card Active */


// Select the checkbox and the images
var checkbox = document.querySelector(".switcher-pricing input[type='checkbox']");
var lightImages = document.querySelectorAll(".light-img");
var darkImages = document.querySelectorAll(".dark-img");

checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        lightImages.forEach(function(img) {
            img.style.display = "none";
        });
        darkImages.forEach(function(img) {
            img.style.display = "block";
        });
    } else {
        darkImages.forEach(function(img) {
            img.style.display = "none";
        });
        lightImages.forEach(function(img) {
            img.style.display = "block";
        });
    }
});
// Initialize the display based on the current checkbox status
checkbox.dispatchEvent(new Event('change'));

/* footer year */
document.getElementById("year").innerHTML = new Date().getFullYear();
/* footer year */