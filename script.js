document.getElementById("mobile-menu-button").addEventListener("click", function () {
    var topnav = document.querySelector(".topnav");
    if (topnav.classList.contains("active")) {
      topnav.classList.remove("active");
    } else {
      topnav.classList.add("active");
    }
  });
