let bars = document.querySelector(".fa-bars");
let navLinks = document.querySelector(".header .container .links ul");
bars.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
});
document.addEventListener("click", (e) => {
  if (e.target !== navLinks && e.target !== bars) {
    if (navLinks.classList.contains("open")) {
      navLinks.classList.toggle("open");
    }
  }
});

let links = document.querySelectorAll('.header .container .links ul li');
links.forEach((link)=>{
  link.addEventListener('click',(e)=>{
    // e.preventDefault();
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
let theName = document.querySelector(".name");
let textLoad = () => {
  let isFrontEndDeveloper = true;
  setInterval(() => {
    isFrontEndDeveloper = !isFrontEndDeveloper;
    if (isFrontEndDeveloper) {
      theName.textContent = "Abdelkarim Sadek";
    } else {
      theName.textContent = "Front-End Developer";
    }
  }, 4000);
};

textLoad();

let nums = document.querySelectorAll(".sec .container .num h1");

// sec section
let sec = document.querySelector(".sec");
window.onscroll = function () {
  // sec offset top
  let secOffsetTop = sec.offsetTop;
  // sec outer height
  let secOuterHeight = sec.offsetHeight;
  //window height
  let windowHeight = this.innerHeight;
  //window scroll top
  let windowScrollTop = this.scrollY;

  if (windowScrollTop > secOffsetTop + secOuterHeight - windowHeight) {
    nums.forEach((num) => {
      num.textContent = `${num.dataset.num}`;
    });
  }
};

let toggle = document.querySelector(".toggle i");
let sidebar = document.querySelector(".settings-box");
toggle.addEventListener("click", (e) => {
  sidebar.classList.toggle("open-settings");
  toggle.classList.toggle("fa-spin");
});

document.addEventListener('click',(e) => {
  if (e.target !== toggle && e.target !== sidebar) {
    if (toggle.classList.contains('fa-spin') && sidebar.classList.contains('open-settings')) {
      toggle.classList.toggle('fa-spin');
      sidebar.classList.toggle('open-settings');
    }
  }
})
let colors = document.querySelectorAll(".settings-box .settings-container .option-box ul li");

colors.forEach((color) => {
  color.addEventListener("click", (e) => {
    // Remove the 'now' class from all elements in the array
    colors.forEach((element) => {
      element.classList.remove("now");
    });

    // Add the 'now' class to the clicked element's parent
    e.target.classList.add('now');

    // Update mainColors with the clicked color
    let mainColors = e.target.dataset.color;

    // Update the local storage and set the '--main-color' property
    localStorage.setItem("color_option", mainColors);
    document.documentElement.style.setProperty("--main-color", mainColors);
  });
});

// Initialize the 'now' class and '--main-color' property based on local storage
let mainColors = localStorage.getItem("color_option");
if (mainColors !== null) {
  let activeColor = document.querySelector(`[data-color="${mainColors}"]`);
  if (activeColor) {
    activeColor.classList.add("now");
    document.documentElement.style.setProperty('--main-color', mainColors);
  }
}

