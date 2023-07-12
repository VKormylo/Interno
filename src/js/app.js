import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const overlay = document.querySelector(".overlay");

function hideOverlay() {
  overlay.classList.remove("active");
  const imagePopup = document.querySelector(".project__popup");
  if (imagePopup.classList.contains("active")) {
    imagePopup.classList.remove("active");
  }
  if (document.documentElement.classList.contains("menu-open")) {
    document.documentElement.classList.remove("menu-open");
  }
}

overlay.addEventListener("click", hideOverlay);

// TOGGLE MENU (BURGER)
function toggleMenu(e) {
  const menuIcon = e.target.closest(".icon-menu");
  if (menuIcon) {
    const imagePopup = document.querySelector(".project__popup");
    if (imagePopup && imagePopup.classList.contains("active")) {
      hideOverlay();
    }
    document.documentElement.classList.toggle("menu-open");
    overlay.classList.toggle("active");
  }
}

document.addEventListener("click", toggleMenu);

// --------------------------------------------------------------------
// ---------------------------- MAIN PAGES ----------------------------
// --------------------------------------------------------------------

// Get name of current page
const pageURL = window.location.pathname.slice(
  1,
  window.location.pathname.indexOf(".")
);
// Create local storage
const storage = window.localStorage;

// HERO SECTION (NOT main page)
const hero = document.querySelector(".hero-sub");

function updateHero() {
  if (hero) {
    // Change background of hero
    const currentPage = hero.dataset.page;
    hero.style.background = `url("../img/hero/${currentPage}.jpg")`;
    // hero.style.backgroundPositionY = "19%";
    // hero.style.backgroundSize = "cover";
    const heroInfo = document.querySelector(".current-page");
    const heroName = document.querySelector(".current-page__name");
    // Change title of hero section when visiting other page
    if (pageURL === "service") {
      const service = localStorage.getItem("service");
      heroName.textContent = service;
    }
    if (pageURL === "project") {
      heroInfo.style.display = "none";
    }
    if (pageURL === "post") {
      heroInfo.style.display = "none";
    }
  }
}

// SERVICES PAGE
const servicesBlock = document.querySelector(".services__container");

function visitService(e) {
  const serviceItem = e.target.closest(".item-services");
  if (!serviceItem) return;
  const serviceName = serviceItem.querySelector(
    ".item-services__title"
  ).textContent;
  // Set current service item to local storage so that we can render needed content
  storage.setItem("service", serviceName);
  location.href = "service.html";
}

// PROJECTS PAGE
const filtersBlock = document.querySelector(".projects__filters");
const filters = document.querySelectorAll(".projects__filter");

function renderProjects(filterType) {
  const projectsEmpty = document.querySelector(".projects__empty");
  const projects = [...document.querySelectorAll(".projects__item")];
  projects.forEach((project) => {
    // Hide all projects
    project.style.display = "none";
    // Show projects that are equal to active filter
    if (project.dataset.filter === filterType) {
      project.style.display = "block";
    }
  });
  // Check if there is at least 1 project
  const isEmpty = !projects.some((project) => {
    return project.style.display === "block";
  });
  // Show empty message if there are no projects
  if (isEmpty) {
    projectsEmpty.style.display = "block";
  } else {
    // Hide empty message
    projectsEmpty.style.display = "none";
  }
}

function filterProjects(e) {
  const newFilter = e.target.closest(".projects__filter");
  // Get active filter text
  const filterType = newFilter.textContent.toLowerCase();
  // Remove all active filters
  filters.forEach((filter) => {
    filter.classList.remove("active");
  });
  // Activate new filter and render projects
  newFilter.classList.add("active");
  renderProjects(filterType);
}

// PROJECT PAGE
const projectsBlock = document.querySelector(".projects__items");

function visitProject(e) {
  const project = e.target.closest(".item-project");
  if (!project) return;
  const projectName = project.querySelector(".item-project__name").textContent;
  // Set current project to local storage
  storage.setItem("project", projectName);
  location.href = "project.html";
}

function initProject() {
  const projectTitle = document.querySelector(".project__title");
  const projectName = storage.getItem("project");
  projectTitle.textContent = `${projectName}s`;
}

const projectPop = document.querySelector(".project__pop");
const projectImage = document.querySelector(".project__image>img");
projectPop?.addEventListener("click", togglePopup);

function togglePopup() {
  const imagePopup = document.querySelector(".project__popup");
  imagePopup.classList.toggle("active");
  const image = imagePopup.querySelector("img");
  image.src = projectImage.src;
  overlay.classList.toggle("active");
}

// FAQ PAGE

function initAccordions() {
  const accordions = document.querySelectorAll(".accordion");
  accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
      // Hide active accordions
      accordions.forEach((acc) => {
        if (accordion !== acc) {
          acc.classList.remove("active");
        }
      });
      // Show active accordion (or hide/toggle)
      accordion.classList.toggle("active");
    });
  });
}

// TEAM MEMBER PAGE
// Creating team object with all members and their data
const teamMembers = {
  levi: {
    name: "Charlotte Levi",
    job: "Designer",
    photo: "team-member-levi",
    skills: {
      design: "65%",
      management: "95%",
      satisfaction: "75%",
    },
  },
  julie: {
    name: "Nattasha Julie",
    job: "Designer",
    photo: "team-member-julie",
    skills: {
      design: "65%",
      management: "90%",
      satisfaction: "70%",
    },
  },
  smith: {
    name: "John Smith",
    job: "Designer",
    photo: "team-member-smith",
    skills: {
      design: "70%",
      management: "85%",
      satisfaction: "70%",
    },
  },
  owen: {
    name: "Nora Owen",
    job: "Designer",
    photo: "team-member-owen",
    skills: {
      design: "60%",
      management: "95%",
      satisfaction: "80%",
    },
  },
  jackson: {
    name: "Avery Jackson",
    job: "Designer",
    photo: "team-member-jackson",
    skills: {
      design: "80%",
      management: "70%",
      satisfaction: "70%",
    },
  },
  levi: {
    name: "Charlotte Levi",
    job: "Designer",
    photo: "team-member-levi",
    skills: {
      design: "65%",
      management: "95%",
      satisfaction: "75%",
    },
  },
  carter: {
    name: "Sofia Carter",
    job: "Designer",
    photo: "team-member-carter",
    skills: {
      design: "90%",
      management: "65%",
      satisfaction: "80%",
    },
  },
  james: {
    name: "Luna	James",
    job: "Designer",
    photo: "team-member-james",
    skills: {
      design: "50%",
      management: "100%",
      satisfaction: "65%",
    },
  },
  mateo: {
    name: "Gianna	Mateo",
    job: "Designer",
    photo: "team-member-mateo",
    skills: {
      design: "70%",
      management: "65%",
      satisfaction: "90%",
    },
  },
  current: "",
};

// Set team object to local storage if it doesn't exist yet
if (!storage.getItem("team")) {
  storage.setItem("team", JSON.stringify(teamMembers));
}

function visitTeamMember(e) {
  const teamMember = e.target.closest(".item-team");
  if (!teamMember) return;
  // Get last name of selected member, and change to lowercase (f.e. smith)
  const memberName = teamMember
    .querySelector(".item-team__name")
    .textContent.split(" ")[1]
    .toLowerCase();
  // Set current member in teamMembers object to selected member
  teamMembers.current = memberName;
  // Set new teamMembers object to local storage
  storage.setItem("team", JSON.stringify(teamMembers));
  location.href = `team-member.html`;
}

function initTeamMember() {
  // Get name of current member from local storage
  const currentMember = JSON.parse(storage.getItem("team")).current;
  // Get current member object from teamMembers object
  const teamMember = teamMembers[currentMember];
  const teamBlock = document.querySelector(".team-member");
  const heroName = document.querySelector(".current-page__name");
  // Change hero name to current member name
  heroName.textContent = teamMember.name;
  // Create email for every team member which consists of first and last name
  const memberEmail = teamMember.name.split(" ").join("").toLowerCase();
  // Create HTML markup for current member page and render it
  const teamHTML = `
  <div class="team-member__container">
     <div class="team-member__general">
       <div class="team-member__image">
         <img src="../img/team/${teamMember.photo}.jpg" alt="photo" />
       </div>
       <div class="team-member__content">
         <h2 class="team-member__name">${teamMember.name}</h2>
         <div class="team-member__job">${teamMember.job}</div>
         <div class="team-member__text">
           <p>
             Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
             turpmaximus.posuere in.Contrpobelie frandomised words which
             don't look even slightly believable.
           </p>
         </div>
         <div class="team-member__info info-actions">
           <div class="info-actions__email info-actions__item">
             <div>
               <img src="../img/icons/mail.svg" alt="icon" />
             </div>
             <a href="#">${memberEmail}@interno.com</a>
           </div>
           <div class="info-actions__phone info-actions__item">
             <div>
               <img src="../img/icons/phone.svg" alt="icon" />
             </div>
             <a href="#">+1 (378) 400-1234</a>
           </div>
           <div class="info-actions__link info-actions__item">
             <div>
               <img src="../img/icons/globe.svg" alt="icon" />
             </div>
             <a href="#">www.${memberEmail}.com</a>
           </div>
           <div class="info-actions__social social">
             <a
               href="#"
               class="social__link fa-brands fa-facebook-f"
             ></a>
             <a href="#" class="social__link fa-brands fa-twitter"></a>
             <a
               href="#"
               class="social__link fa-brands fa-linkedin-in"
             ></a>
             <a href="#" class="social__link fa-brands fa-instagram"></a>
           </div>
         </div>
       </div>
     </div>
     <div class="team-member__biography member-biography">
       <h2 class="member-biography__title">Short Biography​</h2>
       <div class="member-biography__text">
         <p>
           Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
           turpmaximus.posuere in.Contrary to popular belief.There are
           many variations of passages of Lorem Ipsum available, but the
           majority have suffered alteration in some form, njecthumour
           randomised words which don't look even slightly believable.
         </p>
         <p>
           Embarrassing hidden in the middle of text. All the Lorem Ipsum
           generators on the Internet tend to repeat predefined but the
           majority have suffered alteration in some form chunks as
           necessary.
         </p>
       </div>
       <div class="member-biography__info">
         <div class="member-biography__skills member-skills">
           <h4 class="member-skills__title">
             Simplicity and Functionality
           </h4>
           <div class="member-skills__text">
             <p>
               Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
               vitae turpmaximus.posuere in belief.
             </p>
             <p>
               There are many variations of passages of Lorem Ipsum from
               available, but the majority have suffered alteration in
               some form, njecthumour.
             </p>
           </div>
           <div class="member-skills__items">
             <div class="member-skills__item skills-item">
               <div class="skills-item__info">
                 <div class="skills-item__name">Project Design</div>
                 <div class="skills-item__percents" style="--percents: ${teamMember.skills.design}">${teamMember.skills.design}</div>
               </div>
               <div class="skills-item__bar" style="--percents: ${teamMember.skills.design}"></div>
             </div>
             <div class="member-skills__item skills-item">
               <div class="skills-item__info">
                 <div class="skills-item__name">Team Management</div>
                 <div class="skills-item__percents" style="--percents: ${teamMember.skills.management}">${teamMember.skills.management}</div>
               </div>
               <div class="skills-item__bar" style="--percents: ${teamMember.skills.management}"></div>
             </div>
             <div class="member-skills__item skills-item">
               <div class="skills-item__info">
                 <div class="skills-item__name">Client Satisfaction</div>
                 <div class="skills-item__percents" style="--percents: ${teamMember.skills.satisfaction}">${teamMember.skills.satisfaction}</div>
               </div>
               <div class="skills-item__bar" style="--percents: ${teamMember.skills.satisfaction}"></div>
             </div>
           </div>
         </div>
         <div class="member-biography__faq member-faq">
           <h4 class="member-faq__title">Qustion And Answer</h4>
           <div class="member-faq__text">
             <p>
               Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
               vitae turpmaximus.posuere in.
             </p>
           </div>
           <div class="member-faq__items">
             <div class="member-faq__item faq-item">
               <div class="faq-item__title">
                 Website & Mobile App Design?
               </div>
               <div class="faq-item__text">
                 Lorem ipsum dolor sit amet, adipiscing fromAliquam eu
                 sem turpmaximus.
               </div>
             </div>
             <div class="member-faq__item faq-item">
               <div class="faq-item__title">
                 How to Easy Successful Projects?
               </div>
               <div class="faq-item__text">
                 Lorem ipsum dolor sit amet, adipiscing fromAliquam eu
                 sem turpmaximus.
               </div>
             </div>
             <div class="member-faq__item faq-item">
               <div class="faq-item__title">
                 International Trade Experience?
               </div>
               <div class="faq-item__text">
                 Lorem ipsum dolor sit amet, adipiscing fromAliquam eu
                 sem turpmaximus.
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
    </div>
  `;
  teamBlock.innerHTML = teamHTML;
  // Change some contents
  document.querySelector(".team-about__title").textContent = "Our Team Members";
  document.querySelector(".contact-project__title").textContent = "Contact Me";
}

function initFAQs() {
  const faqs = document.querySelectorAll(".faq-item");
  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faqs.forEach((question) => {
        // Hide active faqs
        if (faq !== question) {
          question.classList.remove("active");
        }
      });
      // Show new active faq
      faq.classList.toggle("active");
    });
  });
}

// POST PAGE
const postBlock = document.querySelector(".blog__items");

function visitPost(e) {
  const postItem = e.target.closest(".item-blog");
  if (!postItem) return;
  const postTitle = postItem.querySelector(".item-blog__title").textContent;
  const postDate = postItem.querySelector(".item-blog__date").textContent;
  const postImage = postItem.querySelector(".item-blog__image>img").src;
  // Get name of image src (between last / and .jpg - f.e. 01)
  const postImageSrc = postImage.slice(
    postImage.lastIndexOf("/") + 1,
    postImage.lastIndexOf(".")
  );
  const postTag = postItem.querySelector(".item-blog__label").textContent;
  // Create post object and set to local storage
  const post = {
    title: postTitle,
    date: postDate,
    src: `../img/blog/post-${postImageSrc}.jpg`,
    tag: postTag.split(" ")[0].toLowerCase(),
  };
  storage.setItem("post", JSON.stringify(post));
  location.href = "post.html";
}

function initPost() {
  const postTitle = document.querySelector(".post-main__title");
  const postDate = document.querySelector(".post-main__date");
  const postImage = document.querySelector(".post-main__image>img");
  const navTags = document.querySelectorAll(".nav-tags__item");
  const activeTag = document.querySelector(".post-tags__item.active");
  const contactTitle = document.querySelector(".contact__title");
  // Get current post from local storage and render new HTML
  const post = JSON.parse(storage.getItem("post"));
  postTitle.textContent = post.title;
  postDate.textContent = post.date;
  postImage.src = post.src;
  navTags.forEach((tag) => {
    // Show active tags and hide others
    tag.textContent.toLowerCase() === post.tag
      ? tag.classList.add("active")
      : tag.classList.remove("active");
  });
  // Change active tag name to active tag from post object
  activeTag.textContent = post.tag.charAt(0).toUpperCase() + post.tag.slice(1);
  contactTitle.textContent = "Leave a Reply";
}

function controlPageChange() {
  // Render different pages when url has changed
  servicesBlock?.addEventListener("click", visitService);
  projectsBlock?.addEventListener("click", visitProject);
  postBlock?.addEventListener("click", visitPost);
  if (pageURL === "projects") {
    filtersBlock.addEventListener("click", filterProjects);
    renderProjects("bedroom");
  }
  if (pageURL === "project") initProject();
  if (pageURL === "team" || pageURL === "about") {
    const teamBlock = document.querySelector(
      pageURL === "team" ? ".team__items" : ".team-about__items"
    );
    teamBlock.addEventListener("click", visitTeamMember);
  }
  if (pageURL === "team-member") {
    initTeamMember();
  }
  if (pageURL === "post") {
    initPost();
  }
}

controlPageChange();
updateHero();
initAccordions();
initFAQs();
