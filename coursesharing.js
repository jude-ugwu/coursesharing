// let contactBtn = document.getElementById("contact");
// let contactList = document.getElementById("courseList");

// contactBtn.addEventListener("mouseover", function(){
//     contactList.style.display = "block";
//     event.stopPropagation();
// })

// document.addEventListener("mouseout",function(){
//     contactList.style.display = "none";
//     event.stopPropagation();
// })

// contactList.addEventListener("mouseout",function(){
//     event.stopPropagation();
// })


// to prevent the search bar form jumping the window to the top when clicked 
// let navInput = document.getElementById("nav-input");

// navInput.addEventListener("focus", function(event){
//   event.preventDefault();
//     // navInput.focus();
// });

let searchFocus = document.getElementById("search-box");

searchFocus.addEventListener("click", function(event){
  event.preventDefault();
});

const navInput = document.getElementById("nav-input");
const searchCart = document.querySelector(".search-cart");

navInput.addEventListener("focus", () => {
  searchCart.classList.add("focused");
});

navInput.addEventListener("blur", () => {
  searchCart.classList.remove("focused");
});




// windows nav bar changes color and styles on scroll
window.addEventListener("scroll", function(){
  let navbar = document.getElementsByTagName("nav")[0];
  let search = this.document.getElementById("search-box");
  // navbar.classList.toggle("windows-scroll", window.scrollY > 0 );  this is another method of achieving what is below they both work

  if (window.scrollY > 150){
    navbar.classList.add("windows-scroll");
    search.style.backgroundColor = "#dfdfdf" // this can be done with css to
  } else{
    navbar.classList.remove("windows-scroll"); 
    search.style.backgroundColor = ""  // this can be done with css to
  }

})

// SLIDE IN EFFECT FOR CART SIDEBAR

let cartBtn = document.getElementById("cart-btn");
let cartSidebar = document.getElementById("cart-sidebar");
let cancelBtn = document.getElementById("cart-icon");
let overlay = document.getElementById("page-overlay");

cartBtn.addEventListener("click", function(event){
  event.preventDefault();

  if (cartSidebar.style.transform === "translate(400px)"){
    cartSidebar.style.transform = "translate(0)";
    overlay.style.opacity = "1"
    overlay.style.visibility = "visible"
  }
    else{
     cartSidebar.style.transform = "translate(400px)";
    overlay.style.opacity = "0"
    overlay.style.visibility = "hidden"
  }
  event.stopPropagation();
});

cancelBtn.addEventListener("click", function(){
    cartSidebar.style.transform = "translate(400px)"
    overlay.style.opacity = "0"
    overlay.style.visibility = "hidden"
});

document.addEventListener("click", function(event){
if (!cartBtn.contains(event.target) && !cartSidebar.contains(event.target)){
  cartSidebar.style.transform = "translate(400px)";
    overlay.style.opacity = "0"
    overlay.style.visibility = "hidden"
}
});



// filter effect on the course section of the web page

// for buttons

let textBtnone = document.getElementById("text-btnone");
let textBtntwo = document.getElementById("text-btntwo");
let textBtnthree = document.getElementById("text-btnthree");
let textBtnfour = document.getElementById("text-btnfour");
let textBtnfive = document.getElementById("text-btnfive");



// for the courses

let courseone = document.getElementById("courseone");
let coursetwo = document.getElementById("coursetwo");
let coursethree = document.getElementById("coursethree");
let coursefour = document.getElementById("coursefour");
let coursefive = document.getElementById("coursefive");
let coursesix = document.getElementById("coursesix");


textBtnone.addEventListener("click", function(){
    courseone.style.display = "block"
    coursetwo.style.display = "block"
    coursethree.style.display = "block"
    coursefour.style.display = "block"
    coursefive.style.display = "block"
    coursesix.style.display = "block"
    textBtnone.style.color = "#0050fe"
    textBtntwo.style.color = "#000"
    textBtnthree.style.color = "#000"
    textBtnfour.style.color = "#000"
    textBtnfive.style.color = "#000"
})


textBtntwo.addEventListener("click", function(){
    courseone.style.display = "none"
    coursetwo.style.display = "block"
    coursethree.style.display = "block"
    coursefour.style.display = "none"
    coursefive.style.display = "none"
    coursesix.style.display = "none"
    textBtntwo.style.color = "#0050fe"
    textBtnone.style.color = "#000"
    textBtnthree.style.color = "#000"
    textBtnfour.style.color = "#000"
    textBtnfive.style.color = "#000"
})


textBtnthree.addEventListener("click", function(){
    courseone.style.display = "none"
    coursetwo.style.display = "block"
    coursethree.style.display = "none"
    coursefour.style.display = "none"
    coursefive.style.display = "none"
    coursesix.style.display = "none"
    textBtnthree.style.color = "#0050fe"
    textBtntwo.style.color = "#000"
    textBtnone.style.color = "#000"
    textBtnfour.style.color = "#000"
    textBtnfive.style.color = "#000"
})

textBtnfour.addEventListener("click", function(){
    courseone.style.display = "none"
    coursetwo.style.display = "none"
    coursethree.style.display = "none"
    coursefour.style.display = "block"
    coursefive.style.display = "none"
    coursesix.style.display = "block"
    textBtnfour.style.color = "#0050fe"
    textBtnthree.style.color = "#000"
    textBtntwo.style.color = "#000"
    textBtnone.style.color = "#000"
    textBtnfive.style.color = "#000"
})

textBtnfive.addEventListener("click", function(){
    courseone.style.display = "block"
    coursetwo.style.display = "none"
    coursethree.style.display = "none"
    coursefour.style.display = "none"
    coursefive.style.display = "none"
    coursesix.style.display = "none"
    textBtnfive.style.color = "#0050fe"
    textBtnfour.style.color = "#000"
    textBtnthree.style.color = "#000"
    textBtntwo.style.color = "#000"
    textBtnone.style.color = "#000"
})

let wishListone = document.getElementsByClassName("fa-heart")[0];
let wishListtwo = document.getElementsByClassName("fa-heart")[1];
let wishListthree = document.getElementsByClassName("fa-heart")[2];
let wishListfour = document.getElementsByClassName("fa-heart")[3];
let wishListfive = document.getElementsByClassName("fa-heart")[4];
let wishListsix = document.getElementsByClassName("fa-heart")[5];

wishListone.addEventListener("click", function(){
    wishListone.style.color = "red"
    // wishListtwo.style.color = "red"
    // wishListthree.style.color = "red"
    // wishListfour.style.color = "red"
    // wishListfive.style.color = "red"
    // wishListsix.style.color = "red"
})


var counters = document.querySelectorAll('.counter');

var observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      startCounting(entry.target);
      observer.unobserve(entry.target); // Animate only once
    }
  });
}, { threshold: 0.5 });

counters.forEach(function(counter) {
  observer.observe(counter);
});

function startCounting(el) {
  var target = parseInt(el.getAttribute('data-target'), 10);
  var duration = 5000;
  var startTime = null;

  function update(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }

    var elapsed = timestamp - startTime;
    var progress = Math.min(elapsed / duration, 1);
    var current = Math.floor(progress * target);

    el.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}






// responsive navigational bar
// let buttons = document.querySelectorAll(".rspv-dd");


// buttons.forEach(function(button){
//   button.addEventListener("click", function(){
//     let dropdown = this.nextElementSibling;
//     let iconDropdown = this.querySelector(".carat-down");

//     dropdown.forEach(function(otherDropdown) {
//         if (otherDropdown !== dropdown) {
//           otherDropdown.style.height = "0px";
//         }
//       });

//       iconDropdown.forEach(function(otherCaret) {
//         if (otherCaret !== iconDropdown) {
//           otherCaret.classList.remove("carat-rotate");
//         }
//       });


//     if (dropdown.style.height === "0px" || dropdown.style.height === ""){
//       dropdown.style.height = dropdown.scrollHeight + "px";
//       dropdown.style.opacity = "1"
//       iconDropdown.classList.add("carat-rotate");

//     }
//     else{
//       dropdown.style.height = "0px";
//        dropdown.style.opacity = "0"
//        iconDropdown.classList.remove("carat-rotate");
//     }


//   })
// })


 let buttons = document.querySelectorAll(".rspv-dd");

  buttons.forEach(function(button) {
    button.addEventListener("click", function () {
      let currentDropdown = this.nextElementSibling;
      let currentCaret = this.querySelector(".carat-down");

      // Close all dropdowns except the one being clicked
      document.querySelectorAll(".rspv-dd-cont").forEach(function(dropdown) {
        if (dropdown !== currentDropdown) {
          dropdown.style.height = "0px";
        }
      });

      document.querySelectorAll(".carat-down").forEach(function(caret) {
        if (caret !== currentCaret) {
          caret.classList.remove("carat-rotate");
        }
      });

      // Toggle current dropdown
      if (currentDropdown.style.height === "0px" || currentDropdown.style.height === "") {

        currentDropdown.style.height = currentDropdown.scrollHeight + "px";
        currentCaret.classList.add("carat-rotate");
        currentDropdown.style.opacity = "1";

      } else {
         currentDropdown.style.height = "0px";
        currentCaret.classList.remove("carat-rotate");
         currentDropdown.style.opacity = "0";
      }
    });
  });

  // SLIDE IN EFFECT FOR SIDE RESPONSIVE NAVIGATIONAL BAR

  let rspvHamBtn = document.querySelector(".hamburger-menue");
  let navSide = document.querySelector(".rspv-nav-bar");
  let sideCloseBtn = document.querySelector(".expand");
  let rspvOverlay = document.querySelector(".rspv-page-overlay");

  rspvHamBtn.addEventListener("click", function(event){
    event.preventDefault()
    
    if (navSide.style.right = "-1500px"){
        navSide.style.right = "0"
       rspvOverlay.style.opacity = "1"
       rspvOverlay.style.visibility = "visible"
    }
    event.stopPropagation()
  })

sideCloseBtn.addEventListener("click", function(){
      navSide.style.right = "-1500px"
        rspvOverlay.style.opacity = "0"
        rspvOverlay.style.visibility = "hidden"
})

  document.addEventListener("click", function(event){
    if(!rspvHamBtn.contains(event.target) && !navSide.contains(event.target)){
      event.preventDefault()
       navSide.style.right = "-1500px"
        rspvOverlay.style.opacity = "0"
       rspvOverlay.style.visibility = "hidden"
    }

    event.stopPropagation()
  })