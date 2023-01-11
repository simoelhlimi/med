const menu = document.getElementById("menu");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  menu.classList.toggle("nav-active");
});

const projects = [
  {
    id: 1,
    name: "E-commerce project",
    info: "create an e-commerce website using HTML, CSS, and JavaScript",
    image: "./assets/img/about.jpg",
  },
  {
    id: 2,
    name: "Food website",
    info: "create a food website using HTML, CSS, and JavaScript",
    image: "./assets/img/pizzle-fast-food-amp-pizza-html-template.jpg",
  },
  {
    id: 3,
    name: "Portfolio",
    info: "create a professional website that showcases your work in a visually appealing way.",
    image: "./assets/img/portfolio2.jpg",
  },
];

const project = document.querySelectorAll(".slid-project-item");

project.forEach((element) => {
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const imgProject = document.getElementById("img-project");
  const nameProject = document.getElementById("project-name");
  const textProject = document.getElementById("text-project");

  let i = 0;
  next.addEventListener("click", (eo) => {
    imgProject.src = projects[i].image;
    nameProject.innerText = projects[i].name;
    textProject.innerText = projects[i].info;
    i++;
    if (i > projects.length - 1) {
      i = 0;
    }
  });
  prev.addEventListener("click", (eo) => {
    imgProject.src = projects[i].image;
    nameProject.innerText = projects[i].name;
    textProject.innerText = projects[i].info;
    i--;
    if (i < 0) {
      i = projects.length - 1;
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  // const sliderProject = projects.map((item) => {
  //   return `<div class="img-project" ${item.id}>
  //   <img src="${item.image}" alt="">
  //  </div>
  //  <div class="data-project">
  //   <h3>${item.name}</h3>
  //   <p>${item.info}</p>
  //   <button class="btn-project">
  //     Demo <i class="uil uil-arrow-right"></i>
  //   </button>
  //  </div>`
  //   })
  // project.innerHTML =
});
