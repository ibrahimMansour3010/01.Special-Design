// Random Backgrond Images Storage
if (localStorage.getItem("random-bg") === null) {
  // set item as random as default
  localStorage.setItem("random-bg", "random");
  // add active class on yes as default
  document.getElementById("btn-yes").classList.add("active");
}
// function to random background
function randomBackground() {
  // images
  var imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
  // counter
  var i = 0;
  randbg = setInterval(function () {
    if (localStorage.getItem("random-bg") == "random") {
      // add random bg
      if (i == imgs.length - 1) {
        i = 0;
      } else {
        i++;
      }
      document.getElementById("landing-page").style.backgroundImage =
        "url('../imgs/" + imgs[i] + "')";

      // remove active class on on
      document
        .querySelector(".background-option .btn-no")
        .classList.remove("active");
      // add active class on yes
      document
        .querySelector(".background-option .btn-yes")
        .classList.add("active");
    } else {
      // clear interval
      clearInterval(randbg);
      if (localStorage.getItem("last-bg") != null) {
        document.querySelector(".landing-page").style.backgroundImage =
          localStorage.getItem("last-bg");
      }
      // remove active class on yes
      document
        .querySelector(".background-option .btn-yes")
        .classList.remove("active");
      // add active class on no
      document
        .querySelector(".background-option .btn-no")
        .classList.add("active");
    }
  }, 1000);
}

// Setting Toggle
function showSettingBox() {
  document.getElementById("gearClick").classList.toggle("fa-spin");
  document.getElementById("settingBox").classList.toggle("open");
}

// Switch Colors
var colorLis = document.querySelectorAll(".color-list li");

// loop on all lis
for (var i = 0; i < colorLis.length; i++) {
  colorLis[i].addEventListener("click", function () {
    // Removing active class from all li
    for (var j = 0; j < colorLis.length; j++) {
      colorLis[j].classList.remove("active");
    }
    // change main color
    document.documentElement.style.setProperty(
      "--main-color",
      this.getAttribute("data-color".toString())
    );
    // store it in local storage
    localStorage.setItem("color-value", this.getAttribute("data-color"));
    this.classList.add("active");
  });
}

// check of there is color stored in local storage or not
if (localStorage.getItem("color-value") !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color-value")
  );
  // reomve all active classes
  for (var j = 0; j < colorLis.length; j++) {
    colorLis[j].classList.remove("active");
    if (
      localStorage.getItem("color-value") ==
      colorLis[j].getAttribute("data-color")
    ) {
      colorLis[j].classList.add("active");
    }
  }
}

// random background btn
var bgBtnYes = document.querySelector(".background-option .btn-yes");
var bgBtnNo = document.querySelector(".background-option .btn-no");

bgBtnYes.onclick = function () {
  localStorage.setItem("random-bg", "random");
  randomBackground();
};
bgBtnNo.onclick = function () {
  localStorage.setItem("random-bg", "not-random");
  localStorage.setItem(
    "last-bg",
    document.querySelector(".landing-page").style.backgroundImage
  );
  randomBackground();
};
randomBackground();

// Scrolling animation for Skills

let skills = document.querySelector(".skill");

// console.log(skills);

window.onscroll = function () {
  // Skill Offset Top
  let skillOffsetTop = skills.offsetTop;
  // console.log(skillOffsetTop);

  // Skill Offset Heigh
  let skillOffsetHeigh = skills.offsetHeight;
  // console.log(skillOffsetHeigh);

  // Window Inner Heigh
  let windowInner = this.innerHeight;
  // console.log(windowInner);
  // console.log(( skillOffsetTop + skillOffsetHeigh - windowInner ));
  // console.log(this.pageYOffset);

  if (this.pageYOffset > skillOffsetTop + skillOffsetHeigh - windowInner) {
    let skillsBar = document.querySelectorAll(".skill-progress-bar");
    for (let index = 0; index < skillsBar.length; index++) {
      skillsBar[index].style.width =
        skillsBar[index].getAttribute("data-width");
    }
  }
};

// Popup Gallary Gallary

let images = document.querySelectorAll(".gallary .image-box img");
// loop on each image

for (let index = 0; index < images.length; index++) {
  let img = images[index];
  // click on each image
  img.addEventListener("click", function () {
    // create div for overlay on body
    let overlay = document.createElement("div");
    // add class overlay on this div
    overlay.className = "popup-overlay";
    // add overlay div into body
    document.body.appendChild(overlay);
    // create popup image box
    let imageBox = document.createElement("div");
    // add popupImage class to image box
    imageBox.className = "popup-image-box";
    // Add image to body
    document.body.appendChild(imageBox);
    // create h2 for image alt
    let imageAlt = document.createElement("h2");
    // text on h2 from image alt
    let imageTitle = document.createTextNode(img.alt);
    // append image title on h2
    imageAlt.appendChild(imageTitle);
    // appen image alt to image box
    imageBox.appendChild(imageAlt);
    // create image
    let popupImage = document.createElement("img");
    // add source to image from image clicked
    popupImage.src = img.src;
    // append image on imagebox
    imageBox.appendChild(popupImage);
    // create close button
    let closeBTN = document.createElement("span");
    // text on span
    let spanTxt = document.createTextNode("X");
    // add txt node to span
    closeBTN.appendChild(spanTxt);
    // add class on close btn
    closeBTN.className = "close-btn";
    // add close btn to image box
    imageBox.appendChild(closeBTN);
  });
}
// close button functionality
document.addEventListener("click", function (e) {
  if (e.target.className == "close-btn") {
    // remove image box
    e.target.parentNode.remove();
    // remove overlay
    document.querySelector(".popup-overlay").remove();
  }
});

// function to scroll bullets and links
function scrollToSections(elements) {
  for (let index = 0; index < elements.length; index++) {
    elements[index].addEventListener("click", function (e) {
      // console.log("."+this.getAttribute("data-section"));
      e.preventDefault();
      document
        .querySelector("." + this.getAttribute("data-section"))
        .scrollIntoView({
          behavior: "smooth",
        });
    });
  }
}

// get all bullets
let bullets = document.querySelectorAll(".bullet");
// get all links
let links = document.querySelectorAll(".links li a");
scrollToSections(bullets);
scrollToSections(links);

// Bullets Handle in Storage
if (localStorage.getItem("bullet_option") === null) {
  // set item as random as default
  localStorage.setItem("bullet_option", "show");
  // add active class on yes as default
  document.querySelector(".bullet-option .btn-yes").classList.add("active");
}

// Bullets option btn
var btnYesBullet = document.querySelector(".bullet-option .btn-yes");
var btnNoBullet = document.querySelector(".bullet-option .btn-no");

btnYesBullet.onclick = function () {
  localStorage.setItem("bullet_option", "show");
  handleBullets();
};
btnNoBullet.onclick = function () {
  localStorage.setItem("bullet_option", "no");
  handleBullets();
};

// function to random background
function handleBullets() {
  var navBullet = document.querySelector(".nav-bullets");
  // check in local storage
  if (localStorage.getItem("bullet_option") == "show") {
    // show bullets
    navBullet.style.display = "block";
    // add active class on yes
    document.querySelector(".bullet-option .btn-yes").classList.add("active");
    // remove active class on no
    document.querySelector(".bullet-option .btn-no").classList.remove("active");
  } else {
    // hide bullets
    navBullet.style.display = "none";
    // add active class on no
    document.querySelector(".bullet-option .btn-no").classList.add("active");
    // remove active class on yes
    document
      .querySelector(".bullet-option .btn-yes")
      .classList.remove("active");
  }
}
handleBullets();

// reset all local storage
document.querySelector(".reset-btn").onclick = function () {
  localStorage.clear();
  window.location.reload();
};

// toggle menu
document.querySelector(".toggle-btn").onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("menu-active");
  document.querySelector(".links-container .links").classList.toggle("open");
};

// click anywhare
document.addEventListener("click", function (e) {
  if (
    e.target != document.querySelector(".toggle-btn") ||
    e.target != document.querySelector(".links-container .links")
  ) {
    document.querySelector(".toggle-btn").classList.remove("menu-active");
    document.querySelector(".links-container .links").classList.remove("open");
  }
});

// stop propagation
document.querySelector(".links-container .links").onclick = function (e) {
  e.stopPropagation();
};
