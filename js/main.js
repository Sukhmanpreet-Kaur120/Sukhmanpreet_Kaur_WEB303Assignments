$(document).ready(function () {
  var content = $("#content");

  function load(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          content.slideDown(4000, function () {
            content.html(xhr.responseText);
            content.slideUp(4000);
          });
        } else {
          console.log("Error loading content.");
        }
      }
    };

    xhr.send();
  }
  $("#prospect").click(function () {
    load("prospect.html");
  });

  $("#convert").click(function () {
    load("convert.html");
  });

  $("#retain").click(function () {
    load("retain.html");
  });
});
