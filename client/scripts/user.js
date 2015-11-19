$(document).ready(function(){
    console.log("Hey it loads!");

    $.ajax({
        type: "GET",
        url: "/user",
        success: function(data){
            console.log(data);
            $("#welcome").text("Welcome, " +  data.username);
            loadProfile(data);
        }
    });
});

function loadProfile(data){
    $('#userInfo').append('<div id="profileBox" class="well"></div>');
    var $el = $('#userInfo').children().last();

    $el.append('<p>First Name: ' + data.firstname + '</p>');
    $el.append('<p>Last Name: ' + data.lastname + '</p>');
    $el.append('<p>Email: ' + data.email + '</p>');
    $el.append('<p>Username: ' + data.username + '</p>');
}