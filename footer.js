$(document).ready(function() {
  $('footer').load('footer.html footer', function(response, status, xhr) {
      if (status == "error") {
          console.log("Error: " + xhr.status + ": " + xhr.statusText);
      }
  });
});