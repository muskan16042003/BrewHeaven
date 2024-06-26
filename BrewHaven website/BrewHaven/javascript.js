function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "navlist") {
      x.className += "responsive";
    } else {
      x.className = "navlist";
    }
  }