// const windowWidth = window.innerWidth;

// cursors
let cursor1 = document.querySelector(".cursor-1");
let cursor2 = document.querySelector(".cursor-2");
let navChecker = false;

function openNav() {
  navChecker = true;
  let windowWidth = window.innerWidth;

  if (windowWidth < 450) {
    document.querySelector("body").style.marginLeft = "15rem";
  } else {
    document.querySelector("body").style.marginLeft = "25rem";
  }
}

function closeNav() {
  navChecker = false;
  document.querySelector("body").style.marginLeft = "0";
}

window.addEventListener("resize", function () {
  //   document.querySelector("body").style.marginLeft = "0";
  let windowWidth = window.innerWidth;
  if (windowWidth > 772) {
    document.querySelector("body").style.marginLeft = "0";
  } else if (windowWidth < 772 && navChecker) {
    if (windowWidth < 450) {
      document.querySelector("body").style.marginLeft = "15rem";
    } else {
      document.querySelector("body").style.marginLeft = "25rem";
    }
  }
});

window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + "px";
  cursor1.style.left = e.pageX + "px";
  cursor2.style.top = e.pageY + "px";
  cursor2.style.left = e.pageX + "px";
};

document.querySelectorAll("a").forEach((links) => {
  links.onmouseenter = () => {
    cursor1.classList.add("active");
    cursor2.classList.add("active");
  };

  links.onmouseleave = () => {
    cursor1.classList.remove("active");
    cursor2.classList.remove("active");
  };
});
