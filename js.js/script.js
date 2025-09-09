document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // पहले सारे बंद कर दो
      faqItems.forEach(i => {
        if (i !== item) {
          i.classList.remove("active");
          const icon = i.querySelector("i");
          if (icon) {
            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");
          }
        }
      });

      // क्लिक किए गए को toggle करो
      item.classList.toggle("active");
      const icon = question.querySelector("i");
      if (item.classList.contains("active")) {
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
      } else {
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
      }
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 992) {
    document.querySelectorAll('.navbar .nav-item.dropdown').forEach(function (dropdown) {
      dropdown.addEventListener('mouseenter', function () {
        const menu = this.querySelector('.dropdown-menu');
        if (menu) {
          menu.classList.add('show');
        }
      });
      dropdown.addEventListener('mouseleave', function () {
        const menu = this.querySelector('.dropdown-menu');
        if (menu) {
          menu.classList.remove('show');
        }
      });
    });
  }
});
