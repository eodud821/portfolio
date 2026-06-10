document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.gnb a[href^="#"]');
  
    links.forEach(function (link) {
      link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);
  
        if (!target) return;
  
        e.preventDefault();
  
        const header = document.querySelector(".header");
        const headerHeight = header ? header.offsetHeight : 0;
        const targetTop =
          target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
  
        window.scrollTo({
          top: targetTop,
          behavior: "smooth",
        });
      });
    });
  });
  