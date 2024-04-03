# Maea Matugas (Portfolio)

This is the portfolio that I will be using for my projects.

## Things That I Learned:

1. When creating a button it is better to add padding and add a color after.

2. Align the elements first then add: margin, padding and styles after.

3. It is better to use max-width rather than the normal width.

4. ```js
   let navChecker = false;
   function openNav() {
     navChecker = true;
     document.querySelector("body").style.marginLeft = "25rem";
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
       document.querySelector("body").style.marginLeft = "25rem";
     }
   });
   ```

checking window size using DOM
