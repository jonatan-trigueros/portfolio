const viewMoreButton = document.querySelectorAll(".work__item-view-more");
const viewLessButton = document.querySelectorAll(".work__item-view-less");

viewMoreButton.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.id.split("-")[2];
    if (!`work__item--${id}-more`) return;
    button.style.display = "none";
    document.getElementById(`work__item--${id}-less`).style.display = "inline";
    document
      .getElementById(`work__item--${id}-details`)
      .classList.add("expand");
  });
});

viewLessButton.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.id.split("-")[2];
    if (!`work__item--${id}-less`) return;
    button.style.display = "none";
    document.getElementById(`work__item--${id}-more`).style.display = "inline";
    document
      .getElementById(`work__item--${id}-details`)
      .classList.remove("expand");
  });
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
}

const themeToggle = document.getElementById("theme-tooggle-button");
themeToggle.addEventListener("click", () => {
  currentTheme = document.documentElement.getAttribute("data-theme");
  newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  const linkedin = document.getElementById("hero__buttons-linkedin");
  const linkedinCurretPath = linkedin.getAttribute("src");
  const linkedinNewpath =
    linkedinCurretPath ===
    "./assets/images/social-networks/social-networks_linkedin.webp"
      ? "./assets/images/social-networks/social-networks_linkedin--white.webp"
      : "./assets/images/social-networks/social-networks_linkedin.webp";
  linkedin.setAttribute("src", linkedinNewpath);

  const github = document.getElementById("hero__buttons-github");
  const githubCurretPath = github.getAttribute("src");
  const githubNewpath =
    githubCurretPath ===
    "./assets/images/social-networks/social-networks_github.webp"
      ? "./assets/images/social-networks/social-networks_github--white.webp"
      : "./assets/images/social-networks/social-networks_github.webp";
  github.setAttribute("src", githubNewpath);
  
  const linkedinMobile = document.getElementById("hero__buttons-linkedin--mobile");
  const linkedinMobileCurretPath = linkedinMobile.getAttribute("src");
  const linkedinMobileNewpath =
    linkedinMobileCurretPath ===
    "./assets/images/social-networks/social-networks_linkedin.webp"
      ? "./assets/images/social-networks/social-networks_linkedin--white.webp"
      : "./assets/images/social-networks/social-networks_linkedin.webp";
  linkedinMobile.setAttribute("src", linkedinMobileNewpath);

  const githubMobile = document.getElementById("hero__buttons-github--mobile");
  const githubMobileCurretPath = githubMobile.getAttribute("src");
  const githubMobileNewpath =
    githubMobileCurretPath ===
    "./assets/images/social-networks/social-networks_github.webp"
      ? "./assets/images/social-networks/social-networks_github--white.webp"
      : "./assets/images/social-networks/social-networks_github.webp";
  githubMobile.setAttribute("src", githubMobileNewpath);

  const code = document.getElementById("work__item-view-code");
  const codeCurretPath = code.getAttribute("src");
  const codeNewpath =
    codeCurretPath ===
    "./assets/images/social-networks/social-networks_github--white.webp"
      ? "./assets/images/social-networks/social-networks_github.webp"
      : "./assets/images/social-networks/social-networks_github--white.webp";
  code.setAttribute("src", codeNewpath);

    if(currentTheme === 'light'){
        document.getElementById('header__color-schema--light').classList.add('header__color-schema--current')
        document.getElementById('header__color-schema--dark').classList.remove('header__color-schema--current');
    }else if(currentTheme === 'dark'){
        document.getElementById('header__color-schema--dark').classList.add('header__color-schema--current')
        document.getElementById('header__color-schema--light').classList.remove('header__color-schema--current')
    }
});


const tookitWrapper = document.getElementById("toolkit__tools-wrapper");

document.getElementById("next-toolkit").addEventListener("click", () => {
  if(tookitWrapper.classList.contains("toolkit__first-slider")){
    tookitWrapper.classList.remove("toolkit__first-slider");
    tookitWrapper.classList.add("toolkit__second-slider");

    document.getElementById("toolkit__pagination__1").classList.remove("toolkit-pagination__current");
    document.getElementById("toolkit__pagination__2").classList.add("toolkit-pagination__current");
  }
  else if(window.innerWidth <= 430 && tookitWrapper.classList.contains("toolkit__second-slider")){
    tookitWrapper.classList.remove("toolkit__second-slider");
    tookitWrapper.classList.add("toolkit__third-slider");
    
    document.getElementById("toolkit__pagination__2").classList.remove("toolkit-pagination__current");
    document.getElementById("toolkit__pagination__3").classList.add("toolkit-pagination__current");
    
    }
  });

document.getElementById("previous-toolkit").addEventListener("click", () => {
  if(tookitWrapper.classList.contains("toolkit__third-slider")){
    tookitWrapper.classList.remove("toolkit__third-slider");
    tookitWrapper.classList.add("toolkit__second-slider");

    document.getElementById("toolkit__pagination__3").classList.remove("toolkit-pagination__current");
    document.getElementById("toolkit__pagination__2").classList.add("toolkit-pagination__current");
  }
  else if(tookitWrapper.classList.contains("toolkit__second-slider")){
    tookitWrapper.classList.remove("toolkit__second-slider");
    tookitWrapper.classList.add("toolkit__first-slider");

    document.getElementById("toolkit__pagination__2").classList.remove("toolkit-pagination__current");
    document.getElementById("toolkit__pagination__1").classList.add("toolkit-pagination__current");

    }
  });


















  const educationWrapper = document.getElementById("education__timeline");

  document.getElementById("next-education").addEventListener("click", () => {
    if (educationWrapper.classList.contains("education__first-slider")) {
      educationWrapper.classList.remove("education__first-slider");
      educationWrapper.classList.add("education__second-slider");
  
      document
        .getElementById("education__pagination__1")
        .classList.remove("education-pagination__current");
      document
        .getElementById("education__pagination__2")
        .classList.add("education-pagination__current");
    } else if (educationWrapper.classList.contains("education__second-slider")) {
      educationWrapper.classList.remove("education__second-slider");
      educationWrapper.classList.add("education__third-slider");
  
      document
        .getElementById("education__pagination__2")
        .classList.remove("education-pagination__current");
      document
        .getElementById("education__pagination__3")
        .classList.add("education-pagination__current");
    } else if (educationWrapper.classList.contains("education__third-slider")) {
      educationWrapper.classList.remove("education__third-slider");
      educationWrapper.classList.add("education__fourth-slider");
  
      document
        .getElementById("education__pagination__3")
        .classList.remove("education-pagination__current");
      document
        .getElementById("education__pagination__4")
        .classList.add("education-pagination__current");
    } else if (educationWrapper.classList.contains("education__fourth-slider")) {
      educationWrapper.classList.remove("education__fourth-slider");
      educationWrapper.classList.add("education__fifth-slider");
  
      document
        .getElementById("education__pagination__4")
        .classList.remove("education-pagination__current");
      document
        .getElementById("education__pagination__5")
        .classList.add("education-pagination__current");
    } else if (educationWrapper.classList.contains("education__fifth-slider")) {
      educationWrapper.classList.remove("education__fifth-slider");
      educationWrapper.classList.add("education__sixth-slider");
  
      document
        .getElementById("education__pagination__5")
        .classList.remove("education-pagination__current");
      document
        .getElementById("education__pagination__6")
        .classList.add("education-pagination__current");
    }
  });
  
  document.getElementById("previous-education").addEventListener("click", () => {
      if (educationWrapper.classList.contains("education__sixth-slider")) {
          educationWrapper.classList.remove("education__sixth-slider");
          educationWrapper.classList.add("education__fifth-slider");
  
          document
              .getElementById("education__pagination__6")
              .classList.remove("education-pagination__current");
          document
              .getElementById("education__pagination__5")
              .classList.add("education-pagination__current");
      } else if (educationWrapper.classList.contains("education__fifth-slider")) {
          educationWrapper.classList.remove("education__fifth-slider");
          educationWrapper.classList.add("education__fourth-slider");
  
          document
              .getElementById("education__pagination__5")
              .classList.remove("education-pagination__current");
          document
              .getElementById("education__pagination__4")
              .classList.add("education-pagination__current");
      } else if (educationWrapper.classList.contains("education__fourth-slider")) {
          educationWrapper.classList.remove("education__fourth-slider");
          educationWrapper.classList.add("education__third-slider");
  
          document
              .getElementById("education__pagination__4")
              .classList.remove("education-pagination__current");
          document
              .getElementById("education__pagination__3")
              .classList.add("education-pagination__current");
      } else if (educationWrapper.classList.contains("education__third-slider")) {
          educationWrapper.classList.remove("education__third-slider");
          educationWrapper.classList.add("education__second-slider");
  
          document
              .getElementById("education__pagination__3")
              .classList.remove("education-pagination__current");
          document
              .getElementById("education__pagination__2")
              .classList.add("education-pagination__current");
      } else if (educationWrapper.classList.contains("education__second-slider")) {
          educationWrapper.classList.remove("education__second-slider");
          educationWrapper.classList.add("education__first-slider");
  
          document
              .getElementById("education__pagination__2")
              .classList.remove("education-pagination__current");
          document
              .getElementById("education__pagination__1")
              .classList.add("education-pagination__current");
      }
  });
  