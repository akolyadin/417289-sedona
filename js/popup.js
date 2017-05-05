
      var link = document.querySelector (".offer-btn");
      var popup = document.querySelector (".hotel-search");
      var form = popup.querySelector(".hotel-search-btn");
      
      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.toggle("hotel-search-show");
             });
      
      form.addEventListener("submit", function(evt) {
        evt.preventDefault();
        console.log("sfdasfsd");
      })


