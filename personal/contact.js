const submitBtn = document.querySelector("#contact-submit");
const form = document.querySelector("#contact-form");
let success = true;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = {
    name: form.elements["name"],
    email: form.elements["email"],
    message: form.elements["message"],
  }
  for (const [key, element] of Object.entries(inputs)) { 
    if (element.value.replaceAll(" ", "") === "") { 
      success = false;
      break;
    }
  }
  let para = form.querySelector("p");
  if (!para) { 
    para = document.createElement("p");
    para.style.gridColumn = "span 2";
    para.style.justifySelf = "center";
    para.style.color = "red";
    form.appendChild(para);
  }
  const emailRegex = /^[^\s@]+@[A-Za-z0-9-]+\.[a-zA-Z]+$/.test(inputs["email"].value);
  if (!emailRegex) { 
    para.textContent = "Incorrect Email Format";
  }
  else if (!success) {
    para.textContent = "Empty inputs";
  } else { 
    para.textContent = "success";
    para.style.color = "green"
  }
  success = true;
});