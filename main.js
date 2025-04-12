const html = document.documentElement;
const bar1 = document.querySelector("#bar-1");
const bar2 = document.querySelector("#bar-2");
const bar3 = document.querySelector("#bar-3");
const bar4 = document.querySelector("#bar-4");

function activeProfessionalAnimation() {
  if (html.scrollTop >= 1210) {
    bar1.classList.add("animate-bar1");
    bar2.classList.add("animate-bar2");
    bar3.classList.add("animate-bar3");
    bar4.classList.add("animate-bar4");
  }
}

window.addEventListener("scroll", activeProfessionalAnimation);

function MethodScrolling(id = {}) {
  const { buttonId, pageId } = id;

  this.scrollToTop = () => {
    this.topScrollingButton = document.querySelector(`#${buttonId}`);

    this.topScrollingButton.onclick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    if (!this.topScrollingButton) {
      console.error(`${buttonId} does not exist`);
      return;
    }
    this.addIndicate = () => {
      if (html.scrollTop > 155) {
        this.topScrollingButton.classList.add("indicate");
      }
    };
    this.removeIndicate = () => {
      if (html.scrollTop <= 155) {
        this.topScrollingButton.classList.remove("indicate");
      }
    };

    window.addEventListener("scroll", this.addIndicate);
    window.addEventListener("scroll", this.removeIndicate);
  };

  this.scrollToHome = () => {
    this.homeScrollingButton = document.querySelector(`#${buttonId}`);
    this.homePage = document.querySelector(`#${pageId}`);
    if (!(this.homePage && this.homeScrollingButton)) {
      console.error(`${buttonId} or ${pageId} does not exist`);
      return;
    }

    this.homeScrollingButton.onclick = () => {
      this.homePage.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    };
  };

  this.scrollToProfessional = () => {
    this.professionalScrollingButton = document.querySelector(`#${buttonId}`);
    this.professionalPage = document.querySelector(`#${pageId}`);
    if (!(this.professionalScrollingButton && this.professionalPage)) {
      console.error(`${buttonId} or ${pageId} does not exist`);
      return;
    }

    console.log(this.professionalPage.offsetTop);
    this.professionalScrollingButton.onclick = () => {
      this.professionalPage.scrollIntoView({
        block: "end",
        behavior: "smooth",
      });
    };
  };

  this.scrollToPortfolio = () => {
    this.portfolioScrollingButton = document.querySelector(`#${buttonId}`);
    this.portfolioPage = document.querySelector(`#${pageId}`);

    if (!(this.portfolioPage && this.portfolioScrollingButton)) {
      console.error(`${buttonId} or ${pageId} does not exist`);
      return;
    }

    this.portfolioScrollingButton.onclick = () => {
      this.portfolioPage.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    };
  };

  this.scrollToExperience = () => {
    this.experienceScrollingButton = document.querySelector(`#${buttonId}`);
    this.experiencePage = document.querySelector(`#${pageId}`);

    if (!(this.experiencePage && this.experienceScrollingButton)) {
      console.error(`${buttonId} or ${pageId} does not exist`);
      return;
    }

    this.experienceScrollingButton.onclick = () => {
      this.experiencePage.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    };
  };

  this.scrollToContact = () => {
    this.contactScrollingButton = document.querySelector(`#${buttonId}`);
    this.contactPage = document.querySelector(`#${pageId}`);

    if (!(this.contactPage && this.contactScrollingButton)) {
      console.error(`${buttonId} or ${pageId} does not exist`);
      return;
    }

    this.contactScrollingButton.onclick = () => {
      this.contactPage.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    };
  };
}

const topScrollAction = new MethodScrolling({
  buttonId: "head-scroll",
});
topScrollAction.scrollToTop();

const homeScrollAction = new MethodScrolling({
  buttonId: "home-button",
  pageId: "home-page",
});
homeScrollAction.scrollToHome();

const professionalScrollAction = new MethodScrolling({
  buttonId: "professional-button",
  pageId: "professional-page",
});
professionalScrollAction.scrollToProfessional();

const portfolioScrollAction = new MethodScrolling({
  buttonId: "portfolio-button",
  pageId: "portfolio-page",
});

portfolioScrollAction.scrollToPortfolio();

const experienceScrollAction = new MethodScrolling({
  buttonId: "experience-button",
  pageId: "experience-page",
});

experienceScrollAction.scrollToExperience();

const contactScrollAction = new MethodScrolling({
  buttonId: "contact-button",
  pageId: "contact-page",
});

contactScrollAction.scrollToContact();
