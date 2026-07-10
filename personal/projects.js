class Project { 
  constructor(name, desc, date, link) { 
      this.name = name;
      this.desc = desc;
      this.date = date;
      this.link = link;
    }
    async loadImage() { 
      const url = `images/${this.name}.png`
      const response = await fetch(url);
      const data = response.blob();
    }
    cardCreator(width, height) { 
      return `
      <a href=# title="Click to be redirected to Github" class="project-links" data-link=${this.link}>
        <div class="project-card">
        <section>
            <h3>${this.name}</h3>
            <p class="project-desc">${this.desc}</p>
            <img src="../images/${this.name}.png" width="${width}" height="${height}"/>
            <p><time datetime="${this.date.shortDate}">${this.date.fullDate}</time></p>
        </section>
        </div>
      </a>
      `
    }
}

const parentCard = document.querySelector("#parent-cards");

const projects = [
  new Project(
    "MyPose",
    "Developed a full-stack computer vision application that learns \
  a user’s biomechanics and evaluates exercise form \
  in real time, leveraging machine learning to flag joint \
  deviations and improve movement quality.",
    { fullDate: "January 2026", shortDate: "2026-01" },
    "https://github.com/daviddgonzalez/MyPose"),
  
  new Project(
    "ParallelMe",
    "Built a decision engine with a team using Next.JS that \
  simulates two parallel futures for any user decision.",
    { fullDate: "March 2026", shortDate: "2026-03" },
    "https://github.com/SivanRP/ParallelMe")
];


projects.forEach(project => parentCard.innerHTML += project.cardCreator("350px", "250px"));

parentCard.addEventListener("click", (e) => {
  const currLink = e.target.closest(".project-links");
  if (currLink) {
    e.preventDefault();
    
    const dialog = document.querySelector("#card-dialog");
    const img = document.querySelector("#dialog-img");
    document.querySelector("#github-link").href = currLink.dataset.link;
    img.src = `https://opengraph.githubassets.com/1/${currLink.dataset.link.substring(19)}`
    
    document.querySelector("#overlay-div").classList.add("transparent-bg");
    document.body.style.overflow = "hidden";
    
    dialog.showModal();
    
    document.querySelector("#dialog-close").addEventListener("click", () => {
      document.querySelector("#overlay-div").classList.remove("transparent-bg");
      document.body.style.overflow = "auto";
      dialog.close();
    });
  }
});
