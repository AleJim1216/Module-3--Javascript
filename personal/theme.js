const themeBtn = document.createElement("button");
document.querySelector("header").appendChild(themeBtn);

themeBtn.id = "theme-button";
themeBtn.textContent = "Light";
themeBtn.addEventListener("click", () => {
  if (themeBtn.textContent === "Light") {
    themeBtn.textContent = "Dark";
    document.documentElement.dataset.theme = "Dark";
    localStorage.setItem("theme", "Dark");
  }
  else { 
    themeBtn.textContent = "Light";
    document.documentElement.dataset.theme = "Light";
    localStorage.setItem("theme", "Light");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") !== null) {
    themeBtn.textContent = localStorage.getItem("theme");
    document.documentElement.dataset.theme = localStorage.getItem("theme");
  }
  else {
    themeBtn.textContent = "Light";
    document.documentElement.dataset.theme = "Light";
    localStorage.setItem("theme", "Light");
  }
});

window.addEventListener(`scroll`, () => {
  let scrollBtn = document.querySelector("#scroll-button");
  if (!scrollBtn) {
    scrollBtn = document.createElement("button");
    scrollBtn.setAttribute("id", "scroll-button");
    scrollBtn.textContent = "Scroll to Top";
    document.body.appendChild(scrollBtn);
    console.log("hello");
  }
  else { 
    window.scrollY === 0 ? scrollBtn.style.display = "none" : scrollBtn.style.display = "block";
  }
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  });
});


// const gradientMaker = (textColor, firstColor, secondColor) => ({ 
//   textColor,
//   bgColor: {firstColor, secondColor},
// });

// const headerMaker = (textColor, image) => ({
//   textColor,
//   image,
// });

// const themeObj = (themeText, btn, header, html) => ({
//   themeText,
//   btn,
//   header,
//   html
// });

// function themeChanger(newTheme, themeBtn, header, navBtns, html) { 
//   const btnBGColor = `radial-gradient(circle, ${newTheme.btn.bgColor.firstColor} 0%, ${newTheme.btn.bgColor.secondColor} 100%)`;
//   themeBtn.textContent = newTheme.themeText;
//   themeBtn.style.color = newTheme.btn.textColor;
//   themeBtn.style.backgroundImage = btnBGColor;

//   header.querySelector("h1").style.color = newTheme.header.textColor;
//   header.style.backgroundImage = `url("../images/${newTheme.header.image}")`;
  
//   navBtns.forEach(navBtn => {
//     navBtn.style.backgroundImage = btnBGColor;
//     navBtn.style.color = newTheme.btn.textColor;
//   });
  
//   html.style.backgroundImage = `linear-gradient(to bottom, ${newTheme.html.bgColor.firstColor}, ${newTheme.html.bgColor.secondColor})`;
//   html.style.color = newTheme.html.textColor;
// }

// const navBtns = document.querySelectorAll("#nav-list li a");
// const html = document.querySelector("html");
// const header = document.querySelector("header");

// themeBtn.id = "theme-button";
// themeBtn.style.backgroundImage = getComputedStyle(navBtns[0]).backgroundImage;
// themeBtn.textContent = "Light";

// header.appendChild(themeBtn);

// themeBtn.addEventListener("click", () => { 
//   if (themeBtn.textContent === "Light") {
//     const darkBtn = themeObj(
//       "Dark",
//       gradientMaker("white", "gray", "black","#F1F6B7"),
//       headerMaker("white", "Stars.jpg"),
//       gradientMaker("white", "purple", "black"),
//     );
//     themeChanger(darkBtn, themeBtn, header, navBtns, html);
//   }
//   else if (themeBtn.textContent === "Dark") { 
//     const lightBtn = themeObj(
//       "Light",
//       gradientMaker("black", "white", "gray"),
//       headerMaker("#242625", "Sky.jpg"),
//       gradientMaker("#242625", "#cd98c3", "#242625"),
//     );
//     themeChanger(lightBtn, themeBtn, header, navBtns, html);
//   }
// });

