$(document).ready(function (){
    var content = $('content');
    function loadContent(url) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
    
        xhr.onload = function () {
            if (xhr.status === 200) {
              content.slideDown(400, function () {
                content.html(xhr.responseText);
                content.slideUp(400);
              });
            } else {
              console.log("Error loading content.");
            }
          };
    
        xhr.send();
      }
    
      // Attach click event handlers to the links
      $("#prospect").click(function () {
        loadContent("prospect.html");
      });
    
      $("#convert").click(function () {
        loadContent("convert.html");
      });
    
      $("#retain").click(function () {
        loadContent("retain.html");
      });
    });


