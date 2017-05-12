
      var link = document.querySelector (".offer-btn");
      var popup = document.querySelector (".hotel-search");
      var form = popup.querySelector(".hotel-search-btn");
      
      link.addEventListener("click", function(evt) {
        event.preventDefault();
        if (popup.classList.contains("hotel-search-show")){ 
			popup.classList.remove("hotel-search-show"); 
		} 
		else { 
			popup.classList.add("hotel-search-show"); 
		}
             });