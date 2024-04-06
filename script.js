// const windowWidth = window.innerWidth;
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
