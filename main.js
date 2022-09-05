const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");

function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-label", "Close navigation menu.");
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-label", "Open navigation menu.");
}

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});

const navbarMenu = navbar.querySelector(".navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);


// ScrollTrigger.create({
//   trigger: '.right-animation',
//   start: 'center center',
//   end: 'bottom top',
//   toggleClass: '.visible', //this toggles the specified CSS class on the trigger element
//   onEnter: drawPoints //this fires the drawPoints function when the trigger enters the scroller from above
// })

// gsap.from(".right-animation", {
// 	scrollTrigger: {
// 	 trigger: '.right-animation', //this is the element that will trigger the animation
// 	 start: 'top center', //this string defines the trigger and scroller start
// 	 end: 'bottom center', //this string defines the trigger and scroller end
// 	 scrub: true //this tells GSAP to link animation progress to scroll progress
//  },
// 	x: 500,
// 	duration: 2
// })

// gsap.from(".left-animation", {
// 	scrollTrigger: {
// 	 trigger: '.left-animation', //this is the element that will trigger the animation
// 	 start: 'top center', //this string defines the trigger and scroller start
// 	 end: 'bottom center', //this string defines the trigger and scroller end
// 	 scrub: true //this tells GSAP to link animation progress to scroll progress
//  },
// 	x: -500,
// 	duration: 2
// });
