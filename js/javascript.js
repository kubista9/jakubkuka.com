var aboutRightSide = document.getElementById("aboutRightSide");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const newMargin = 300 - scrollPosition / 2;
  aboutRightSide.style.marginTop = newMargin + "px";
});

var aboutLeftSide = document.getElementById("aboutLeftSide");
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const newMargin =  0 - scrollPosition / 6;
  aboutLeftSide.style.marginTop = newMargin + "px";
});

var skills = document.querySelectorAll(".skill");

skills.forEach((skill) => {
  var paragraph = skill.querySelector("p");

  skill.addEventListener("mouseenter", () => {
    paragraph.style.display = "block";
    paragraph.style.transition = "all 0.2s ease-in-out";
    setTimeout(() => {
      paragraph.style.opacity = 1;
    }, 0);
  });

  skill.addEventListener("mouseleave", () => {
    paragraph.style.opacity = 0;
    setTimeout(() => {
      paragraph.style.display = "none";
    }, 300);
  });
});

skills.forEach((skill) => {
  var heading = skill.querySelector("h3");

  skill.addEventListener("mouseenter", () => {
    heading.style.display = "none";
    heading.style.transition = "all 0.2s ease-in-out";
    setTimeout(() => {
      heading.style.opacity = 0;
    }, 0);
  });

  skill.addEventListener("mouseleave", () => {
    heading.style.opacity = 1;
    setTimeout(() => {
      heading.style.display = "unset";
    }, 300);
  });
});


