// Get the nav links
var homeLink = document.getElementById('home-link');
var aboutLink = document.getElementById('about-link');
var contactLink = document.getElementById('contact-link');

// Add the "active" class to the Home link
homeLink.classList.add('active');



  // Initialize the slider and set options
  var mySlider = new bootstrap.Carousel(document.getElementById('mySlider'), {
    interval: 3000, // Set the interval for automatic sliding (in milliseconds)
    pause: 'hover', // Pause the slider on mouse hover
    wrap: true // Enable continuous sliding
  });


  document.addEventListener("DOMContentLoaded", function() {
    var pagination = document.getElementById("pagination");
    var content = document.querySelector(".card");

    pagination.addEventListener("click", handlePaginationClick);

    function handlePaginationClick(event) {
      event.preventDefault();
      var target = event.target;
      if (target.tagName === "A") {
        var activeItem = document.querySelector("#pagination .active");
        activeItem.classList.remove("active");
        target.parentNode.classList.add("active");

        var page = target.getAttribute("data-page");
        console.log("Clicked page: " + page);

        // Update content based on the clicked page
        if (page === "1") {
          content.innerHTML = "Content for Page 1";
        } else if (page === "2") {
          content.innerHTML = "Content for Page 2";
        } else if (page === "3") {
          content.innerHTML = "Content for Page 3";
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }); 



