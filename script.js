// ============================
// السنة الحالية
// ============================

const year = document.getElementById("year");

if (year) {

  year.textContent =
    new Date().getFullYear();

}



// ============================
// القائمة
// ============================

const menuBtn =
  document.getElementById("menuBtn");

const mobileMenu =
  document.getElementById("mobileMenu");


menuBtn.addEventListener(
  "click",
  function () {

    mobileMenu.classList.toggle("show");

  }
);



// ============================
// إغلاق القائمة عند الضغط على رابط
// ============================

const menuLinks =
  document.querySelectorAll(
    ".mobile-menu a"
  );


menuLinks.forEach(function(link) {

  link.addEventListener(
    "click",
    function() {

      mobileMenu.classList.remove("show");

    }
  );

});
