
    function hidePreloader() {
      setTimeout(function() {
        document.getElementById("preloader").style.display = "none";
      }, 0000); // Change the delay time here (in milliseconds)
    }

    window.addEventListener("load", hidePreloader); 



