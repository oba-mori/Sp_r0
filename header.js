$(document).ready(function() {
  $('header').load('header.html header', function(response, status, xhr) {
      if (status == "error") {
          console.log("Error: " + xhr.status + ": " + xhr.statusText);
      }
  });
});