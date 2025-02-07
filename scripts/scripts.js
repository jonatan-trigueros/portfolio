document.addEventListener("DOMContentLoaded", () => {
  const heroInfoColorChage = () => {
    setTimeout(() => {
      document.querySelector(".hero__description").style.opacity = 1;
    }, 250);

    setTimeout(() => {
      document.querySelector(".hero__buttons").style.opacity = 1;
    }, 500);

    setTimeout(() => {
      document.querySelector(".hero__image").style.opacity = 1;
    }, 600);
    setTimeout(() => {
      document.querySelector(".hero__image--mobile").style.opacity = 1;
    }, 250);
  };
  heroInfoColorChage();
  const chargeInViewport = (sections, links) => {
    sections = document.querySelectorAll(".toolkit, .education, .work, .contact, .about");
    links = document.querySelectorAll(".hero__buttons-view-work, .hero__description-about-link, .hero__image-link, .header__navigation-link,  .mobile__navigation-link");
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting || (entry.isIntersecting && window.innerWidth <= 1024)) {
          elements = entry.target.querySelectorAll(".toolkit__title, .toolkit__tools-wrapper, .work__title, .work__item, .education__title, .education__description, .education__timeline, .about__title, .about__content, .contact__info, .contact__form-wrapper");
          elements.forEach(element => {
            element.style.display = "flex";
          });
          observer.unobserve(entry.target);
        }
      });
      links.forEach(link => {
        link.addEventListener("click", () => {
          elements = document.querySelectorAll(".toolkit__title, .toolkit__tools-wrapper, .work__title, .work__item, .education__title, .education__description, .education__timeline, .about__title, .about__content, .contact__info, .contact__form-wrapper");
          elements.forEach(element => {
            element.style.display = "flex";
          });
        });
      });
    }, { threshold: 0.3 });
    sections.forEach(section => observer.observe(section));
  };
  chargeInViewport();
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
  const linkedinLogoColorToggle = (
    linkedinLogo,
    currentPath,
    spanish,
    basePath,
    newPath
  ) => {
    linkedinLogo = document.querySelectorAll(".linkedin-logo");
    linkedinLogo.forEach((logo) => {
      currentPath = logo.getAttribute("src");
      spanish = currentPath.startsWith("../");
      basePath = spanish
        ? "../assets/images/social-networks/"
        : "./assets/images/social-networks/";
      newPath =
        currentPath === `${basePath}social-networks_linkedin.webp`
          ? `${basePath}social-networks_linkedin--white.webp`
          : `${basePath}social-networks_linkedin.webp`;
      logo.setAttribute("src", newPath);
    });
  };
  const githubLogoColorToggle = (
    githubLogo,
    currentPath,
    spanish,
    basePath,
    newPath
  ) => {
    githubLogo = document.querySelectorAll(".github-logo");
    githubLogo.forEach((logo) => {
      currentPath = logo.getAttribute("src");
      spanish = currentPath.startsWith("../");
      basePath = spanish
        ? "../assets/images/social-networks/"
        : "./assets/images/social-networks/";
      newPath =
        currentPath === `${basePath}social-networks_github.webp`
          ? `${basePath}social-networks_github--white.webp`
          : `${basePath}social-networks_github.webp`;
      logo.setAttribute("src", newPath);
    });
  };
  const activeLightMode = () => {
    document
      .getElementById("header__color-schema--dark")
      .classList.remove("header__color-schema--toggle");
    document
      .getElementById("header__color-schema--light")
      .classList.add("header__color-schema--toggle");
  };
  const activeDarkMode = () => {
    document
      .getElementById("header__color-schema--light")
      .classList.remove("header__color-schema--toggle");
    document
      .getElementById("header__color-schema--dark")
      .classList.add("header__color-schema--toggle");
  };

  savedTheme === "dark" ? linkedinLogoColorToggle() : null;
  savedTheme === "dark" ? githubLogoColorToggle() : null;
  savedTheme === "dark" ? activeLightMode() : null;

  const themeToggleButton = document.getElementById("theme-tooggle-button");
  themeToggleButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    linkedinLogoColorToggle();
    githubLogoColorToggle();
    currentTheme === "light" ? activeLightMode() : activeDarkMode();
  });

  document.getElementById("burguer").onclick = (burguer, mobileNav) => {
    burguer = document.getElementById("burguer");
    mobileNav = document.getElementById("mobile__navigation");

    burguer.classList.toggle("active");
    mobileNav.classList.toggle("open");

    burguer.classList.contains("active") = true ? burguer.setAttribute("aria-label", "Close navigation") : burguer.setAttribute("aria-label", "Open navigation");
    mobileNav.classList.contains("open") = true ? mobileNav.setAttribute("aria-hidden", "false") : mobileNav.setAttribute("aria-hidden", "true");
  };


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

  const tookitWrapper = document.getElementById("toolkit__tools-wrapper");

  document.getElementById("next-toolkit").addEventListener("click", () => {
    if (tookitWrapper.classList.contains("toolkit__first-slider")) {
      tookitWrapper.classList.remove("toolkit__first-slider");
      tookitWrapper.classList.add("toolkit__second-slider");

      document
        .getElementById("toolkit__pagination__1")
        .classList.remove("toolkit-pagination__current");
      document
        .getElementById("toolkit__pagination__2")
        .classList.add("toolkit-pagination__current");
    } else if (
      window.innerWidth <= 430 &&
      tookitWrapper.classList.contains("toolkit__second-slider")
    ) {
      tookitWrapper.classList.remove("toolkit__second-slider");
      tookitWrapper.classList.add("toolkit__third-slider");

      document
        .getElementById("toolkit__pagination__2")
        .classList.remove("toolkit-pagination__current");
      document
        .getElementById("toolkit__pagination__3")
        .classList.add("toolkit-pagination__current");
    }
  });
  document.getElementById("previous-toolkit").addEventListener("click", () => {
    if (tookitWrapper.classList.contains("toolkit__third-slider")) {
      tookitWrapper.classList.remove("toolkit__third-slider");
      tookitWrapper.classList.add("toolkit__second-slider");

      document
        .getElementById("toolkit__pagination__3")
        .classList.remove("toolkit-pagination__current");
      document
        .getElementById("toolkit__pagination__2")
        .classList.add("toolkit-pagination__current");
    } else if (tookitWrapper.classList.contains("toolkit__second-slider")) {
      tookitWrapper.classList.remove("toolkit__second-slider");
      tookitWrapper.classList.add("toolkit__first-slider");

      document
        .getElementById("toolkit__pagination__2")
        .classList.remove("toolkit-pagination__current");
      document
        .getElementById("toolkit__pagination__1")
        .classList.add("toolkit-pagination__current");
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

  const btn = document.getElementById("button");
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_g02lrgf";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Send Email";
        alert("Sent!");
      },
      (err) => {
        btn.value = "Send Email";
        alert(JSON.stringify(err));
      }
    );
  });

  const customCursor = document.getElementById('custom-cursor');
  const heroImage = document.getElementById('hero__image-link');

  heroImage.addEventListener('mouseenter', () => {
    customCursor.style.display = 'block';
  });

  heroImage.addEventListener('mouseleave', () => {
    customCursor.style.display = 'none';
  });

  heroImage.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${(e.pageX - 50)}px`;
    customCursor.style.top = `${(e.pageY - 50)}px`;
  });
});
