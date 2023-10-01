$(document).ready(function ()
{
    ajaxMethod();
    //jsonMethod();
});
function jsonMethod() {
    $.getJSON("team.json", function(data) {
        $.each(data.members, function (index, object){
            $("#team").append("<h2>" + object.name + "</h2>");
            $("#team").append("<h5>" + object.position + "</h5>");
            $("#team").append("<p>" + object.bio + "</p>");
        });
    });
}

function ajaxMethod(){
    $.ajax({
        type: "GET",
        url: "team.json",
        dataType: "json",
        beforeSend: function (){
            $("#team").text("loading.........");
        },
        error: function (){
            $("#team").text("error: Content could not be retrieved");
        },
        success: function (obj1){
            $("#team").empty();
            setTimeout(function(){
                $.each(obj1.members, function (index, object){
                    $("#team").append("<h2>" + object.name + "</h2>");
                    $("#team").append("<h5>" + object.position + "</h5>");
                    $("#team").append("<p>" + object.bio + "</p>"); 
                });
            }, 3000);
        }
    });
}